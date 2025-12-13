import { motion } from 'framer-motion';
import { Container } from '../components/ui/container';
import { SectionWrapper } from '../components/ui/section-wrapper';
import { Rocket, Code, Terminal, Brain, Heart, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sobre() {
    return (
        <div className="pt-20"> {/* Padding for fixed header */}
            <SectionWrapper className="bg-brand-navy min-h-screen">
                <Container>
                    {/* Back to Home */}
                    <div className="mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors group">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            Voltar para a Home
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl">
                                <img
                                    src="/assets/images/teofilo-profile.jpg"
                                    alt="Teofilo Nicolau"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Floating Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 -right-6 bg-brand-dark p-6 rounded-xl border border-white/10 shadow-xl backdrop-blur-sm"
                            >
                                <div className="flex gap-4 text-brand-gold">
                                    <Code size={24} />
                                    <div className="h-6 w-px bg-white/20" />
                                    <Terminal size={24} />
                                    <div className="h-6 w-px bg-white/20" />
                                    <Brain size={24} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Intro Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 space-y-6"
                        >
                            <h1 className="text-5xl md:text-7xl font-display text-white">
                                Minha <span className="text-brand-gold">Jornada</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Eu sou <strong className="text-white">Teofilo Nicolau</strong>, apaixonado por tecnologia e inteligência artificial.
                                Sou autodidata, aprendiz constante e desenvolvedor FullStack Júnior, com experiência em Java, Spring Boot, React, MySQL e AWS.
                            </p>
                            <p className="text-gray-400">
                                Nos últimos meses, mergulhei na engenharia de prompts e na IA generativa, explorando ferramentas como Copilot e ChatGPT para criar soluções inovadoras e automatizar processos.
                            </p>
                        </motion.div>
                    </div>

                    {/* Timeline / Story */}
                    <div className="max-w-3xl mx-auto space-y-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <Rocket size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">O Nascimento da TamarAI</h3>
                            <div className="space-y-4 text-gray-300">
                                <p>A TamarAI nasceu de um desafio real.</p>
                                <p>Em março de 2025, um advogado me disse:</p>
                                <blockquote className="border-l-4 border-brand-gold pl-4 italic text-white my-4 bg-white/5 p-4 rounded-r-lg">
                                    "Eu gasto 3 horas escrevendo uma petição que segue sempre o mesmo padrão... você seria capaz de criar um robô que fizesse isso?"
                                </blockquote>
                                <p>Naquele momento, percebi que a inteligência artificial poderia transformar a advocacia.</p>
                                <p>Sem esperar o momento perfeito, comecei a aprender na prática: tutoriais, documentações, madrugadas de código e muitos erros.</p>
                                <p className="font-semibold text-brand-gold">O resultado? Uma aplicação que automatiza petições jurídicas e economiza até 90% do tempo dos advogados.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative border-l-2 border-brand-gold/30 pl-8 md:pl-12 py-4"
                        >
                            <span className="absolute -left-[11px] top-0 bg-brand-navy border-2 border-brand-gold rounded-full p-1 text-brand-gold">
                                <Heart size={20} />
                            </span>
                            <h3 className="text-3xl font-display text-white mb-4">Propósito & Missão</h3>
                            <p className="text-gray-300 mb-6">
                                Foi nesse embalo que decidi dar vida à minha própria startup: <strong className="text-white">TamarAI</strong> 🚀.
                                Mais do que um projeto, ela é meu trabalho, meu ganha-pão e meu propósito.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Pequenos começos podem gerar grandes propósitos.",
                                    "Tecnologia acessível a qualquer profissional.",
                                    "Automação inteligente é tempo ganho.",
                                    "Aprendizado constante é o caminho."
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold" />
                                        <span className="text-sm text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="text-center pt-12">
                            <p className="text-2xl font-display text-white mb-8">
                                Transformar ideias em soluções reais.
                            </p>
                            <Link to="/">
                                <strong className="text-brand-gold text-lg hover:underline cursor-pointer">
                                    Vamos construir o futuro juntos?
                                </strong>
                            </Link>
                        </div>
                    </div>
                </Container>
            </SectionWrapper>
        </div>
    );
}
