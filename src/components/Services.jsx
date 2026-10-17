import { Cpu, Globe, Cloud, Brain } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: Cpu,
        title: 'Product Service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        hoverTitle: 'Preparing For Your Business Success With IT Solution',
        hoverDesc: 'Lorem ipsum dolor sit amet consectetur adipisc'
    },
    {
        id: 2,
        icon: Globe,
        title: 'IT Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        hoverTitle: 'Preparing For Your Business Success With IT Solution',
        hoverDesc: 'Lorem ipsum dolor sit amet consectetur adipisc'
    },
    {
        id: 3,
        icon: Cloud,
        title: 'Cloud Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        hoverTitle: 'Preparing For Your Business Success With IT Solution',
        hoverDesc: 'Lorem ipsum dolor sit amet consectetur adipisc'
    },
    {
        id: 4,
        icon: Brain,
        title: 'Machine Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        hoverTitle: 'Preparing For Your Business Success With IT Solution',
        hoverDesc: 'Lorem ipsum dolor sit amet consectetur adipisc'
    }
];

export default function Services() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative bg-white border-2 border-transparent hover:border-blue-600 rounded-lg p-8 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Normal State */}
                                <div className="group-hover:hidden">
                                    <IconComponent className="w-12 h-12 text-blue-600 mb-6" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                                        <span className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center">→</span>
                                    </a>
                                </div>

                                {/* Hover State */}
                                <div className="hidden group-hover:block">
                                    <h3 className="text-xl font-bold text-white mb-3">{service.hoverTitle}</h3>
                                    <p className="text-gray-100 text-sm mb-6">{service.hoverDesc}</p>
                                    <a href="#" className="inline-block bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
                                        Learn More
                                    </a>
                                </div>

                                {/* Background on hover */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
