import { motion } from 'framer-motion';
import { QrCode, Phone, Mail, MapPin } from 'lucide-react';

export function VCardPreview() {
    return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8">
            <motion.div
                className="relative w-[300px] h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden preserve-3d cursor-pointer"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut", repeatType: "reverse" }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center pt-12 pb-8 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
                    <div className="w-24 h-24 rounded-full bg-brand-navy mb-4 border-4 border-white shadow-lg overflow-hidden">
                        <img src="/assets/images/logo-flat.webp" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy">Rian Nicolau</h3>
                    <p className="text-brand-gold font-medium mb-6">Advogado & Desenvolvedor</p>

                    <div className="w-full space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                            <Phone size={18} className="text-brand-navy" />
                            <div className="h-2 w-24 bg-slate-200 rounded" />
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                            <Mail size={18} className="text-brand-navy" />
                            <div className="h-2 w-32 bg-slate-200 rounded" />
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                            <MapPin size={18} className="text-brand-navy" />
                            <div className="h-2 w-20 bg-slate-200 rounded" />
                        </div>
                    </div>
                </div>

                {/* BACK */}
                <div
                    className="absolute inset-0 backface-hidden bg-brand-navy flex flex-col items-center justify-center text-white"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <QrCode size={120} className="text-white mb-6" />
                    <p className="font-display tracking-widest text-xl">ESCAMBO DIGITAL</p>
                    <p className="text-sm text-brand-gold mt-2">Aponte a câmera</p>
                </div>
            </motion.div>
        </div>
    );
}
