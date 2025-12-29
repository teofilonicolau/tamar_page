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
        <SectionWrapper id="servicos" className="relative overflow-hidden py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-dark/50" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold uppercase tracking-widest font-bold text-xs border border-brand-gold/20 backdrop-blur-sm">O que fazemos</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white drop-shadow-lg">
                        Soluções Completas <br /> para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-gray to-white/50">Negócio</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full opacity-70"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Services.map((service, index) => (
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

                            <div className="mb-8 w-16 h-16 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-2xl flex items-center justify-center text-brand-gold group-hover:from-brand-gold group-hover:to-[#D4C07B] group-hover:text-brand-navy transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(201,169,74,0.4)]">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-display text-white mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed font-light">
                                {service.description}
                            </p>
                            <Button
                                variant="link"
                                className="p-0 text-brand-gold hover:text-white group-hover:translate-x-2 transition-transform text-base font-medium"
                                onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                            >
                                Saiba mais <ArrowRight size={18} className="ml-2 group-hover:ml-3 transition-all" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    );
}
