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
        image: 'https://framerusercontent.com/images/riThmRsLY0P73f82C88Ccuu2cWk.png',
        quote: 'The best.. quick communication, and fast execution. Next is 20k days.',
        avatar: 'https://framerusercontent.com/images/Kc0ISBr4MMAbNFwZmEumJtm5O5w.png',
        name: 'Ouassim',
        country: 'Netherlands',
    },
    {
        image: 'https://framerusercontent.com/images/6vazZZth0VsYRqJYAJ2LWeVLAE.png',
        quote: 'Real insights, no other like this.',
        avatar: 'https://framerusercontent.com/images/vcGjZ1DuGrxecqc0mvSDtDJRfIU.png',
        name: 'Chris',
        country: 'Netherlands',
    },
];

const column2Data: Testimonial[] = [
    {
        image: 'https://framerusercontent.com/images/mAM3FZh2gxBi2lXeVtCBQJI.png',
        quote: 'Been here now for 2 months, still surprised every time with the support and tips that i receive',
        avatar: 'https://framerusercontent.com/images/WcTezAxmn8PiIE3RobqJX3e5NY.png',
        name: 'Louis',
        country: 'France',
    },
    {
        image: 'https://framerusercontent.com/images/riThmRsLY0P73f82C88Ccuu2cWk.png',
        quote: 'The best.. quick communication, and fast execution. Next is 20k days.',
        avatar: 'https://framerusercontent.com/images/Kc0ISBr4MMAbNFwZmEumJtm5O5w.png',
        name: 'Ouassim',
        country: 'Netherlands',
    },
];

const column3Data: Testimonial[] = [
    {
        image: 'https://framerusercontent.com/images/MbOoggWcbraZXbU8cpZ6EGCirY.png',
        quote: 'First month of coaching 🫡 never expexted this guys',
        avatar: 'https://framerusercontent.com/images/LXCbKG7UmSDTjdQ8YItdRigFPz8.png',
        name: 'Josh',
        country: 'United Kingdom',
    },
    {
        image: 'https://framerusercontent.com/images/2Lglznvf8J1jOmAWR2cj3T3JGRQ.png',
        quote: '', // Empty quote handled gracefully
        avatar: 'https://framerusercontent.com/images/9Ha33sQpTh8bLXRPRAZi1pyI7H0.png',
        name: 'Ben',
        country: 'Netherlands',
    },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
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
                    animation: marquee-vertical 25s linear infinite;
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