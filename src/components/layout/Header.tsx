import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/container';
import { cn } from '../../lib/utils';
import { CONTACT_INFO } from '../../constants';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();
        if (href.startsWith('/#') || href.startsWith('#')) {
            const anchor = href.startsWith('/#') ? href.substring(1) : href;
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToElement(anchor), 120);
            } else {
                scrollToElement(anchor);
            }
        } else {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const scrollToElement = (href: string) => {
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Cartão', href: '/cartao' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
                isScrolled
                    ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-3'
                    : 'bg-transparent py-6'
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo — minimal word mark */}
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group flex items-center gap-3"
                >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-gold/30 group-hover:border-brand-gold/70 transition-colors duration-500">
                        <img src="/assets/images/logo-icon.webp" alt="TamarAI" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-display text-xl tracking-[0.22em] text-white group-hover:text-white/80 transition-colors duration-300">
                        TAMAR<span className="text-brand-gold">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav — ultra-minimal */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="text-[11px] font-sans font-medium text-white/40 hover:text-white tracking-[0.25em] uppercase transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                        className="text-[11px] font-sans font-medium tracking-[0.25em] uppercase border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold px-5 py-2.5 transition-all duration-300"
                    >
                        Orçamento
                    </button>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white/50 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </Container>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-b border-white/5">
                    <div className="flex flex-col items-center py-10 gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavigation(e, link.href)}
                                className="text-sm font-sans font-medium text-white/50 hover:text-white tracking-[0.3em] uppercase transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                window.open(CONTACT_INFO.whatsapp.link, '_blank');
                                setIsMobileMenuOpen(false);
                            }}
                            className="mt-2 text-sm font-sans font-medium tracking-[0.25em] uppercase border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 px-8 py-3 transition-all duration-300"
                        >
                            Orçamento
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
