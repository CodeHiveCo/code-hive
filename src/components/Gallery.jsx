const galleryItems = [
    {
        id: 1,
        title: 'Laptop in the office',
        category: 'Our Gallery'
    },
    {
        id: 2,
        title: 'Laptop in the office',
        category: 'Our Gallery'
    },
    {
        id: 3,
        title: 'Laptop in the office',
        category: 'Our Gallery'
    },
    {
        id: 4,
        title: 'Laptop in the office',
        category: 'Our Gallery'
    }
];

export default function Gallery() {
    return (
        <section
            className="py-20 md:py-32 px-4 md:px-8 bg-cover bg-center relative"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold">OUR GALLERY</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Some Of Our Work
                    </h2>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <span className="text-gray-300 text-sm">Gallery Image</span>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center">
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 text-center">
                                    <p className="text-blue-400 text-xs font-semibold mb-2">{item.category}</p>
                                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
