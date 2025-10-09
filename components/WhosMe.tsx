

import React from 'react';

const WhosMe: React.FC = () => {
    return (
        <div dir="rtl" className="w-full py-10 sm:py-12 md:py-16">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-6 md:px-8 lg:grid-cols-2">
                <div role="display" className="relative flex h-auto w-full flex-col items-center justify-center">
                    <img
                        src="https://www.ecomvestors.com/assets/images/aassim.jpg"
                        alt="Aassim El Kihel"
                        className="aspect-square size-full rounded-3xl object-cover"
                    />
                </div>
                <div className="flex h-full w-full max-w-2xl flex-col items-start justify-center">
                    <div className="mb-8 flex justify-start">
                        <div className="relative inline-block bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                            من أنا؟
                        </div>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                            تعرف على عاصم <span className="uppercase">الكيحل</span>,
                        </h1>
                        <p className="mt-6 text-base leading-8 text-gray-400">
                            أنا عاصم الكيحل، وفي سن 21 عامًا، صنعت مسارًا فريدًا ومربحًا في عالم الأعمال عبر الإنترنت.
                            بدأت رحلتي في المدرسة الثانوية، حيث كنت أبحث عن شيء مختلف عن المسار التقليدي. ومن هنا بدأت
                            أدرك الإمكانيات الهائلة لريادة الأعمال عبر الإنترنت. بحلول سن العشرين، كنت قد أنشأت متجرًا
                            عبر الإنترنت يحقق مبيعات تجاوزت 3 ملايين يورو. وبناءً على هذا النجاح، أطلقت برنامج EV Master
                            وأسست شركة Ecomvestors، التي تهدف إلى مساعدة البائعين على العمل بسلاسة في السوق الأوروبية.
                            يُعد برنامج EV Master ثورة حقيقية، حيث يدمج أسرار اللوجستيات والأدوات المتقدمة والأساليب
                            الخفية مع مجال التعليم الإلكتروني المتنامي بسرعة. هذا البرنامج يمنح رواد الأعمال الشباب
                            الفرصة لخلق تأثير إيجابي هائل في العالم، مع تحقيق أرباح كبيرة. EV هو المنصة المثالية لرواد
                            الأعمال الطموحين الذين يريدون التخلص من الأسالibir التقليدية الروتينية ويطمحون لنقل أعمالهم
                            عبر الإنترنت إلى مستوى آخر. انضم إليّ وإلى أكثر من 240 رائد أعمال ممن يساهمون في ثورة لنظام
                            الدفع عن الاستلام في اوروبا
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WhosMe;