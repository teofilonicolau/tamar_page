import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';
import { Button } from '../ui/button';
import { CONTACT_INFO } from '../../constants';

export function CTA() {
    return (
        <SectionWrapper className="relative overflow-hidden py-24">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-[#B0933F] z-0" />

            {/* Decorative Patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 mix-blend-multiply" />

            <Container className="relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display text-brand-navy mb-6 drop-shadow-sm">
                        Pronto para o próximo nível?
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-navy/80 max-w-2xl mx-auto mb-10 font-medium">
                        Digitalize seu negócio hoje mesmo e saia na frente da concorrência com a TamarAI.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="group text-lg px-12 py-8 bg-brand-navy text-white hover:bg-brand-navy/90 shadow-[0_20px_40px_rgba(10,31,68,0.3)] hover:shadow-[0_25px_50px_rgba(10,31,68,0.4)] hover:-translate-y-1 transition-all duration-300"
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                    >
                        Fale com um especialista agora
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </Container>
        </SectionWrapper>
    );
}
