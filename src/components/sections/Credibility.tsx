import { motion } from 'framer-motion';
import { Target, Palette, Cpu, Map } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';

const highlights = [
    {
        icon: Target,
        title: 'Tecnologia Acessível',
        description: 'Soluções modernas sem complicação técnica. Nós cuidamos de tudo.'
    },
    {
        icon: Palette,
        title: 'Design Exclusivo',
        description: 'Páginas que encantam e transmitem confiança desde o primeiro clique.'
    },
    {
        icon: Cpu,
        title: 'Automação Inteligente',
        description: 'Mais tempo para você focar no que importa: seu negócio.'
    },
    {
        icon: Map,
        title: 'Foco Local e Nacional',
        description: 'Começando em Icó/CE, mas com estrutura para atender todo o Brasil.'
    }
];

export function Credibility() {
    return (
        <SectionWrapper id="credibilidade" className="relative border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-3xl z-0" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold uppercase tracking-widest font-bold text-xs border border-brand-gold/20 backdrop-blur-sm">Por que TamarAI?</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                            Parceria estratégica para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">crescimento.</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                            Não somos apenas uma agência de sites. Somos seu braço direito em tecnologia e inovação, trazendo ferramentas que antes eram acessíveis apenas para grandes empresas.
                        </p>
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
                                <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
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
    );
}
