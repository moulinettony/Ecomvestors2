import React from 'react';
import SparklesCore from './ui/SparklesCore';

const features: Array<{
    title: string;
    description: string;
    image: string;
}> = [
    {
        title: 'أحدث الطرق والهياكل',
        description:
            'كعضو في برنامج EV، ستحصل على وصول حصري إلى أكثر من 35 تحديث فيديو حول طرق وهياكل الدفع عند الاستلام. كن على اطلاع بأحدث المعلومات وتعلم الهياكل اللازمة لتأسيس عملك بنجاح.',
        image: 'https://ecomvestors-ecomvestors.vercel.app/assets/images/image-1.png',
    },
    {
        title: 'تدريب فردي يومي',
        description:
            'في برنامج EV، نعمل جنبًا إلى جنب مع المدربين وفريقك لمساعدتك في تأسيس نموذج عملك للدفع عند الاستلام. من خلال التواصل اليومي وجلسات التدريب الفردي على قناة Slac الخاصة بك، نقدم لك أسهل طريقة للتعلم من خلال الممارسة.',
        image: 'https://i.ibb.co/Zzf7yhsj/003.png',
    },
    {
        title: 'ضاعف أرباحك مع المنتج الرابح',
        description:
            'ايكومفيستوز تساعد  البائعين على اكتشاف وإطلاق المنتجات الرابحة التي تضاعف الأرباح حتى 10 مرات، باستخدام استراتيجيات مجرّبة وبيانات سوق حقيقية لتقديم منتجات جاهزة للنمو والربح السريع.',
        image: 'https://i.ibb.co/5x1KyDCW/Whats-App-Image-2025-10-11-at-5-22-42-PM.jpg',
    },
    {
        title: 'أول شركة تدريب توفر عقدًا قانونيًا لضمان أرباحك',
        description:
            'حن أول شركة تدريب تعتمد على عقد قانوني رسمي لحماية أرباح عملائنا، مما يمنحك الطمأنينة والثقة أثناء تطبيق استراتيجياتنا المجربة لتحقيق نمو مستدام ونتائج ملموسة.',
        image: 'https://i.ibb.co/zhf00spD/Whats-App-Image-2025-10-11-at-6-28-02-PM.jpg',
    },
];

const Card: React.FC<{
    title: string;
    description: string;
    image: string;
}> = ({
    title,
    description,
    image,
}) => {
    return (
        <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-[#0d110961]  /50 p-7 text-start shadow-2xl shadow-green-500/10 backdrop-blur-md">
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="size-full rounded-xl shadow-2xl shadow-green-500/10 backdrop-blur-md"
                />
            </div>
        </div>
    );
};

function Cards() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
                <Card key={index} title={feature.title} description={feature.description} image={feature.image} />
            ))}
        </div>
    );
}

const MasterProgram: React.FC = () => {
    return (
        <div dir="rtl" className="mt-5 flex w-full flex-col items-center justify-between">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className={
                            'container relative mx-auto my-4 w-full max-w-7xl rounded-3xl px-4 sm:my-10 sm:px-6 md:px-8'
                        }
                    >
                        <div className="mb-12 text-center">
                            <p className="mb-2 inline-block text-sm font-semibold text-green-400">
                                برنامج الماستر
                            </p>
                            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                                كل ما تحتاجه للنجاح
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300">
                                لقد قمنا بتضمين كل ما تحتاجه للنجاح في برنامج واحد. لا مزيد من التخمين، فقط خطة عمل مثبتة.
                            </p>
                        </div>
                        <Cards />
                    </div>

                    <div className="absolute inset-0 -z-10 h-screen w-full">
                        <SparklesCore
                            id="tsparticlesmasterprogram"
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

export default MasterProgram;