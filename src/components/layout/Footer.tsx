import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/container';
import { CONTACT_INFO } from '../../constants';
import { TikTokIcon } from '../ui/icons';

export function Footer() {
    return (
        <footer id="contato" className="relative bg-brand-dark border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Decorative Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full border border-brand-gold/30 overflow-hidden group-hover:border-brand-gold transition-colors duration-500">
                                <img src="/assets/images/logo-flat.jpg" alt="TamarAI" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <span className="font-sans text-2xl font-bold text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">TamarAI</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Transformando negócios com inteligência, design e tecnologia acessível.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="font-display text-lg tracking-wider text-white mb-6 flex items-center gap-3 after:content-[''] after:h-[1px] after:w-8 after:bg-brand-gold/50 after:transition-all group-hover:after:w-12">Links Rápidos</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Home</Link></li>
                            <li><Link to="/sobre" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Sobre</Link></li>
                            <li><Link to="/cartao" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Cartão Digital</Link></li>
                            <li><a href="/#servicos" className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Serviços</a></li>
                            <li><a href={CONTACT_INFO.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Contato</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="font-display text-lg tracking-wider text-white mb-6 flex items-center gap-3 after:content-[''] after:h-[1px] after:w-8 after:bg-brand-gold/50">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/politica-privacidade" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Política de Privacidade</Link></li>
                            <li><Link to="/termos-de-uso" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-display text-lg tracking-wider text-white mb-6 flex items-center gap-3 after:content-[''] after:h-[1px] after:w-8 after:bg-brand-gold/50">Contato</h4>
                        <div className="flex gap-4">
                            <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="group/icon w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,169,74,0.3)]">
                                <Instagram size={18} className="transform group-hover/icon:scale-110 transition-transform duration-300" />
                            </a>
                            <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="group/icon w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,169,74,0.3)]">
                                <Linkedin size={18} className="transform group-hover/icon:scale-110 transition-transform duration-300" />
                            </a>
                            <a href={CONTACT_INFO.social.email} className="group/icon w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,169,74,0.3)]">
                                <Mail size={18} className="transform group-hover/icon:scale-110 transition-transform duration-300" />
                            </a>
                            <a href={CONTACT_INFO.social.tiktok} target="_blank" rel="noopener noreferrer" className="group/icon w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,169,74,0.3)]">
                                <TikTokIcon size={18} className="transform group-hover/icon:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 font-light">
                        &copy; {new Date().getFullYear()} TamarAI. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                        Desenvolvido por <span className="text-brand-gold font-semibold tracking-wide">TamarAI</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
