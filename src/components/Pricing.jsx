import { Check } from 'lucide-react';

const pricingPlans = [
    {
        id: 1,
        title: 'Standard',
        price: 29.99,
        features: [
            'Limited install',
            'Unlimited Download',
            'Free One Year Support',
            'Free 15 GB Linux Hosting'
        ]
    },
    {
        id: 2,
        title: 'Business',
        price: 59.99,
        features: [
            'Limited install',
            'Unlimited Download',
            'Free One Year Support',
            'Free 15 GB Linux Hosting'
        ],
        featured: true
    },
    {
        id: 3,
        title: 'Premium',
        price: 79.99,
        features: [
            'Limited install',
            'Unlimited Download',
            'Free One Year Support',
            'Free 15 GB Linux Hosting'
        ]
    }
];

export default function Pricing() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 text-sm font-semibold">PRICING PACKAGES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Choose Your Best Plan
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-lg transition-all duration-300 transform hover:shadow-2xl ${plan.featured
                                    ? 'bg-blue-600 text-white scale-105 shadow-xl'
                                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-600'
                                } p-8 flex flex-col`}
                        >
                            {/* Header */}
                            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                            <div className="mb-6">
                                <span className={`text-4xl font-bold`}>${plan.price}</span>
                                <span className={`text-sm ${plan.featured ? 'text-blue-100' : 'text-gray-600'}`}>/month</span>
                            </div>

                            {/* Features */}
                            <ul className="flex-grow mb-8 space-y-3">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`w-full py-3 rounded font-semibold transition ${plan.featured
                                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
