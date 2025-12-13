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
        <SectionWrapper id="credibilidade" className="bg-brand-navy border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">Por que TamarAI?</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white">
                            Parceria estratégica para o seu crescimento.
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
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
                                className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                            >
                                <item.icon className="text-brand-gold mb-4" size={28} />
                                <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    );
}
