import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-padree-black pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-radial-[circle_at_center_var(--tw-gradient-stops)] from-gray-900/40 via-padree-black to-padree-black opacity-50" />

            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center md:text-left z-10"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 inline-block"
                    >
                        {/* Using text for now, could be logo */}
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tighter">
                        PADREE
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Elegantné náramky s dizajnovou vonnou komorou Aether.
                        <br />
                        <span className="text-sm mt-4 block text-gray-600">Pre tých, ktorí veria, že sofistikovanosť začína v detailoch.</span>
                    </p>

                    <motion.a
                        href="#collection"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium tracking-widest text-sm hover:bg-gray-200 transition-colors rounded-sm"
                    >
                        OBJAV KOLEKCIU &rarr;
                    </motion.a>
                </motion.div>

                {/* Right Side: Visual Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative h-[400px] md:h-[600px] flex items-center justify-center"
                >
                    {/* Placeholder for floating bracelets */}
                    <div className="relative w-full h-full">
                        {/* Simulated Bracelet 1 (Silver) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-0 md:left-10 w-64 h-24 bg-gradient-to-r from-gray-300 to-white rounded-full border-4 border-gray-400 rotate-[-15deg] shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden z-20"
                        >
                            <div className="w-4/5 h-3/4 bg-yellow-100/20 rounded-full blur-sm" />
                        </motion.div>

                        {/* Simulated Bracelet 2 (Black) */}
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/4 right-0 md:right-10 w-64 h-24 bg-gradient-to-r from-gray-800 to-black rounded-full border-4 border-gray-700 rotate-[15deg] shadow-2xl flex items-center justify-center overflow-hidden"
                        >
                            <div className="w-4/5 h-3/4 bg-black/50 rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
