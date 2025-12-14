import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';
import { CONTACT_INFO } from '../../constants';

export function Hero() {
    return (
        <SectionWrapper id="home" className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-16">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-navy/50 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
                        <span className="text-brand-gold text-sm font-semibold tracking-wider">Do interior do Ceará para o Brasil inteiro</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display leading-tight text-white drop-shadow-2xl">
                        Transforme seu negócio com <span className="text-brand-gold">Inteligência</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Landing pages, automações e cartões virtuais para profissionais que querem crescer. Tecnologia acessível para destacar sua marca.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Button size="lg" onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')} className="gap-2 group">
                            Quero minha solução agora
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2">
                            Ver Projetos
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center perspective-1000"
                >
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Glowing Ring Effect behind */}
                        <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />

                        {/* Main Image */}
                        <motion.img
                            src="/assets/images/logo-3d.jpg"
                            alt="Cérebro TamarAI"
                            className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Floating Elements (abstract) */}
                        <motion.div
                            className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-20"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            <MessageCircle className="text-brand-gold w-8 h-8" />
                        </motion.div>
                    </div>
                </motion.div>
            </Container>

            {/* Floating WhatsApp Button (Global) */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
                onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
            >
                <MessageCircle className="text-white w-8 h-8 fill-current" />
            </motion.button>
        </SectionWrapper>
    );
}
