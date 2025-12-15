import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/container';
import { CONTACT_INFO } from '../../constants';
import { TikTokIcon } from '../ui/icons';

export function Footer() {
    return (
        <footer id="contato" className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-brand-gold overflow-hidden">
                                <img src="/assets/images/logo-flat.jpg" alt="TamarAI" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-sans text-2xl font-bold text-white">TamarAI</span>
                        </a>
                        <p className="text-gray-400 text-sm">
                            Transformando negócios com inteligência, design e tecnologia acessível.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold transition-colors">Home</Link></li>
                            <li><Link to="/sobre" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold transition-colors">Sobre</Link></li>
                            <li><Link to="/cartao" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold transition-colors">Cartão Digital</Link></li>
                            <li><a href="/#servicos" className="hover:text-brand-gold transition-colors">Serviços</a></li>
                            <li><a href={CONTACT_INFO.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/politica-privacidade" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold transition-colors">Política de Privacidade</Link></li>
                            <li><Link to="/termos-de-uso" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-gold transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Contato</h4>
                        <div className="flex gap-4">
                            <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href={CONTACT_INFO.social.email} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <Mail size={20} />
                            </a>
                            <a href={CONTACT_INFO.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy transition-all">
                                <TikTokIcon size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} TamarAI. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                        Desenvolvido por <span className="text-brand-gold font-semibold">TamarAI</span>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
