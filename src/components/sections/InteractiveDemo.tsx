import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutTemplate, CreditCard, Globe, Share2 } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { LPPreview } from './demo/LPPreview';
import { VCardPreview } from './demo/VCardPreview';
import { SitePreview } from './demo/SitePreview';
import { AuthPreview } from './demo/AuthPreview';
import { CONTACT_INFO } from '../../constants';

const SERVICES = [
    { id: 'lp', label: 'Landing Pages', icon: LayoutTemplate, color: 'text-blue-400', component: LPPreview },
    { id: 'vcard', label: 'Cartão Virtual', icon: CreditCard, color: 'text-purple-400', component: VCardPreview },
    { id: 'site', label: 'Sites Institucionais', icon: Globe, color: 'text-green-400', component: SitePreview },
    { id: 'auto', label: 'Automação IA', icon: Share2, color: 'text-brand-gold', component: AuthPreview },
];

export function InteractiveDemo() {
    const [activeService, setActiveService] = useState(SERVICES[0]);
    const ActiveComponent = activeService.component;

    const handleCTAClick = () => {
        const message = encodeURIComponent(`Olá, gostaria de saber mais sobre como implementar *${activeService.label}* no meu negócio.`);
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.number}?text=${message}`, '_blank');
    };

    return (
        <SectionWrapper id="demo" className="relative overflow-hidden bg-brand-navy/50">
            <div className="absolute inset-0 bg-brand-dark/50" />

            <Container className="relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display text-white">
                        Escolha sua Solução
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Explore nossas tecnologias interativas. Clique em uma opção abaixo para ver uma prévia em tempo real.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {SERVICES.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeService.id === service.id
                                    ? "bg-brand-gold text-brand-navy border-brand-gold shadow-lg shadow-brand-gold/20 scale-105"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-gold/50 hover:text-white"
                            )}
                        >
                            <service.icon size={18} className={activeService.id === service.id ? "text-brand-navy" : service.color} />
                            <span className="font-semibold">{service.label}</span>
                        </button>
                    ))}
                </div>

                <div className="relative w-full max-w-5xl mx-auto aspect-video md:aspect-[21/9] bg-brand-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                        >
                            <ActiveComponent />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-8 text-center">
                    <Button size="lg" className="px-12" onClick={handleCTAClick}>
                        Quero implementar {activeService.label}
                    </Button>
                </div>
            </Container>
        </SectionWrapper>
    );
}
