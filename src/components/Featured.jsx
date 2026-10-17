import { Database, Cloud, Code, Settings, Zap, Brain } from 'lucide-react';

const features = [
    {
        id: 1,
        icon: Database,
        title: 'Data Center',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
        id: 2,
        icon: Cloud,
        title: 'Cloud Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
        id: 3,
        icon: Code,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
        id: 4,
        icon: Settings,
        title: 'IT Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
        id: 5,
        icon: Zap,
        title: 'Software Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    },
    {
        id: 6,
        icon: Brain,
        title: 'Machine Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    }
];

export default function Featured() {
    return (
        <section
            className="py-20 md:py-32 px-4 md:px-8 bg-cover bg-center relative"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 text-sm font-semibold">WHO WE ARE</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        We deal with the aspects of professional IT Services
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 group"
                            >
                                <IconComponent className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">{feature.description}</p>
                                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 group/link">
                                    Read More <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition transform hover:scale-105">
                        View All Services
                    </a>
                </div>
            </div>
        </section>
    );
}
