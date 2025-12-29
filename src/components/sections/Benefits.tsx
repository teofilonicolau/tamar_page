import { motion } from 'framer-motion';
import { ShieldCheck, MousePointerClick, Bot, TrendingUp } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Credibilidade',
        description: 'Transmita confiança imediata com um design profissional e exclusivo.',
    },
    {
        icon: MousePointerClick,
        title: 'Simplicidade',
        description: 'Navegação intuitiva focada na experiência do usuário e conversão.',
    },
    {
        icon: Bot,
        title: 'Automação',
        description: 'Deixe a IA trabalhar por você, atendendo clientes 24/7.',
    },
    {
        icon: TrendingUp,
        title: 'Custo-benefício',
        description: 'Soluções premium acessíveis para impulsionar seu negócio local.',
    },
];

export function Benefits() {
    return (
        <SectionWrapper id="benefits" className="relative z-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl glass hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(201,169,74,0.1)]"
                        >
                            <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-brand-gold/5">
                                <benefit.icon size={32} />
                            </div>
                            <h3 className="text-xl font-display text-white mb-3 tracking-wide group-hover:text-brand-gold transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
