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
        image: 'https://www.ecomvestors.com/assets/images/image-1.png',
    },
    {
        title: 'تدريب فردي يومي',
        description:
            'في برنامج EV، نعمل جنبًا إلى جنب مع المدربين وفريقك لمساعدتك في تأسيس نموذج عملك للدفع عند الاستلام. من خلال التواصل اليومي وجلسات التدريب الفردي على قناة Slac الخاصة بك، نقدم لك أسهل طريقة للتعلم من خلال الممارسة.',
        image: 'https://www.ecomvestors.com/assets/images/image-2.png',
    },
];

// FIX: Changed Card component to be defined as a React.FC.
// This helps TypeScript's type inference correctly handle special React props like 'key'
// and resolves incorrect 'property does not exist' errors at the call site.
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
        <div className="flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-950/50 p-7 text-start shadow-2xl shadow-blue-500/10 backdrop-blur-md">
            <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <div className="-mb-14 mt-8 flex w-full items-center justify-center">
                <img
                    src={image}
                    alt={title}
                    className="size-full rounded-xl shadow-2xl shadow-blue-500/10 backdrop-blur-md"
                />
            </div>
        </div>
    );
};

function Cards() {
    return (
        <>
        <div className="lg:mb-12 flex flex-col place-content-center place-items-center items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
                <Card key={index} title={feature.title} description={feature.description} image={feature.image} />
            ))}
        </div>
        <div className="flex flex-col place-content-center place-items-center items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
                <Card key={index} title={feature.title} description={feature.description} image={feature.image} />
            ))}
        </div>
        </>
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