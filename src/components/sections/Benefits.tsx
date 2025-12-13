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
        <SectionWrapper id="benefits" className="bg-brand-navy">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-colors hover:bg-white/10"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-lg bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                                <benefit.icon size={32} />
                            </div>
                            <h3 className="text-xl font-display text-white mb-2 tracking-wide">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
