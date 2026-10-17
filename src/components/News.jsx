import { Calendar, Tag } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: 'Keep Your Business Safe & Ensure High Availability.',
        date: '22 December 2021',
        category: 'it service',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisc ingelit sed do eiusmod',
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Keep Your Business Safe & Ensure High Availability.',
        date: '22 December 2021',
        category: 'it service',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisc ingelit sed do eiusmod',
        author: 'Admin'
    },
    {
        id: 3,
        title: 'Keep Your Business Safe & Ensure High Availability.',
        date: '22 December 2021',
        category: 'it service',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisc ingelit sed do eiusmod',
        author: 'Admin'
    }
];

export default function News() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 text-sm font-semibold">RECENT ARTICLES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Latest News from Us
                    </h2>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image Placeholder */}
                            <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <span className="text-gray-300 text-sm">News Image</span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                                    <a href="#" className="flex items-center gap-1 hover:text-blue-600">
                                        <Calendar className="w-4 h-4" />
                                        {item.date}
                                    </a>
                                    <a href="#" className="flex items-center gap-1 hover:text-blue-600 capitalize">
                                        <Tag className="w-4 h-4" />
                                        {item.category}
                                    </a>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition">
                                    {item.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>

                                {/* Author */}
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        By <a href="#" className="text-blue-600 hover:underline font-semibold">{item.author}</a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
