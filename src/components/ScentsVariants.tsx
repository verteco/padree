import { ChevronDown } from 'lucide-react';

const scents = [
    {
        id: 'ocean',
        title: 'Aether OCEAN',
        description: 'Svieža, čistá a nekonečná. Vôňa morskej soli a vetra.',
        color: 'border-blue-400',
        textColor: 'text-blue-400',
        gradient: 'from-blue-900/40 to-black',
    },
    {
        id: 'earth',
        title: 'Aether EARTH',
        description: 'Zemitá, hrejivá a prirodzená. Vôňa vetiveru a machu.',
        color: 'border-green-500',
        textColor: 'text-green-500',
        gradient: 'from-green-900/40 to-black',
    },
    {
        id: 'wood',
        title: 'Aether WOOD',
        description: 'Teplá, hlboká a pokojná. Zmes cédrového dreva a ambry.',
        color: 'border-red-400',
        textColor: 'text-red-400',
        gradient: 'from-red-900/40 to-black',
    },
    {
        id: 'air',
        title: 'Aether AIR',
        description: 'Ľahká, vzdušná, elegantná. Jemné citrusové tóny.',
        color: 'border-yellow-400',
        textColor: 'text-yellow-400',
        gradient: 'from-yellow-900/40 to-black',
    }
];

export const ScentsVariants = () => {
    return (
        <section id="scents" className="py-24 bg-padree-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl font-serif text-white uppercase tracking-widest mb-4">
                        Štyri vône. Štyri nálady. Jeden podpis – PADREE.
                    </h2>
                    <p className="text-gray-400 text-sm">Vyber si tú, ktorá hovorí tvojim jazykom.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {scents.map((scent) => (
                        <div key={scent.id} className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
                            <div className={`absolute inset-0 bg-gradient-to-tr ${scent.gradient}`} />
                            {/* Texture placeholder */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className={`w-1 h-12 ${scent.textColor.replace('text', 'bg')} mb-4`} />
                                <h3 className="text-2xl font-serif text-white mb-2">{scent.title}</h3>
                                <p className="text-gray-300 text-sm mb-6 max-w-sm">{scent.description}</p>

                                <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase">
                                    Prečítaj viac
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
