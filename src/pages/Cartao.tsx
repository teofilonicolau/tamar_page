import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Download,
    Share2,
    Instagram,
    Linkedin,
    Mail,
    Globe,
    MessageCircle,
    X,
    Copy,
    Check
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { CONTACT_INFO } from '../constants';

export function Cartao() {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const cardUrl = window.location.href;

    const handleSaveContact = () => {
        // Create VCF content
        const vcfContent = `BEGIN:VCARD
VERSION:3.0
N:Nicolau;Teofilo;;;
FN:Teofilo Nicolau (TamarAI)
ORG:TamarAI
TITLE:Especialista em Automação
TEL;TYPE=CELL:${CONTACT_INFO.whatsapp.number}
EMAIL:${CONTACT_INFO.social.email.replace('mailto:', '')}
URL:${window.location.origin}
URL;type=Instagram:${CONTACT_INFO.social.instagram}
URL;type=LinkedIn:${CONTACT_INFO.social.linkedin}
END:VCARD`;

        const blob = new Blob([vcfContent], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'tamarai_contact.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(cardUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        { icon: <Instagram />, label: 'Instagram', href: CONTACT_INFO.social.instagram, color: 'hover:bg-pink-600' },
        { icon: <Linkedin />, label: 'LinkedIn', href: CONTACT_INFO.social.linkedin, color: 'hover:bg-blue-600' },
        { icon: <Mail />, label: 'Email', href: CONTACT_INFO.social.email, color: 'hover:bg-red-500' },
        { icon: <Globe />, label: 'Site', href: '/', color: 'hover:bg-brand-gold' },
    ];

    return (
        <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-navy/50 rounded-full blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-10"
            >
                {/* Header */}
                <div className="p-8 flex flex-col items-center text-center border-b border-white/5 bg-gradient-to-b from-brand-gold/10 to-transparent">
                    <div className="w-32 h-32 rounded-full p-1 border-2 border-brand-gold mb-4 shadow-lg group">
                        <img
                            src="/assets/images/logo-flat.jpg"
                            alt="Teofilo Nicolau"
                            className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Changed font-display (Bebas) to font-sans (Inter) to allow mixed case */}
                    <h1 className="text-4xl font-sans font-bold text-white mb-2 tracking-wide">TamarAI</h1>
                    <p className="text-brand-gold font-medium text-lg mb-6">Soluções Digitais & Automação Inteligente</p>

                    {/* Personal Info Section */}
                    <div className="bg-white/5 rounded-xl p-4 w-full border border-white/10 backdrop-blur-sm">
                        <h2 className="text-white font-bold text-lg flex items-center justify-center gap-2">
                            Teófilo Nicolau
                        </h2>
                        <p className="text-gray-300 text-sm mt-1">Engenheiro de Prompts Jr & Dev FullStack Jr</p>
                        <p className="text-brand-gold text-sm font-medium mt-1">Fundador da TamarAI</p>
                    </div>
                </div>

                {/* Main Actions */}
                <div className="p-6 grid gap-4">
                    <Button
                        size="lg"
                        onClick={handleSaveContact}
                        className="w-full bg-brand-gold text-brand-navy hover:bg-brand-goldhover font-bold text-lg h-14 shadow-lg shadow-brand-gold/20"
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Salvar na Agenda
                    </Button>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            variant="outline"
                            onClick={() => setIsShareOpen(true)}
                            className="w-full border-white/20 text-white hover:bg-white/10 h-12"
                        >
                            <Share2 className="mr-2 h-4 w-4" />
                            Compartilhar
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                            className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 h-12"
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp
                        </Button>
                    </div>
                </div>

                {/* Social Links Grid */}
                <div className="p-6 pt-0">
                    <p className="text-gray-400 text-sm text-center mb-4 uppercase tracking-widest font-semibold text-[10px]">Conecte-se Comigo</p>
                    <div className="grid grid-cols-4 gap-3">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target={link.label === 'Site' ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-gray-300 transition-all duration-300 group ${link.color}`}
                            >
                                <div className="text-white group-hover:scale-110 transition-transform duration-300">
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 text-center border-t border-white/5">
                    <p className="text-xs text-gray-500">TamarAI — Inovação Digital para Todo o Brasil © 2025</p>
                </div>
            </motion.div>

            {/* Share Modal */}
            <AnimatePresence>
                {isShareOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsShareOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-brand-navy border border-white/10 rounded-3xl p-6 z-50 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-white">Compartilhar Cartão</h3>
                                <button onClick={() => setIsShareOpen(false)} className="text-gray-400 hover:text-white">
                                    <X />
                                </button>
                            </div>

                            <div className="bg-white p-4 rounded-2xl mb-6 mx-auto w-fit">
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(cardUrl)}&color=0A1F44`}
                                    alt="QR Code"
                                    className="w-48 h-48"
                                />
                            </div>

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={cardUrl}
                                    readOnly
                                    className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 text-sm text-gray-300 outline-none"
                                />
                                <Button onClick={handleCopyLink} className="bg-brand-gold hover:bg-brand-goldhover text-brand-navy">
                                    {copied ? <Check size={18} /> : <Copy size={18} />}
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
                onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
            >
                <MessageCircle className="text-white w-8 h-8 fill-current" />
            </motion.button>
        </div>
    );
}
