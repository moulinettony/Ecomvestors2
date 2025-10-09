import React from 'react';

interface Testimonial {
    image: string;
    quote: string;
    avatar: string;
    name: string;
    country: string;
}

const column1Data: Testimonial[] = [
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-1.jpg',
        quote: 'The best.. quick communication, and fast execution. Next is 20k days.',
        avatar: 'https://www.ecomvestors.com/assets/avatars/1.png',
        name: 'Ouassim',
        country: 'Netherlands',
    },
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-2.jpg',
        quote: 'Real insights, no other like this.',
        avatar: 'https://www.ecomvestors.com/assets/avatars/2.png',
        name: 'Chris',
        country: 'Netherlands',
    },
];

const column2Data: Testimonial[] = [
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-3.jpg',
        quote: 'Been here now for 2 months, still surprised every time with the support and tips that i receive',
        avatar: 'https://www.ecomvestors.com/assets/avatars/3.png',
        name: 'Louis',
        country: 'France',
    },
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-4.jpg',
        quote: 'The best.. quick communication, and fast execution. Next is 20k days.',
        avatar: 'https://www.ecomvestors.com/assets/avatars/4.png',
        name: 'Ouassim',
        country: 'Netherlands',
    },
];

const column3Data: Testimonial[] = [
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-5.jpg',
        quote: 'First month of coaching 🫡 never expexted this guys',
        avatar: 'https://www.ecomvestors.com/assets/avatars/5.png',
        name: 'Josh',
        country: 'United Kingdom',
    },
    {
        image: 'https://www.ecomvestors.com/assets/testimonials/images/image-6.jpg',
        quote: '', // Empty quote handled gracefully
        avatar: 'https://www.ecomvestors.com/assets/avatars/6.png',
        name: 'Ben',
        country: 'Netherlands',
    },
];

// FIX: Changed TestimonialCard component to be defined as a React.FC.
// This helps TypeScript's type inference correctly handle special React props like 'key'
// and resolves incorrect 'property does not exist' errors at the call site.
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <li className="w-full flex-shrink-0">
        <div className="flex h-full items-end flex-col justify-between rounded-3xl bg-gray-950/50 border border-gray-800/50 backdrop-blur-md p-6 space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                    src={testimonial.image}
                    alt={`Testimonial from ${testimonial.name}`}
                    className="h-full w-full object-cover"
                />
            </div>
            {testimonial.quote && (
                <p className="text-lg font-medium text-white/90 text-left">
                    {testimonial.quote}
                </p>
            )}
            <div className="flex items-center gap-4">
                <div className="text-left">
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.country}</p>
                </div>
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </li>
);

const MarqueeColumn = ({ testimonials, reverse = false, duration = "80s" }: { testimonials: Testimonial[], reverse?: boolean, duration?: string }) => (
    <div 
        className="relative h-[700px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{ '--duration': duration } as React.CSSProperties}
    >
        <ul className={`absolute top-0 left-0 flex flex-col gap-4 animate-marquee-vertical ${reverse ? 'marquee-reverse' : ''} motion-reduce:animate-none`}>
            {[...testimonials, ...testimonials].map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
        </ul>
    </div>
);

const Tickers: React.FC = () => {
    return (
        <section dir="rtl" className="py-10 sm:py-20 bg-gray-950 overflow-hidden text-center text-white">
             <style>{`
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }

                .animate-marquee-vertical {
                    animation: marquee-vertical linear infinite;
                    animation-duration: var(--duration);
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <a href="#" className="text-sm text-blue-400 font-semibold mb-2 inline-block">
                    شهادات حقيقية
                </a>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    لا تأخذ كلمتنا فقط على محمل الجد
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                    استمع مباشرة من أعضائنا الذين يغيرون حياتهم ويحققون نجاحًا لا يصدق مع EcomVestors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <MarqueeColumn testimonials={column1Data} duration="80s" />
                    <div className="hidden md:block">
                        <MarqueeColumn testimonials={column2Data} reverse duration="95s" />
                    </div>
                    <div className="hidden md:block">
                        <MarqueeColumn testimonials={column3Data} duration="70s" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tickers;