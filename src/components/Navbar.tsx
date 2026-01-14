import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Domov', href: '#home' },
        { name: 'Kolekcia', href: '#collection' },
        { name: 'O Aether', href: '#about' },
        { name: 'Príbeh PADREE', href: '#story' },
        { name: 'Objav vône', href: '#scents' },
        { name: 'Kontakt', href: '#footer' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-serif font-bold tracking-widest text-white">
                    PADREE
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-light tracking-wide text-gray-300 hover:text-white transition-colors uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-light text-white text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
