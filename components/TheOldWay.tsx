import React from 'react';
import SparklesCore from './ui/SparklesCore';

// Placeholder icons to replace 'iconsax-react'
const MoneyIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" fill="currentColor"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z" fill="currentColor"></path></svg>
);

const ShoppingCartIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM8.25 22.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" fill="currentColor"></path><path opacity=".4" d="m4.84 3.94-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H6.29c-.1-.44-.3-.86-.61-1.21a2.62 2.62 0 0 0-1.91-.84H2c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84Z" fill="currentColor"></path><path d="M20.51 8.75H5.17c-.42 0-.76.32-.8.73l-.36 4.35C3.87 15.53 5.21 17 6.92 17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 0 0-.79-.85Z" fill="currentColor"></path></svg>
);

const EmojiSadIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z" fill="currentColor"></path><path d="M10.64 9.501c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.36 9.501c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0a.71.71 0 0 1-.53.22ZM12 11.922c-2.69 0-4.88 2.19-4.88 4.88 0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28.02-2.69-2.17-4.88-4.86-4.88Z" fill="currentColor"></path></svg>
);

const KeyIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M19.789 4.22c-2.96-2.95-7.76-2.95-10.7 0-2.07 2.05-2.69 5-1.89 7.6l-4.7 4.7c-.33.34-.56 1.01-.49 1.49l.3 2.18c.11.72.78 1.4 1.5 1.5l2.18.3c.48.07 1.15-.15 1.49-.5l.82-.82c.2-.19.2-.51 0-.71l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.95 1.95c.19.19.51.19.7 0l2.12-2.11c2.59.81 5.54.18 7.6-1.87 2.95-2.95 2.95-7.76 0-10.71ZM14.499 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor"></path><path d="M14.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor"></path></svg>
);

const features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
}> = [
    {
        title: 'رسوم الدفع عند الاستلام المرتفعة في أوروبا',
        description: '80% من خدمات الدفع عند الاستلام تعتمد على إعادة البيع دون مستودعات خاصة، مما يؤدي إلى رسوم باهظة تصعّب تحقيق الأرباح.',
        icon: <MoneyIcon className="h-full w-full aspect-square text-green-500" />,
    },
    {
        title: 'الأسواق الأوروبية المزدحمة',
        description: 'مع ازدحام الأسواق في أوروبا الغربية، نحن نفتح آفاقاً جديدة مع برنامج EV، مستهدفين الفرص الواعدة في أوروبا الشرقية.',
        icon: <ShoppingCartIcon className="h-full w-full aspect-square text-green-500" />,
    },
    {
        title: ' هل مللت من الطرق التقليدية؟',
        description: 'استعد للسيطرة الكاملة مع فريقك الخاص ومركز اتصالك، وحقق توصيلات بأقل من 4 يورو لكل شحنة، لتجعل العمل مربحاً وممتعاً في آن واحد.',
        icon: <EmojiSadIcon className="h-full w-full aspect-square text-green-500" />,
    },
    {
        title: 'أسرار النجاح في الدفع عند الاستلام',
        description: 'تعرف على ما يجري فعلاً في نموذج أعمال الدفع عند الاستلام واستخدمه لتحقيق النجاح لصالحك.',
        icon: <KeyIcon className="h-full w-full aspect-square text-green-500" />,
    },
];

const Card: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
    return (
        <div className="flex h-full flex-col items-start justify-start rounded-3xl border border-gray-800/50 bg-[#0d110961] /50 p-7 text-start shadow-2xl shadow-green-500/10 backdrop-blur-md">
            <div className="mb-8 flex size-16 items-center justify-center rounded-xl bg-[#1d9248] p-4">{icon}</div>
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
                <Card key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
        </div>
    );
};

const TheOldWay: React.FC = () => {
    return (
        <div dir="rtl" className="mt-5 flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div className={'container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8'}>
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                               الطريقة القديمة لم تعد تعمل
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
                                كان بناء علامة تجارية في التجارة الإلكترونية واضحًا ومباشرًا. الآن، أصبحت نفس الاستراتيجيات القديمة مكتظة ومكلفة وغير فعالة.
                            </p>
                        </div>
                        <Cards />
                    </div>
                    <div className="absolute inset-0 -z-10 h-full w-full">
                        <SparklesCore
                            id="tsparticlestheoldway"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={4}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheOldWay;