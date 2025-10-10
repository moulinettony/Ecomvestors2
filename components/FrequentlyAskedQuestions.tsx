import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export default function FrequentlyAskedQuestions() {
    const content = [
        {
            question: 'ماذا سأتعلم في برنامج EcomVestors Master؟',
            answer: 'انضم إلينا في برنامج التعلم ذو المسارين: إتقان الأعمال مع EcomVestors وثورة الدفع عند الاستلام. تعلم جميع الحيل المتعلقة بأساليب الإعلان الخفية، وهياكل الإعلان المتينة، والأساليب المصرفية الجديدة، وأسرار اللوجستيات لشحن منتجاتك بتكلفة منخفضة.',
        },
        {
            question: 'كيف يعمل البرنامج؟',
            answer: 'عند الانضمام، ستحصل على وصول إلى برنامج EV عبر قناة Slack. هنا، سيكون لديك مدربان يوميان وفريق مخصص لمساعدتك من الصفر في إعداد كل شيء. ستتمكن أيضًا من الوصول إلى مقاطع فيديو تعليمية على Loom، ترشدك خطوة بخطوة. سيقدم لك البرنامج والمدربون الدعم في كل مرحلة، مع إرشادات مخصصة لمدة ثلاثة أشهر حتى تحقق النتائج.',
        },
        {
            question: 'أين يمكنني العثور على المساعدة؟',
            answer: 'يمكنك الوصول إلى الدعم والتدريب عبر قناتك الخاصة على Slack، حيث يمكنك طرح الأسئلة في جلسات الأسئلة والأجوبة، ومشاهدة مقاطع الفيديو التعليمية على Loom، وإجراء مكالمات مع مدربيك.',
        },
        {
            question: 'ما المطلوب مني؟',
            answer: 'التزامك بتعلم وتطبيق الاستراتيجيات التي يتم تدريسها في الدورة. نحن نوفر لك الخطة والأدوات اللازمة للنجاح؛ ودورك هو المتابعة والتفاني. تذكر، إنه عملك الخاص، لكننا هنا لإرشادك في كل خطوة على الطريق.',
        },
        {
            question: 'هل لا تزال لديك المزيد من الأسئلة؟',
            answer: 'قم بملء استمارة البرنامج، وسيسعد وكلاؤنا المخصصون بتقديم الإجابات.',
        },
    ]

    return (
        <div dir="rtl" className="w-full py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mb-12 max-w-2xl">
                    <div className="mb-8 flex justify-start">
                        <div className="relative inline-block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                            الأسئلة الشائعة
                        </div>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                            هل لديك أسئلة؟ لدينا الإجابات.
                        </h1>
                        <p className="mt-6 text-base leading-8 text-gray-400">
                            الأسئلة الشائعة حول برنامج EcomVestors Master.
                        </p>
                    </div>
                </div>
                <div role="display" className="relative z-10 flex h-auto w-full flex-col items-center justify-center">
                    {/* FIX: Removed unnecessary React.Fragment and moved the key prop to the AccordionItem for idiomatic list rendering. */}
                    <Accordion type="single" collapsible className="w-full">
                        {content.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}