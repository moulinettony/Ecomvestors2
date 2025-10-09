import React, { useState, useEffect, useRef } from 'react';
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
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVideoVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        const currentVideoRef = videoRef.current;
        if (currentVideoRef) {
            observer.observe(currentVideoRef);
        }

        return () => {
            if (currentVideoRef) {
                observer.unobserve(currentVideoRef);
            }
        };
    }, []);
    const gradientTextStyle = {
        WebkitTextFillColor: 'transparent',
        backgroundImage: 'linear-gradient(#32d09f 58%, #005f42)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
    };

    const buttonStyle = {
        backgroundColor: '#32d09f',
        boxShadow: '0 0 16px 1px #32d09f96',
        color: '#0b0d0c'
    };

    const sectionStyle: React.CSSProperties = {
        position: 'relative',
        paddingBottom: '20px',
        overflow: 'hidden',
    };

    const backgroundStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 100%',
        zIndex: 0,
    };

    const playButtonOverlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(29 78 216 / 75%)',
        borderRadius: '0.5rem',
        width: '125px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
    };
    return (
        <div dir="rtl" className="flex w-full flex-col items-center justify-between ">
            <div className="relative z-0 flex h-auto w-full flex-col items-center justify-center">
                <div className="relative isolate">
                    <div
                        className='container relative mx-auto w-full max-w-7xl rounded-3xl px-4 sm:my-2 sm:px-6  md:px-8'
                    >
                        <div className="mt-2 flex justify-center px-4 sm:mb-8">
                            <img
                                src={'https://i.ibb.co/svx9GP8b/new-logo.png'}
                                height={75}
                                width={75}
                                alt={'Logo'}
                            />
                        </div>
                        <div className="mb-8 mt-6 flex justify-center ">
                            <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-[10px] font-bold text-transparent lg:text-sm">
                                تقديم النسخة 4.0 من برنامج إيكومفيستورز
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl tracking-normal text-gray-300 lg:pb-6 lg:text-4xl lg:leading-10">
                                إليك خطة محكمة لتحقيق دخل يتراوح بين 20,000€ إلى 50,000€ شهريًا أو أكثر، من خلال التجارة{' '}
                                <br className="max-lg:hidden" /> الإلكترونية في أوروبا الشرقية
                            </p>
                            <p className="text-sm tracking-normal text-gray-300 lg:text-xl lg:leading-10">
                                أكثر من 800 عضو • أكثر من 650 منتج رابح •{' '}
                                <span className="relative inline-block bg-gradient-to-r from-green-500 to-green-800 bg-clip-text uppercase tracking-normal text-transparent">
                                    {' '}
                                    متوسط دخل 20,000€ شهريًا{' '}
                                </span>
                            </p>
                            <p className="text-sm tracking-normal text-gray-400 lg:text-xl lg:leading-10">
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
                                <div
                                    className="relative"
                                >
                                    <div className="wistia_responsive_padding overflow-hidden rounded-[1.75rem]" style={{ position: 'relative' }}>
                                        <div
                                            ref={videoRef}
                                            className={`wistia_responsive_padding rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out ${isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                            style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                                                {isPlaying ? (
                                                    <div
                                                        className="wistia_embed wistia_async_jgb3pqs49i autoPlay=true videoFoam=true playerColor=32d09f controlsVisibleOnLoad=true settingsControl=false wistiaButton=false plugin[wistia-branding][remove]=true"
                                                        style={{ height: '100%', position: 'relative', width: '100%' }}
                                                    >
                                                        &nbsp;
                                                    </div>
                                                ) : (
                                                    <div style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }} onClick={() => setIsPlaying(true)}>
                                                        <img
                                                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                                            alt="Play video about commission-only sales reps"
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                        <div
                                                            className=""
                                                            style={playButtonOverlayStyle}
                                                            onMouseOver={e => {
                                                                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                                                            }}
                                                            onMouseOut={e => {
                                                                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                                                            }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="white">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 flex justify-center max-lg:px-4">
                                <a
                                    href="#form"
                                    style={{
                                        borderColor: '#5b7b4e',
                                        boxShadow: '0 0 12px 3px #5b7b4eff inset',
                                    }}
                                    className="w-full rounded-lg border-2 bg-[#426135] py-4 px-7 text-center text-xl font-bold text-white no-underline transition-transform duration-200 hover:scale-105 active:scale-95"
                                >
                                    سجّل الآن
                                </a>
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

                            <div className="relative mt-8 flex flex-col items-center justify-center gap-5 lg:mt-10">
                                <div className="flex w-full flex-row items-center justify-center">
                                    <AnimatedTooltip items={people} />
                                </div>
                                <p className="max-w-md text-center text-xs tracking-widest text-gray-400 md:text-sm">
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