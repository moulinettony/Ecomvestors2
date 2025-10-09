import React from 'react';
import AnimatedTooltip from './ui/AnimatedTooltip';
import Button from './ui/Button';
import SparklesCore from './ui/SparklesCore';

const people = [
    {
        id: 1,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/1.png',
        showTooltip: false,
    },
    {
        id: 2,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/2.png',
        showTooltip: false,
    },
    {
        id: 3,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/3.png',
        showTooltip: false,
    },
    {
        id: 4,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/4.png',
        showTooltip: false,
    },
    {
        id: 5,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/5.png',
        showTooltip: false,
    },
    {
        id: 6,
        name: '',
        designation: '',
        image: 'https://www.ecomvestors.com/assets/avatars/6.png',
        showTooltip: false,
    },
    {
        id: 7,
        name: 'أنت',
        designation: 'انضم إلينا',
        image: 'https://www.ecomvestors.com/assets/avatars/you1.png',
        showTooltip: true,
    },
];

const HeroSection: React.FC = () => {
    return (
        <div dir="rtl" className="flex w-full flex-col items-center justify-between ">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className='container relative mx-auto w-full max-w-7xl rounded-3xl px-4 sm:my-2 sm:px-6  md:px-8'
                    >
                        <div className="mt-2 flex justify-center px-4 sm:mb-8">
                            <img
                                src={'https://www.ecomvestors.com/logos/new-logo.png'}
                                height={50}
                                width={200}
                                alt={'Logo'}
                            />
                        </div>
                        <div className="mb-8 mt-6 flex justify-center ">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-[10px] font-bold text-transparent lg:text-sm">
                                تقديم النسخة 4.0 من برنامج إيكومفيستورز
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-center text-sm tracking-normal text-gray-300 lg:pb-6 lg:text-2xl lg:leading-10">
                                إليك خطة محكمة لتحقيق دخل يتراوح بين 20,000€ إلى 50,000€ شهريًا أو أكثر، من خلال التجارة{' '}
                                <br className="max-lg:hidden" /> الإلكترونية في أوروبا الشرقية
                            </p>
                            <p className="text-center text-sm tracking-normal text-gray-300 lg:text-xl lg:leading-10">
                                أكثر من 800 عضو • أكثر من 650 منتج رابح •{' '}
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    {' '}
                                    متوسط دخل 20,000€ شهريًا{' '}
                                </span>
                            </p>
                            <p className="text-center text-sm tracking-normal text-gray-400 lg:text-xl lg:leading-10">
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    الخطوة الأولى:
                                </span>{' '}
                                شاهد الفيديو واحصل على خصم 50٪
                                <br className="max-lg:hidden" /> هل أنت مستعد للبدء؟{' '}
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    سجّل الآن ↓
                                </span>
                            </p>
                            <div className="mx-auto max-w-[900px] py-8">
                                <div className="wistia_responsive_padding shadow-lg md:rounded-[50px] overflow-hidden" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                    <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                                        <iframe
                                            src="https://fast.wistia.net/embed/iframe/jgb3pqs49i?videoFoam=true"
                                            title="Ecomvestors Master Program V4"
                                            allow="autoplay; fullscreen"
                                            allowTransparency={true}
                                            frameBorder="0"
                                            scrolling="no"
                                            name="wistia_embed"
                                            width="100%"
                                            height="100%"
                                            style={{ height: '100%', position: 'relative', width: '100%' }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm tracking-normal text-gray-200 max-lg:px-4 lg:text-xl lg:leading-10">
                                اكتشف كيفية بناء عمل تجارة إلكترونية حقيقي بتكلفة منخفضة، تحت إشراف مبتكري نموذج EV.
                                مرحبًا بك في برنامج إيكومفستورس ماستر بروجرام V5
                            </p>

                            <h3
                                style={{ wordSpacing: '0.25rem' }}
                                className="mb-10 mt-2  px-6 text-[10px] font-normal tracking-tight text-gray-50  md:mt-6 md:text-lg  lg:hidden"
                            >
                                {
                                    'اكتشف كيفية بناء عمل تجارة إلكترونية حقيقي بتكلفة منخفضة، تحت إشراف مبتكري نموذج EV. مرحبًا بك في برنامج إيكومفستورس ماستر بروجرام V4'
                                }
                            </h3>

                            {/* Desktop Buttons */}
                            <div className=" mx-4 mt-6 hidden flex-col items-center justify-center gap-3 sm:gap-4 lg:mx-8 lg:mt-12  lg:flex lg:flex-row lg:gap-5">
                                <img
                                    className="pb-4 lg:pb-6 "
                                    src={'https://www.ecomvestors.com/assets/readytostart.png'}
                                    width={170}
                                    height={10}
                                    alt={'Ready to start'}
                                />

                                <a href="#form" className="flex w-full items-center justify-center lg:w-auto">
                                    <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu duration-200 hover:scale-105 active:scale-95 border border-white bg-green-600 font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-green-700 h-12 px-16 rounded-full" variant={'special'}>
                                        احجز مكانك الآن{' '}
                                    </Button>
                                </a>

                                <a
                                    href="https://calendly.com/aassimmentoring/ev-partnerships?month=2024-04"
                                    className="flex w-full items-center justify-center lg:w-auto"
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-white bg-blue-700 font-bold text-white shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-12 px-16 rounded-full" variant={'secondary'}>
                                        كن شريكا أو مستثمرًا{' '}
                                    </Button>
                                </a>

                                <img
                                    className="pt-4 lg:pb-6 lg:pt-0"
                                    src={'https://www.ecomvestors.com/assets/needmoreinfo.png'}
                                    width={170}
                                    height={10}
                                    alt={'Need more info'}
                                />
                            </div>

                            {/* Mobile Buttons */}
                            <div className="relative  mt-6 flex flex-row items-center justify-center gap-[1px] lg:hidden">
                                <img
                                    className="ml-1 pt-8"
                                    src={'https://www.ecomvestors.com/assets/readytostart.png'}
                                    width={90}
                                    height={10}
                                    alt={'Ready to start'}
                                />

                                <div className="flex flex-col items-center gap-2">
                                    <a href="#form" className="flex w-full items-center justify-center">
                                        <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu duration-200 hover:scale-105 active:scale-95 border border-white bg-[rgb(29 202 93)] font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-[rgb(19 165 73)] h-10 px-4 rounded-full text-[10px]" variant={'green'} size={'md'} shape={'pill'}>
                                            احجز مكانك الآن{' '}
                                        </Button>
                                    </a>
                                    <a
                                        href="https://calendly.com/aassimmentoring/ev-partnerships?month=2024-04"
                                        className="flex w-full items-center justify-center"
                                        target="_self"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-white bg-blue-700 font-bold text-white shadow-2xl shadow-blue-500/50 hover:bg-gray-900 hover:text-blue-600 active:bg-blue-950 active:text-blue-500 h-10 px-4 rounded-full text-[10px]"
                                            variant={'secondary'}
                                            size={'md'}
                                            shape={'pill'}
                                        >
                                            كن شريكا أو مستثمرًا{' '}
                                        </Button>
                                    </a>
                                </div>

                                <img
                                    className="pb-14"
                                    src={'https://www.ecomvestors.com/assets/needmoreinfo.png'}
                                    width={90}
                                    height={10}
                                    alt={'Need more info'}
                                />
                            </div>

                            <div className="relative mt-8 flex flex-col items-center justify-center gap-5 lg:mt-10">
                                <div className="flex w-full flex-row items-center justify-center">
                                    <AnimatedTooltip items={people} />
                                </div>
                                <p className="max-w-md text-xs tracking-widest text-gray-400 md:text-sm">
                                    يسعدنا أن نرحب بك في مجتمع رواد الأعمال المغربي الذين يحدثون ثورة في نماذج أعمال
                                    الدفع عند الاستلام في أوروبا.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 -z-10 h-full w-full">
                        <SparklesCore
                            id="tsparticlesfullpage"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={1}
                            className="h-full w-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;