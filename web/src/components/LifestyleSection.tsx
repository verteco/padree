

export const LifestyleSection = () => {
    return (
        <section className="py-20 bg-padree-black px-6">
            <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 relative">
                <div className="grid md:grid-cols-2">
                    {/* Image Side Placeholder */}
                    <div className="h-[500px] bg-gray-900 relative group overflow-hidden">
                        {/* Placeholder for Lifestyle Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />

                        <div className="absolute bottom-10 left-10 right-10 z-20">
                            <h3 className="text-3xl font-serif text-white mb-4">Nie je to len náramok. <br /> Je to tvoj podpis.</h3>
                            <p className="text-gray-400 text-sm">PADREE náramky spájajú dizajn, vôňu a emóciu do jedného prežitku. Nie sú vytvorené len na nosenie - ale na prežívanie.</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-12 md:p-20 flex flex-col justify-center bg-[#080808]">
                        <span className="text-padree-gold text-xs tracking-widest uppercase mb-6 block">Vôňa okamihu</span>
                        <p className="text-gray-300 font-light leading-relaxed mb-8">
                            S každým pohybom, s každým nádychom, sa vôňa zľahka dotýka tvojho priestoru. Nie je vtieravá – je intímna. Zachytí sa v pamäti tých, ktorí sú ti blízki, a pripomína tvoju prítomnosť aj po tom, čo odídeš.
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            PADREE náramok sa prispôsobí tvojmu rytmu – či ho nosíš k obleku, k ležérnemu tričku, alebo počas večerného stretnutia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
