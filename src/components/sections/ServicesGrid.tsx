import { motion } from 'framer-motion';
import { Monitor, Smartphone, MessageSquare, BarChart, PenTool, Globe, ArrowRight } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';
import { Button } from '../ui/button';
import { CONTACT_INFO } from '../../constants';

const Services = [
    {
        icon: Monitor,
        title: 'Landing Pages',
        description: 'Páginas de alta conversão projetadas para transformar visitantes em clientes.',
    },
    {
        icon: Smartphone,
        title: 'Cartões Digitais',
        description: 'A evolução do cartão de visita. Interativo, sustentável e fácil de compartilhar.',
    },
    {
        icon: MessageSquare,
        title: 'Automação (Chatbots)',
        description: 'Atenda seus clientes 24h por dia no WhatsApp com inteligência artificial.',
    },
    {
        icon: Globe,
        title: 'Sites Institucionais',
        description: 'Fortaleça sua marca com um site profissional, rápido e otimizado para SEO.',
    },
    {
        icon: BarChart,
        title: 'Tráfego Pago',
        description: 'Gestão de anúncios no Google e Meta Ads para atrair o público certo.',
    },
    {
        icon: PenTool,
        title: 'Identidade Visual',
        description: 'Logos e materiais gráficos que transmitem a essência do seu negócio.',
    },
];

export function ServicesGrid() {


    return (
        <SectionWrapper id="servicos" className="bg-brand-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <Container className="relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-gold uppercase tracking-widest font-semibold text-sm">O que fazemos</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white">Soluções Completas para o seu Negócio</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-brand-navy p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/10"
                        >
                            <div className="mb-6 w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-display text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Button
                                variant="link"
                                className="p-0 text-brand-gold hover:text-white group-hover:translate-x-2 transition-transform"
                                onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                            >
                                Saiba mais <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
