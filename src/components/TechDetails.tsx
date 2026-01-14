import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export const TechDetails = () => {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(1);

    const hotspots = [
        {
            id: 1,
            x: '50%',
            y: '65%',
            title: 'Aether komora',
            text: 'Ukrytá vo vnútri náramku, uvoľňuje jemnú vôňu po celý deň – ticho, nenápadne, no s prítomnosťou.'
        },
        {
            id: 2,
            x: '75%',
            y: '30%',
            title: 'Kožený remienok',
            text: 'Talianska koža najvyššej kvality.'
        },
        {
            id: 3,
            x: '80%',
            y: '80%',
            title: 'Ručne brúsený kov',
            text: 'Chirurgická oceľ s brúsenou úpravou.'
        }
    ];

    return (
        <section className="py-32 bg-padree-black relative overflow-hidden">
            <div className="text-center mb-20 z-10 relative">
                <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-widest mb-4">Dokonalosť v každom detaile</h2>
                <div className="flex items-center justify-center gap-4 text-padree-gold">
                    <span className="h-[1px] w-12 bg-padree-gold"></span>
                    <span className="uppercase text-sm font-bold tracking-widest">Terra Aether</span>
                    <span className="h-[1px] w-12 bg-padree-gold"></span>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative h-[500px] flex items-center justify-center">
                {/* Main Bracelet Visual Placeholder */}
                <div className="w-full h-full relative flex items-center justify-center">
                    {/* Very Abstract Bracelet Representation for Tech Demo */}
                    <div className="w-[600px] h-[200px] rounded-[100%] border-[20px] border-gray-800 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-b from-gray-900 to-black transform rotate-x-12">
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-gray-300 rounded-lg shadow-inner flex items-center justify-center">
                            <div className="w-40 h-8 bg-orange-100/50 rounded blur-sm" />
                        </div>
                    </div>
                </div>

                {/* Hotspots */}
                {hotspots.map((spot) => (
                    <div
                        key={spot.id}
                        className="absolute z-20"
                        style={{ top: spot.y, left: spot.x }}
                    >
                        <button
                            onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeHotspot === spot.id ? 'bg-padree-gold text-black rotate-45' : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            <Plus size={16} />
                        </button>

                        {/* Tooltip */}
                        {activeHotspot === spot.id && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-black/90 border border-white/10 backdrop-blur-md p-4 rounded-xl shadow-2xl"
                            >
                                <h4 className="text-padree-gold text-xs font-bold uppercase mb-2">{spot.title}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">{spot.text}</p>
                            </motion.div>
                        )}

                        {/* Connecting Line (Decorative, simplified) */}
                        {activeHotspot === spot.id && (
                            <svg className="absolute top-1/2 left-1/2 w-32 h-32 pointer-events-none -z-10 opacity-30">
                                <line x1="0" y1="0" x2="-50" y2="-50" stroke="white" strokeWidth="1" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
