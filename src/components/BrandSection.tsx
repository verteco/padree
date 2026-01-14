import { motion } from 'framer-motion';

export const BrandSection = () => {
    return (
        <section id="about" className="relative py-32 bg-padree-black overflow-hidden flex items-center justify-center">
            {/* Watermark Background */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none tracking-widest whitespace-nowrap">
                PADREE
            </h2>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="block text-sm font-bold tracking-[0.3em] text-padree-gold mb-6 uppercase"
                >
                    O Nás
                </motion.span>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-serif text-white leading-relaxed mb-12"
                >
                    "Viac než šperk - zážitok, ktorý zostáva v pamäti."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 text-gray-400 font-light text-sm md:text-base leading-loose max-w-2xl mx-auto"
                >
                    <p>
                        PADREE spája eleganciu ručnej výroby s inovatívnou vôňovou technológiou Aether.
                    </p>
                    <p>
                        Každý náramok obsahuje diskrétnu aromatickú komoru, ktorá uvoľňuje jemnú a dlhotrvajúcu vôňu, vytvárajúc osobný podpis, ktorý ťa sprevádza kamkoľvek ideš.
                        Inšpirovaní čistotou kovu, teplom kože a silou individuality – navrhujeme šperky, ktoré nenosíš len na sebe, ale aj v sebe.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
