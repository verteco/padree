import { motion } from 'framer-motion';
import { ShoppingBag, Search } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Noir Aether',
        description: 'Hlboká, zmyselná, so stopami santalo.',
        price: 199,
        imageColor: 'from-gray-800 to-black',
        accentColor: 'gray-500',
        tag: 'TOP PRODUKT',
    },
    {
        id: 2,
        name: 'Luna Aether',
        description: 'Jemná a svetlá, s kvetinovými tónmi.',
        price: 199,
        imageColor: 'from-gray-200 to-white',
        accentColor: 'gray-300',
        tag: 'TOP PRODUKT',
    },
    {
        id: 3,
        name: 'Terra Aether',
        description: 'Prírodná, zemitá, so zelenými akcentmi.',
        price: 99,
        imageColor: 'from-amber-900 to-amber-700',
        accentColor: 'amber-600',
        tag: 'AKCIA!',
    },
    {
        id: 4,
        name: 'Aurum Aether',
        description: 'Luxusná a teplá, s dotykom jantáru.',
        price: 199,
        imageColor: 'from-yellow-700 to-yellow-500',
        accentColor: 'yellow-500',
        tag: 'TOP PRODUKT',
    },
];

export const ProductsGrid = () => {
    return (
        <section id="collection" className="py-24 bg-padree-black relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif text-center text-white mb-16 tracking-widest uppercase"
                >
                    Produkty
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            {/* Tag */}
                            {product.tag && (
                                <div className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm ${product.tag === 'AKCIA!' ? 'bg-padree-gold text-black' : 'bg-white/10 text-white'
                                    }`}>
                                    {product.tag}
                                </div>
                            )}

                            {/* Product Visual Placeholder */}
                            <div className="h-48 my-8 flex items-center justify-center relative">
                                <div className={`w-32 h-32 rounded-full blur-2xl opacity-20 absolute bg-${product.accentColor}`} />
                                {/* Bracelet Shape */}
                                <div className={`w-40 h-10 rounded-full border-4 border-gray-600 relative group-hover:scale-110 transition-transform duration-500 bg-gradient-to-r ${product.imageColor}`}>
                                    <div className="absolute inset-2 bg-black/40 rounded-full" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-auto">
                                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-padree-gold transition-colors">{product.name}</h3>
                                <p className="text-xs text-gray-400 mb-6 h-8 line-clamp-2">{product.description}</p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-light text-white">€{product.price}</span>
                                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                                        <Search size={20} />
                                    </button>
                                </div>

                                <button
                                    className={`w-full mt-6 py-3 px-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm ${product.tag === 'AKCIA!'
                                            ? 'bg-white text-black hover:bg-gray-200'
                                            : 'border border-white/20 text-white hover:border-white hover:bg-white/5'
                                        }`}
                                >
                                    <ShoppingBag size={14} />
                                    Pridať do košíka
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
