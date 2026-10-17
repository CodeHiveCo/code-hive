import { MessageCircle, Palette, ThumbsUp } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: MessageCircle,
        title: 'Advertising and Marketing',
        step: '1'
    },
    {
        id: 2,
        icon: Palette,
        title: 'Web Development',
        step: '2'
    },
    {
        id: 3,
        icon: ThumbsUp,
        title: 'Mobile App Development',
        step: '3'
    }
];

export default function WorkProgress() {
    return (
        <section
            className="py-20 md:py-40 px-4 md:px-8 bg-cover bg-center relative"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-16">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
                        <div>
                            <span className="text-blue-200 text-sm font-semibold">HOW WE DO</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                                Custom IT Solutions <br className="hidden md:block" />
                                for Your Business
                            </h2>
                        </div>
                        <a href="#" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded font-semibold transition whitespace-nowrap">
                            Meet With Us
                        </a>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {steps.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.id} className="text-white">
                                    <div className="flex items-start gap-4">
                                        <div className="relative flex-shrink-0">
                                            <IconComponent className="w-12 h-12" />
                                            <span className="absolute -bottom-2 -right-2 bg-white text-blue-600 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                                {item.step}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
