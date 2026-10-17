import { Check } from 'lucide-react';

const stats = [
    { label: 'Projects Done', value: '520' },
    { label: 'Awards Won', value: '24+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Happy Clients', value: '352+' }
];

const features = ['Custom shortcodes', 'Data Analytics', 'IT Consultancy', 'Data security'];

export default function About() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Image Section */}
                    <div className="flex items-center justify-center">
                        <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                            <span className="text-gray-300">About Image</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <span className="text-blue-400 text-sm font-semibold mb-2">IT SUPPORT FOR BUSINESS</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Preparing for your success trusted source in IT services.
                        </h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam nostrud
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                    <span className="text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-100 text-sm md:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
