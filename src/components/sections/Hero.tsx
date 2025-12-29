import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { CONTACT_INFO } from '../../constants';

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundPositionY = useTransform(
        scrollYProgress,
        [0, 1],
        [-300, 300],
    );

    return (
        <motion.section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-48 pb-20 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            style={{
                backgroundPositionY,
            }}
            animate={{ backgroundPositionX: 1200 }}
            transition={{
                duration: 120,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)] z-0" />

            {/* Planet Logic (Orb Animation) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 md:size-96 rounded-full border border-white/20 bg-purple-500 shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)] bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] z-0" />

            {/* Rings Animation */}
            <motion.div
                animate={{ rotate: "1turn" }}
                transition={{
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[344px] md:size-[580px] rounded-full border border-white opacity-20 z-0"
            >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white" />
                <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex size-5 items-center justify-center rounded-full border border-white">
                    <div className="size-2 rounded-full bg-white" />
                </div>
            </motion.div>

            <motion.div
                animate={{ rotate: "-1turn" }}
                transition={{
                    duration: 60,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[444px] md:size-[780px] rounded-full border border-white/20 border-dashed z-0"
            />

            <motion.div
                animate={{ rotate: "1turn" }}
                transition={{
                    duration: 90,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[544px] md:size-[980px] rounded-full border border-white opacity-20 z-0"
            >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white" />
                <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white" />
            </motion.div>


            <div className="container relative z-10 text-center mt-10 md:mt-20 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-display text-[80px] md:text-[168px] leading-none tracking-tighter text-transparent bg-clip-text bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))]"
                >
                    TAMARAI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-xl text-lg md:text-xl text-white/70 font-light"
                >
                    Transforme seu negócio com inteligência. Landing pages de alta conversão, automações inteligentes e cartões virtuais. Tecnologia acessível para destacar sua marca.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-10 flex justify-center"
                >
                    <Button
                        size="lg"
                        className="bg-white text-brand-dark hover:bg-white/90 shadow-[0_0_20px_rgba(140,69,255,0.5)] rounded-full px-8 py-6 text-lg tracking-wide group"
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                    >
                        Fale Conosco <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
}
