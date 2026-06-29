import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

// ─── Canvas 3D Orb ─────────────────────────────────────────────────────────────
function OrbCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let angle = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const R = Math.min(canvas.width, canvas.height) * 0.3;

            // Outer nebula glow
            const nebula = ctx.createRadialGradient(cx, cy, R * 0.4, cx, cy, R * 3.5);
            nebula.addColorStop(0, 'rgba(140, 69, 255, 0.13)');
            nebula.addColorStop(0.45, 'rgba(80, 20, 180, 0.04)');
            nebula.addColorStop(1, 'transparent');
            ctx.fillStyle = nebula;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dark sphere base
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.fillStyle = '#020005';
            ctx.fill();

            // Lit surface gradient (highlight moves slowly)
            const lx = cx - R * 0.32 + Math.sin(angle * 0.22) * R * 0.05;
            const ly = cy - R * 0.32 + Math.cos(angle * 0.22) * R * 0.05;
            const sph = ctx.createRadialGradient(lx, ly, 0, cx, cy, R);
            sph.addColorStop(0, 'rgba(230, 200, 255, 0.98)');
            sph.addColorStop(0.12, 'rgba(184, 120, 255, 0.92)');
            sph.addColorStop(0.42, 'rgba(90, 20, 180, 0.88)');
            sph.addColorStop(0.72, 'rgba(30, 0, 80, 0.94)');
            sph.addColorStop(1, 'rgba(5, 0, 20, 0.99)');
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.fillStyle = sph;
            ctx.fill();

            // Rim light (opposite side warm glow)
            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.clip();
            const rim = ctx.createRadialGradient(cx + R * 0.58, cy + R * 0.28, 0, cx + R * 0.58, cy + R * 0.28, R);
            rim.addColorStop(0, 'rgba(140, 69, 255, 0.4)');
            rim.addColorStop(1, 'transparent');
            ctx.fillStyle = rim;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();

            // Latitude lines (subtle surface detail)
            ctx.save();
            ctx.globalAlpha = 0.045;
            ctx.strokeStyle = 'rgba(200, 150, 255, 1)';
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.clip();
            for (let i = -5; i <= 5; i++) {
                if (i === 0) continue;
                const ey = cy + (R * i) / 5.5;
                const ew = Math.sqrt(Math.max(0, R * R - (ey - cy) ** 2));
                ctx.beginPath();
                ctx.ellipse(cx, ey, ew, ew * 0.1, 0, 0, Math.PI * 2);
                ctx.stroke();
            }
            // Longitude arc
            ctx.beginPath();
            ctx.ellipse(cx, cy, R * 0.4, R, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();

            // Glow halo
            const halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.55);
            halo.addColorStop(0, 'rgba(140, 69, 255, 0.28)');
            halo.addColorStop(0.5, 'rgba(100, 30, 200, 0.07)');
            halo.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(cx, cy, R * 1.55, 0, Math.PI * 2);
            ctx.fillStyle = halo;
            ctx.fill();

            // Orbiting ring of dots
            const dotCount = 12;
            for (let i = 0; i < dotCount; i++) {
                const a = angle * 0.32 + (i * Math.PI * 2) / dotCount;
                const orb = R * 1.16;
                const px = cx + Math.cos(a) * orb;
                const py = cy + Math.sin(a) * orb * 0.3;
                // Z depth: dots "behind" sphere are hidden/dim
                const depth = Math.sin(a);
                if (depth > 0.1) continue; // behind sphere
                const alpha = 0.15 + 0.5 * Math.abs(depth);
                const size = 1.2 + Math.abs(depth) * 0.8;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(184, 148, 255, ${alpha})`;
                ctx.fill();
            }

            // Sparse floating particles (background)
            ctx.save();
            ctx.globalAlpha = 0.25;
            const seed = Math.floor(angle / 50);
            for (let i = 0; i < 40; i++) {
                const px = ((i * 137.5 + seed * 11) % canvas.width);
                const py = ((i * 97.3 + seed * 7) % canvas.height);
                const dist = Math.hypot(px - cx, py - cy);
                if (dist < R * 1.6) continue;
                const flicker = 0.3 + 0.7 * Math.abs(Math.sin(angle * 0.5 + i));
                ctx.beginPath();
                ctx.arc(px, py, 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 180, 255, ${flicker * 0.4})`;
                ctx.fill();
            }
            ctx.restore();

            angle += 0.007;
            animId = requestAnimationFrame(render);
        };

        resize();
        window.addEventListener('resize', resize);
        render();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.92 }}
        />
    );
}

// ─── Hero Component ─────────────────────────────────────────────────────────────
export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
            {/* Canvas Orb */}
            <OrbCanvas />

            {/* Vignette edges */}
            <div className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(2,0,5,0.7) 100%)'
                }}
            />

            {/* Content — over the orb */}
            <div className="relative z-20 text-center px-6 select-none">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-10 inline-flex items-center gap-3"
                >
                    <span className="h-px w-12 bg-brand-gold/60" />
                    <span className="text-brand-gold/80 text-xs font-sans font-medium tracking-[0.35em] uppercase">
                        Agência Digital · Icó-CE
                    </span>
                    <span className="h-px w-12 bg-brand-gold/60" />
                </motion.div>

                {/* Main title — richardmattka style: huge + letter-spaced */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display leading-none tracking-[0.18em] text-white"
                    style={{
                        fontSize: 'clamp(3.5rem, 12vw, 11rem)',
                        textShadow: '0 0 80px rgba(140,69,255,0.35), 0 2px 40px rgba(0,0,0,0.8)'
                    }}
                >
                    TAMAR<span className="text-brand-gold"> AI</span>
                </motion.h1>

                {/* Subtitle — pipe separators like richardmattka */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-5 text-white/45 font-sans font-light tracking-[0.32em] uppercase text-xs md:text-sm"
                >
                    Landing Pages&nbsp;&nbsp;|&nbsp;&nbsp;Automação IA&nbsp;&nbsp;|&nbsp;&nbsp;Tráfego Pago
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.1 }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <button
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                        className="group relative px-10 py-4 border border-brand-gold/50 text-white font-sans text-sm font-medium tracking-[0.22em] uppercase hover:border-brand-gold transition-all duration-500 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-all duration-500" />
                        <span className="relative">Fale Conosco</span>
                    </button>
                    <a
                        href="#servicos"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-white/40 font-sans text-sm font-light tracking-[0.2em] uppercase hover:text-white/70 transition-colors duration-300"
                    >
                        Ver serviços
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} />
                </motion.div>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
