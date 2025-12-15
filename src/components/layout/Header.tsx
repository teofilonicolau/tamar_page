
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { CONTACT_INFO } from '../../constants';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();

        // Handle routes vs anchors
        if (href.startsWith('/#')) { // Check for /# for home anchors
            const anchor = href.substring(1); // Get #home
            if (location.pathname !== '/') {
                // If not on home, go home first then scroll
                navigate('/');
                // Small delay to allow navigation to happen
                setTimeout(() => {
                    scrollToElement(anchor);
                }, 100);
            } else {
                // Already on home, just scroll
                scrollToElement(anchor);
            }
        } else if (href.startsWith('#')) { // Check for other anchors
            if (location.pathname !== '/') {
                // If not on home, go home first then scroll
                navigate('/');
                // Small delay to allow navigation to happen
                setTimeout(() => {
                    scrollToElement(href);
                }, 100);
            } else {
                // Already on home, just scroll
                scrollToElement(href);
            }
        }
        else {
            // It's a route (like /sobre)
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const scrollToElement = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'Home', href: '/#home' }, // Changed to /#home implies Home route + ID
        { name: 'Sobre', href: '/sobre' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Cartão Digital', href: '/cartao' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-brand-navy/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-brand-gold group-hover:scale-105 transition-transform duration-300">
                        <img src="/assets/images/logo-flat.jpg" alt="TamarAI Logo" className="object-cover w-full h-full" />
                    </div>
                    <span className="font-sans text-2xl font-bold tracking-wider text-white">TamarAI</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="text-sm font-medium text-brand-gray hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="default"
                        onClick={() => window.open(CONTACT_INFO.whatsapp.link, '_blank')}
                    >
                        Fale Conosco
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-brand-gold"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/20 p-6 shadow-xl overflow-hidden">
                    <div className="flex flex-col gap-6 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-white hover:text-brand-gold"
                                onClick={(e) => handleNavigation(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            variant="default"
                            className="w-full mt-4"
                            onClick={() => {
                                window.open(CONTACT_INFO.whatsapp.link, '_blank');
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Fale Conosco
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
