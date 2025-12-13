import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/container';
import { SectionWrapper } from '../ui/section-wrapper';
import { Button } from '../ui/button';
import { CONTACT_INFO } from '../../constants';

export function CTA() {
    return (
        <SectionWrapper className="bg-brand-gold relative overflow-hidden py-24">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy/5 rounded-full -translate-x-1/2 translate-y-1/2" />

            <Container className="relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display text-brand-navy mb-6">
                        Pronto para o próximo nível?
                    </h2>
                    <p className="text-xl md:text-2xl text-brand-navy/80 max-w-2xl mx-auto mb-10 font-medium">
                        Digitalize seu negócio hoje mesmo e saia na frente da concorrência com a TamarAI.
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-12 py-8 bg-brand-navy text-white hover:bg-brand-navy/90 shadow-2xl hover:scale-105 transition-all"
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                    >
                        Fale com um especialista agora
                        <ArrowRight className="ml-2" />
                    </Button>
                </motion.div>
            </Container>
        </SectionWrapper>
    );
}
