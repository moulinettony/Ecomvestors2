import React from 'react';
import SparklesCore from './ui/SparklesCore';

// Placeholder icons to replace 'iconsax-react'
const MoneyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18v-.008Zm-12 0h.008v.008H6v-.008Z" />
    </svg>
);

const ShoppingCartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.828l2.91-6.836a.99.99 0 0 0-.023-.972 1.002 1.002 0 0 0-.858-.544H4.87M7.5 14.25 5.106 5.165M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const EmojiSadIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9.75h.008v.008H9V9.75Zm6 0h.008v.008H15V9.75Z" />
    </svg>
);

const KeyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    </svg>
);

const features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
}> = [
    {
        title: 'رسوم الدفع عند الاستلام المرتفعة في أوروبا',
        description: '80% من خدمات الدفع عند الاستلام تعتمد على إعادة البيع دون مستودعات خاصة، مما يؤدي إلى رسوم باهظة تصعّب تحقيق الأرباح.',
        icon: <MoneyIcon className="h-full w-full aspect-square text-blue-500" />,
    },
    {
        title: 'الأسواق الأوروبية المزدحمة',
        description: 'مع ازدحام الأسواق في أوروبا الغربية، نحن نفتح آفاقاً جديدة مع برنامج EV، مستهدفين الفرص الواعدة في أوروبا الشرقية.',
        icon: <ShoppingCartIcon className="h-full w-full aspect-square text-blue-500" />,
    },
    {
        title: ' هل مللت من الطرق التقليدية؟',
        description: 'استعد للسيطرة الكاملة مع فريقك الخاص ومركز اتصالك، وحقق توصيلات بأقل من 4 يورو لكل شحنة، لتجعل العمل مربحاً وممتعاً في آن واحد.',
        icon: <EmojiSadIcon className="h-full w-full aspect-square text-blue-500" />,
    },
    {
        title: 'أسرار النجاح في الدفع عند الاستلام',
        description: 'تعرف على ما يجري فعلاً في نموذج أعمال الدفع عند الاستلام واستخدمه لتحقيق النجاح لصالحك.',
        icon: <KeyIcon className="h-full w-full aspect-square text-blue-500" />,
    },
];

const Card = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <React.Fragment>
            <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-gray-900 p-4">{icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </React.Fragment>
    );
};

const Cards = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 py-10 md:grid md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    // Fix: Spread props was causing a TypeScript error with the 'key' prop. Explicitly passing props resolves this.
                    <Card key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div>
        </React.Fragment>
    );
};

const TheOldWay: React.FC = () => {
    return (
        <div dir="rtl" className="mt-10 flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className='container relative mx-auto mt-10 w-full max-w-7xl rounded-3xl px-4 sm:mb-10 sm:px-6 md:px-8'
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                                الطريقة القديمة
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                                نموذج الدفع عند الاستلام الحالي{' '}
                                <span className='font-bold tracking-widest'>متعثر</span>.
                            </h1>
                            <p className="mt-6 text-base leading-8 text-gray-600">
                                قل وداعاً للتكاليف المرتفعة والأسواق المزدحمة
                            </p>
                        </div>

                        <Cards />
                    </div>

                    <div className="absolute inset-0 -z-10 h-full w-full">
                        <SparklesCore
                            id="tsparticlesoldway"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={4}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>

                    <div
                        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-indigo-500 to-blue-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheOldWay;