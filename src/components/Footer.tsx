import { Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

export const Newsletter = () => {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-serif text-white mb-4 uppercase tracking-widest">Pridaj sa k PADREE komunite.</h2>
                <p className="text-gray-500 text-xs mb-8">Získaj prístup k novým kolekciám, limitovaným vôňovým tónom a exkluzívnym udalostiam ako prvý.</p>

                <form className="flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Zadaj svoj e-mail"
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors text-center"
                        />
                    </div>
                    <button className="bg-white text-black font-bold uppercase tracking-widest text-xs py-4 px-8 hover:bg-gray-200 transition-colors mt-4">
                        Prihlásiť sa
                    </button>
                </form>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer id="footer" className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Big Background Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-serif font-bold">PADREE</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-serif mb-6 tracking-widest">PADREE</h3>
                        <div className="space-y-2 text-xs text-gray-500">
                            <p>Každý okamih má svoj tón.</p>
                            <p>Každý dotyk má svoj zmysel.</p>
                            <p>Nech tvoj náramok rozpráva tvoj príbeh.</p>
                        </div>
                        <div className="flex gap-4 mt-8 text-gray-400">
                            <Instagram size={18} className="hover:text-white cursor-pointer" />
                            <Facebook size={18} className="hover:text-white cursor-pointer" />
                            <Linkedin size={18} className="hover:text-white cursor-pointer" />
                            <Youtube size={18} className="hover:text-white cursor-pointer" />
                            <Twitter size={18} className="hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-white transition-colors">Kolekcia</a>
                            <a href="#" className="hover:text-white transition-colors">O Aether</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-white transition-colors">Príbeh PADREE</a>
                            <a href="#" className="hover:text-white transition-colors">Objav vône</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:text-white transition-colors">Kontakt</a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-[10px] text-gray-600 uppercase tracking-widest">
                    © 2025 PADREE. Všetky práva vyhradené.
                </div>
            </div>
        </footer>
    )
}
