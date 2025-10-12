import React from 'react';

interface Plan {
    name: string;
    id: string;
    price: string;
    features: string[];
    isPopular: boolean;
}

const plans: Plan[] = [
    {
        name: 'الأساسية',
        id: 'Basic',
        price: '850',
        features: [
            '+75 فيديو تدريبي، وصول فوري',
            'اختبار 10 منتجات، منتج رابح واحد (استهداف 700$)',
            'تدريب فردي خاص (1-on-1)',
            'دعم عبر Slack/WhatsApp لمدة 3 أيام في الأسبوع',
        ],
        isPopular: false,
    },
    {
        name: 'الاحترافية',
        id: 'Pro',
        price: '1,500',
        features: [
            '+95 فيديو تدريبي، وصول فوري',
            'اختبار 5 منتجات، منتج رابح واحد (مبيعات +1 ألف دولار يومياً)',
            'تدريب مع 3 مدربين (3 ضد 1)',
            'دعم عبر Slack/WhatsApp لمدة 5 أيام في الأسبوع',
            'بطاقة Euroship Pro',
        ],
        isPopular: true,
    },
    {
        name: 'المميزة',
        id: 'Premium',
        price: '4,000',
        features: [
            '+115 فيديو تدريبي، وصول فوري',
            'الوصول إلى 5 منتجات رابحة (مبيعات +2 ألف دولار يومياً)',
            'تدريب مع 3 مدربين + اجتماعات حقيقية',
            'الوصول الكامل لأسواق وجهات الاتصال في أوروبا',
            'هيكلة أعمال ودفع في هونغ كونغ',
        ],
        isPopular: false,
    },
];

const cardStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at center top, rgba(4, 120, 87, 0.25), transparent 40%), rgb(9 12 7 / 54%)',
    border: '1px solid #1e2815',
};

interface FormData {
    fullName: string;
    phoneNumber: string;
    selectedPlan: string;
    whereDidYouHear: string;
    experienceInEcom: string;
    budgetRange: string;
    termsAccepted: boolean;
}

interface PricingSectionProps {
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}


const PricingSection: React.FC<PricingSectionProps> = ({ setFormData }) => {
    const handlePlanSelect = (planId: string) => {
        setFormData(prev => ({ ...prev, selectedPlan: planId }));
    };
    
    return (
        <div dir="rtl" className="my-12 px-4 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex justify-center">
                    <div className="relative inline-block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                        خطط الأسعار
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                        اختر الخطة التي تناسبك
                    </h1>
                    <p className="mt-3 text-base leading-8 text-gray-400">
                        ابدأ رحلتك نحو النجاح اليوم. خطط مرنة مصممة لتلبية احتياجاتك في كل مرحلة من مراحل نموك.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex h-full flex-col justify-between rounded-2xl p-8 transition-transform duration-300 ${
                                plan.isPopular ? 'lg:scale-105' : ''
                            }`}
                            style={{
                                ...cardStyle,
                                border: plan.isPopular ? '1px solid #047857' : cardStyle.border,
                            }}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-600 to-teal-900 px-4 py-1 text-xs font-bold uppercase text-white">
                                    الأكثر رواجاً
                                </div>
                            )}

                            <div className="text-right">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#11170f"
                                    className="mb-4 h-12 w-12 justify-self-end rounded bg-gradient-to-r from-green-600 to-teal-900 p-3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                                <p className="mt-4 text-5xl font-bold tracking-tight text-white">
                                    ${plan.price}
                                </p>

                                <ul role="list" className="mt-8 space-y-4 text-gray-300">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            <svg
                                                className="h-6 w-5 flex-none text-[#32d09f]"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#form"
                                onClick={() => handlePlanSelect(plan.id)}
                                className="mt-6 inline-flex h-11 w-full transform-gpu items-center justify-center gap-2 whitespace-nowrap rounded bg-green-700 px-8 text-sm font-bold text-white shadow-2xl shadow-green-500/50 ring-offset-background transition-transform duration-200 hover:scale-105 hover:bg-[#1d9248] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 active:bg-green-950 disabled:pointer-events-none disabled:opacity-50"
                            >
                                ابدأ الآن
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;