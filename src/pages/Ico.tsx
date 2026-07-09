import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
    MapPin, BarChart2, Globe, Bot, MessageSquare, Star,
    ArrowRight, Users, TrendingUp, Clock
} from 'lucide-react';
import { Container } from '../components/ui/container';
import { SectionWrapper } from '../components/ui/section-wrapper';
import { Button } from '../components/ui/button';
import { CONTACT_INFO } from '../constants';

// ─── JSON-LD ─────────────────────────────────────────────────────────────────
const SCHEMA_LOCAL = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TamarAI – Agência Digital em Icó-CE",
    "description": "Agência digital em Icó-CE especializada em marketing digital, tráfego pago, criação de sites e automação com IA para negócios do interior do Ceará.",
    "url": "https://www.tamarai.com.br/agencia-digital-ico-ce",
    "telephone": "+5588992145589",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Icó",
        "addressRegion": "CE",
        "addressCountry": "BR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": -6.4011, "longitude": -38.8614 },
    "areaServed": [
        { "@type": "City", "name": "Icó", "addressRegion": "CE" },
        { "@type": "City", "name": "Iguatu", "addressRegion": "CE" },
        { "@type": "City", "name": "Juazeiro do Norte", "addressRegion": "CE" },
        { "@type": "City", "name": "Orós", "addressRegion": "CE" }
    ],
    "priceRange": "R$500–R$3000",
    "sameAs": ["https://www.instagram.com/tamar_ia_"]
};

const SCHEMA_FAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Tem agência digital em Icó-CE?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim. A TamarAI é uma agência digital sediada em Icó-CE, especializada em marketing digital, tráfego pago (Meta Ads e Google Ads), criação de sites e automação com IA para negócios do interior do Ceará." }
        },
        {
            "@type": "Question",
            "name": "Quanto custa tráfego pago para empresas em Icó?",
            "acceptedAnswer": { "@type": "Answer", "text": "A gestão de tráfego pago começa a partir de R$500/mês na TamarAI, além da verba de anúncios definida com o cliente. Atendemos restaurantes, clínicas, lojas e prestadores de serviço em Icó e região." }
        },
        {
            "@type": "Question",
            "name": "A TamarAI faz Google Meu Negócio para empresas em Icó?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim. Fazemos setup e otimização completa do Google Business Profile para empresas de Icó-CE, incluindo palavras-chave locais, fotos estratégicas, posts e gestão de avaliações." }
        },
        {
            "@type": "Question",
            "name": "Vocês criam sites para pequenas empresas em Icó?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sim. Criamos landing pages e sites institucionais com foco em conversão, SEO local e WhatsApp integrado, a partir de R$2.000. Atendemos Icó, Iguatu, Orós e toda a região." }
        }
    ]
};

// ─── Orb Canvas (mesma animação da Home) ─────────────────────────────────────
function OrbCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animId: number;
        let angle = 0;
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const R = Math.min(canvas.width, canvas.height) * 0.3;
            const nebula = ctx.createRadialGradient(cx, cy, R * 0.4, cx, cy, R * 3.5);
            nebula.addColorStop(0, 'rgba(140, 69, 255, 0.13)');
            nebula.addColorStop(0.45, 'rgba(80, 20, 180, 0.04)');
            nebula.addColorStop(1, 'transparent');
            ctx.fillStyle = nebula;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = '#020005'; ctx.fill();
            const lx = cx - R * 0.32 + Math.sin(angle * 0.22) * R * 0.05;
            const ly = cy - R * 0.32 + Math.cos(angle * 0.22) * R * 0.05;
            const sph = ctx.createRadialGradient(lx, ly, 0, cx, cy, R);
            sph.addColorStop(0, 'rgba(230, 200, 255, 0.98)');
            sph.addColorStop(0.12, 'rgba(184, 120, 255, 0.92)');
            sph.addColorStop(0.42, 'rgba(90, 20, 180, 0.88)');
            sph.addColorStop(0.72, 'rgba(30, 0, 80, 0.94)');
            sph.addColorStop(1, 'rgba(5, 0, 20, 0.99)');
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = sph; ctx.fill();
            ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
            const rim = ctx.createRadialGradient(cx + R * 0.58, cy + R * 0.28, 0, cx + R * 0.58, cy + R * 0.28, R);
            rim.addColorStop(0, 'rgba(140, 69, 255, 0.4)'); rim.addColorStop(1, 'transparent');
            ctx.fillStyle = rim; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.restore();
            ctx.save(); ctx.globalAlpha = 0.045; ctx.strokeStyle = 'rgba(200, 150, 255, 1)'; ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
            for (let i = -5; i <= 5; i++) {
                if (i === 0) continue;
                const ey = cy + (R * i) / 5.5;
                const ew = Math.sqrt(Math.max(0, R * R - (ey - cy) ** 2));
                ctx.beginPath(); ctx.ellipse(cx, ey, ew, ew * 0.1, 0, 0, Math.PI * 2); ctx.stroke();
            }
            ctx.beginPath(); ctx.ellipse(cx, cy, R * 0.4, R, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
            const halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.55);
            halo.addColorStop(0, 'rgba(140, 69, 255, 0.28)'); halo.addColorStop(0.5, 'rgba(100, 30, 200, 0.07)'); halo.addColorStop(1, 'transparent');
            ctx.beginPath(); ctx.arc(cx, cy, R * 1.55, 0, Math.PI * 2); ctx.fillStyle = halo; ctx.fill();
            const dotCount = 12;
            for (let i = 0; i < dotCount; i++) {
                const a = angle * 0.32 + (i * Math.PI * 2) / dotCount;
                const orb = R * 1.16;
                const px = cx + Math.cos(a) * orb;
                const py = cy + Math.sin(a) * orb * 0.3;
                const depth = Math.sin(a);
                if (depth > 0.1) continue;
                const alpha = 0.15 + 0.5 * Math.abs(depth);
                const size = 1.2 + Math.abs(depth) * 0.8;
                ctx.beginPath(); ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(184, 148, 255, ${alpha})`; ctx.fill();
            }
            ctx.save(); ctx.globalAlpha = 0.25;
            const seed = Math.floor(angle / 50);
            for (let i = 0; i < 40; i++) {
                const px = ((i * 137.5 + seed * 11) % canvas.width);
                const py = ((i * 97.3 + seed * 7) % canvas.height);
                const dist = Math.hypot(px - cx, py - cy);
                if (dist < R * 1.6) continue;
                const flicker = 0.3 + 0.7 * Math.abs(Math.sin(angle * 0.5 + i));
                ctx.beginPath(); ctx.arc(px, py, 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 180, 255, ${flicker * 0.4})`; ctx.fill();
            }
            ctx.restore();
            angle += 0.007;
            animId = requestAnimationFrame(render);
        };
        resize();
        window.addEventListener('resize', resize);
        render();
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.92 }} />;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
    { icon: Star, num: "5.0★", label: "19 avaliações no Google" },
    { icon: Users, num: "Local", label: "Atendimento presencial em Icó" },
    { icon: TrendingUp, num: "100", label: "SEO score no PageSpeed" },
    { icon: Clock, num: "7 dias", label: "Entrega média de sites" },
];

const services = [
    {
        icon: MapPin,
        title: 'Google Meu Negócio',
        description: 'Setup e gestão completa do perfil. Apareça quando alguém buscar pelo seu negócio em Icó.',
    },
    {
        icon: BarChart2,
        title: 'Tráfego Pago Local',
        description: 'Campanhas Meta Ads e Google Ads segmentadas para Icó e região. Clientes certos, momento certo.',
    },
    {
        icon: Globe,
        title: 'Criação de Site',
        description: 'Landing pages com SEO local, WhatsApp integrado e cardápio ou portfólio. Pronto em 7 dias.',
    },
    {
        icon: Bot,
        title: 'Automação com IA',
        description: 'Chatbots que atendem seu cliente 24h no WhatsApp sem você precisar estar online.',
    },
    {
        icon: MessageSquare,
        title: 'Gestão de Redes Sociais',
        description: 'Conteúdo estratégico e consistente para Instagram e Facebook do seu negócio em Icó.',
    },
    {
        icon: TrendingUp,
        title: 'SEO Local',
        description: 'Otimização para aparecer nas buscas do Google por serviços em Icó, Iguatu e região.',
    },
];

const highlights = [
    { icon: MapPin, title: 'Somos de Icó', description: 'Sabemos quem é o cliente de Icó e como ele decide. Agência de capital não tem esse contexto.' },
    { icon: Users, title: 'Atendimento direto', description: 'Sem terceirizar. Você fala com quem faz o trabalho.' },
    { icon: TrendingUp, title: 'Resultado antes de escalar', description: 'Começamos pequeno, medimos e escalamos quando os números provam.' },
    { icon: Star, title: 'Transparência total', description: 'Acesso ao painel de anúncios e relatório mensal com dados reais.' },
];

const faqs = SCHEMA_FAQ.mainEntity;

// ─── Page ─────────────────────────────────────────────────────────────────────
export function Ico() {
    return (
        <>
            <Helmet>
                <title>Agência Digital em Icó-CE | TamarAI – Marketing Digital e Tráfego Pago</title>
                <meta name="description" content="Agência digital em Icó-CE. Fazemos marketing digital, tráfego pago, criação de sites e Google Meu Negócio para negócios em Icó e interior do Ceará. Fale agora." />
                <link rel="canonical" href="https://www.tamarai.com.br/agencia-digital-ico-ce" />
                <meta property="og:title" content="Agência Digital em Icó-CE | TamarAI" />
                <meta property="og:description" content="Marketing digital, tráfego pago e automação com IA para negócios em Icó-CE. TamarAI — sua agência local." />
                <meta property="og:url" content="https://www.tamarai.com.br/agencia-digital-ico-ce" />
                <script type="application/ld+json">{JSON.stringify(SCHEMA_LOCAL)}</script>
                <script type="application/ld+json">{JSON.stringify(SCHEMA_FAQ)}</script>
            </Helmet>

            <main>
                {/* ── HERO ── */}
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
                    <OrbCanvas />
                    <div className="absolute inset-0 z-10 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(2,0,5,0.7) 100%)' }}
                    />
                    <div className="relative z-20 text-center px-6 select-none">
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

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display leading-none tracking-[0.18em] text-white"
                            style={{
                                fontSize: 'clamp(3rem, 10vw, 9rem)',
                                textShadow: '0 0 80px rgba(140,69,255,0.35), 0 2px 40px rgba(0,0,0,0.8)'
                            }}
                        >
                            MARKETING<span className="text-brand-gold"> DIGITAL</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display leading-none tracking-[0.18em] text-white/60 mt-2"
                            style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}
                        >
                            EM ICÓ-CE
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="mt-5 text-white/45 font-sans font-light tracking-[0.32em] uppercase text-xs md:text-sm"
                        >
                            Tráfego Pago&nbsp;&nbsp;|&nbsp;&nbsp;Sites&nbsp;&nbsp;|&nbsp;&nbsp;Google Meu Negócio&nbsp;&nbsp;|&nbsp;&nbsp;Automação IA
                        </motion.p>

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
                                href="#servicos-ico"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#servicos-ico')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-white/40 font-sans text-sm font-light tracking-[0.2em] uppercase hover:text-white/70 transition-colors duration-300"
                            >
                                Ver serviços
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* ── STATS (mesma estrutura que Benefits) ── */}
                <SectionWrapper id="stats-ico" className="relative z-10">
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group p-8 rounded-2xl glass hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(140,69,255,0.1)]"
                                >
                                    <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-brand-gold/5">
                                        <stat.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display text-white mb-1 tracking-wide group-hover:text-brand-gold transition-colors">
                                        {stat.num}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </SectionWrapper>

                {/* ── SERVIÇOS (mesma estrutura que ServicesGrid) ── */}
                <SectionWrapper id="servicos-ico" className="relative overflow-hidden py-32">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-brand-dark/50" />
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <Container className="relative z-10">
                        <div className="text-center mb-20 space-y-4">
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold uppercase tracking-widest font-bold text-xs border border-brand-gold/20 backdrop-blur-sm">
                                O que fazemos em Icó
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white drop-shadow-lg">
                                Soluções Digitais <br /> para negócios em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gray to-white/50">Icó-CE</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full opacity-70" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-8 rounded-3xl hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700 pointer-events-none">
                                        <service.icon size={120} />
                                    </div>
                                    <div className="mb-8 w-16 h-16 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-2xl flex items-center justify-center text-brand-gold group-hover:from-brand-gold group-hover:to-[#7A35EB] group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(140,69,255,0.4)]">
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display text-white mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-8 leading-relaxed font-light">{service.description}</p>
                                    <Button
                                        variant="link"
                                        className="p-0 text-brand-gold hover:text-white group-hover:translate-x-2 transition-transform text-base font-medium"
                                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                                    >
                                        Solicitar orçamento <ArrowRight size={18} className="ml-2 group-hover:ml-3 transition-all" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </SectionWrapper>

                {/* ── POR QUE TAMARAI (mesma estrutura que Credibility) ── */}
                <SectionWrapper id="por-que-ico" className="relative border-t border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-3xl z-0" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                    <Container className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold uppercase tracking-widest font-bold text-xs border border-brand-gold/20 backdrop-blur-sm">
                                    Por que escolher local?
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                                    Agência com raízes em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">Icó-CE.</span>
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg font-light">
                                    Sabemos quem é o cliente de Icó, como ele busca e o que o convence.
                                    Agência de capital não tem esse contexto — e a diferença aparece no resultado.
                                </p>
                                <Button
                                    size="lg"
                                    className="group px-8 py-4 border border-brand-gold/50 text-white font-sans text-sm font-medium tracking-[0.22em] uppercase hover:border-brand-gold transition-all duration-500 overflow-hidden relative"
                                    onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                                >
                                    <span className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-all duration-500" />
                                    <span className="relative">Quero um diagnóstico gratuito</span>
                                </Button>
                            </div>
                            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-gold/5"
                                    >
                                        <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-display text-white mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </SectionWrapper>

                {/* ── FAQ ── */}
                <SectionWrapper id="faq-ico" className="relative overflow-hidden py-32">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-brand-dark/50" />
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <Container className="relative z-10">
                        <div className="text-center mb-16 space-y-4">
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold uppercase tracking-widest font-bold text-xs border border-brand-gold/20 backdrop-blur-sm">
                                Dúvidas frequentes
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display text-white drop-shadow-lg">
                                Perguntas sobre <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gray to-white/50">marketing digital em Icó</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full opacity-70" />
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((item, index) => (
                                <motion.details
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="glass rounded-2xl group"
                                >
                                    <summary className="cursor-pointer p-6 text-white font-display text-lg flex justify-between items-center list-none hover:text-brand-gold transition-colors">
                                        {item.name}
                                        <span className="text-brand-gold text-2xl font-light group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                                    </summary>
                                    <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                                        {item.acceptedAnswer.text}
                                    </p>
                                </motion.details>
                            ))}
                        </div>
                    </Container>
                </SectionWrapper>

                {/* ── CTA FINAL (idêntico ao da Home) ── */}
                <SectionWrapper className="relative overflow-hidden py-24">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-[#7A35EB] z-0" />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                            backgroundSize: '60px 60px'
                        }}
                    />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 mix-blend-multiply" />
                    <Container className="relative z-10 text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-display text-white mb-6 drop-shadow-sm">
                                Vamos colocar seu negócio no mapa?
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
                                Agência digital em Icó-CE. Diagnóstico gratuito, sem compromisso.
                            </p>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="group text-lg px-12 py-8 bg-brand-navy text-white hover:bg-brand-navy/90 shadow-[0_20px_40px_rgba(10,31,68,0.3)] hover:shadow-[0_25px_50px_rgba(10,31,68,0.4)] hover:-translate-y-1 transition-all duration-300"
                                onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                            >
                                Falar agora no WhatsApp
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </Container>
                </SectionWrapper>
            </main>
        </>
    );
}
