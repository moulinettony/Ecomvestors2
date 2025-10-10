

import React, { useState } from 'react';
import Button from './ui/Button';

// A simple loading spinner icon to replace Radix's ReloadIcon
const ReloadIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <path
            d="M12 4V1M12 23v-3M20 12h3M1 12h3M19.07 4.93l2.12 2.12M2.81 19.07l2.12 2.12M19.07 19.07l2.12-2.12M2.81 4.93l2.12-2.12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// FIX: Explicitly defined the 'children' prop for form utility components.
// In newer versions of React (@types/react >= 18), React.FC no longer implicitly includes 'children',
// causing type errors. This change makes the 'children' prop explicit, resolving the issue.
const FormItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`flex w-full flex-col items-start justify-start gap-2 ${className}`}>{children}</div>
);
const FormLabel: React.FC<{ children: React.ReactNode; htmlFor?: string }> = ({ children, htmlFor }) => (
    <label htmlFor={htmlFor} className="text-sm font-medium leading-none text-white">{children}</label>
);
const FormDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-[0.8rem] text-gray-400">{children}</p>
);
const FormMessage: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    children ? <p className="text-[0.8rem] font-medium text-red-500">{children}</p> : null
);

const ContactForm: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        whereDidYouHear: 'INSTAGRAM',
        experienceInEcom: 'NO',
        budgetRange: '1K$ TO 2.5K$',
        termsAccepted: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRadioChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName || formData.fullName.length < 3) {
            newErrors.fullName = 'الاسم الكامل مطلوب.';
        }
        if (!formData.phoneNumber || !/^\+?1?\d{9,15}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'رقم الهاتف غير صالح.';
        }
        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'يجب عليك قبول الشروط والأحكام.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        try {
            setLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            alert('تم إرسال طلبك بنجاح.');
            // Reset form
            setFormData({
                fullName: '',
                phoneNumber: '',
                whereDidYouHear: 'INSTAGRAM',
                experienceInEcom: 'NO',
                budgetRange: '1K$ TO 2.5K$',
                termsAccepted: false,
            });
            setErrors({});

        } catch (err: any) {
            console.error('Error submitting form:', err);
            alert('حدث خطأ أثناء إرسال طلبك.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div dir="rtl" className="w-full py-12 sm:py-16" id="form">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 lg:px-8 lg:grid-cols-2">
                <div className="max-w-md">
                    <div className="mb-8 flex justify-start">
                        <div className="relative inline-block bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-sm font-bold uppercase leading-6 text-transparent">
                            قدم طلبك فقط إذا كنت مستعدًا للبدء وتمتلك رأس المال الكافي كما هو موضح في الخيارات
                        </div>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                            ابدأ رحلتك معنا الآن
                        </h1>
                        <p className="mt-6 text-base leading-8 text-gray-400">
                            أكمل النموذج الآن وابدأ رحلتك معنا في برنامج تدريب بنظام 2vs1، المصمم خصيصًا لضمان وصولك
                            إلى أول 1000 يورو يوميًا. إذا كنت تفي بمعاييرنا، سيتواصل معك أحد وكلائنا المخصصين بسرعة
                            لتتخذ الخطوة الأولى نحو فرصة تجارية واعدة في أوروبا.
                        </p>
                    </div>
                </div>
                <div role="display" className="relative z-10 flex h-auto w-full flex-col items-start justify-start">
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="w-full space-y-6">
                            <FormItem>
                                <FormLabel>الاسم الكامل</FormLabel>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="محمد العليمي"
                                    type="text"
                                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <FormMessage>{errors.fullName}</FormMessage>
                                <FormDescription>نحتاج إلى اسمك الكامل لنخاطبك بشكل صحيح.</FormDescription>
                            </FormItem>

                            <FormItem>
                                <FormLabel>رقم الهاتف</FormLabel>
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+212 XXX XXX XXX"
                                    type="text"
                                    dir="ltr"
                                    className="flex text-right h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <FormMessage>{errors.phoneNumber}</FormMessage>
                                <FormDescription>نحتاج إلى رقم هاتفك للتواصل معك.</FormDescription>
                            </FormItem>

                            <FormItem>
                                <FormLabel>من أين سمعت عنا؟</FormLabel>
                                <div className="flex flex-col space-y-1">
                                    {['INSTAGRAM', 'OLD CLIENT', 'SOMEWHERE ELSE'].map(value => {
                                        const labels: { [key: string]: string } = {
                                            'INSTAGRAM': 'انستغرام',
                                            'OLD CLIENT': 'توصية من عميل قديم',
                                            'SOMEWHERE ELSE': 'مكان آخر'
                                        };
                                        return (
                                            <div key={value} className="flex items-center gap-x-3">
                                                <input type="radio" id={`hear_${value}`} name="whereDidYouHear" value={value} checked={formData.whereDidYouHear === value} onChange={(e) => handleRadioChange('whereDidYouHear', e.target.value)} className="h-4 w-4 text-green-600 bg-gray-700 border-gray-600 focus:ring-green-500" />
                                                <label htmlFor={`hear_${value}`} className="font-normal text-gray-300">{labels[value]}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </FormItem>
                            
                            <FormItem>
                                <FormLabel>هل لديك خبرة في التجارة الإلكترونية؟</FormLabel>
                                <div className="flex flex-col space-y-1">
                                    {['YES', 'NO'].map(value => (
                                         <div key={value} className="flex items-center gap-x-3">
                                            <input type="radio" id={`exp_${value}`} name="experienceInEcom" value={value} checked={formData.experienceInEcom === value} onChange={(e) => handleRadioChange('experienceInEcom', e.target.value)} className="h-4 w-4 text-green-600 bg-gray-700 border-gray-600 focus:ring-green-500" />
                                            <label htmlFor={`exp_${value}`} className="font-normal text-gray-300">{value === 'YES' ? 'نعم' : 'لا'}</label>
                                        </div>
                                    ))}
                                </div>
                            </FormItem>

                             <FormItem>
                                <FormLabel>ما هو نطاق ميزانيتك؟</FormLabel>
                                <div className="flex flex-col space-y-1">
                                    {['1K$ TO 2.5K$', '2.5K$ TO 5K$', '+5K$'].map(value => {
                                         const labels: { [key: string]: string } = {
                                            '1K$ TO 2.5K$': '2.5K$ من 1K$ إلى',
                                            '2.5K$ TO 5K$': 'من 2.5K$ إلى 5K$',
                                            '+5K$': '+5K$'
                                        };
                                        return (
                                            <div key={value} className="flex items-center gap-x-3">
                                                <input type="radio" id={`budget_${value}`} name="budgetRange" value={value} checked={formData.budgetRange === value} onChange={(e) => handleRadioChange('budgetRange', e.target.value)} className="h-4 w-4 text-green-600 bg-gray-700 border-gray-600 focus:ring-green-500" />
                                                <label htmlFor={`budget_${value}`} className="font-normal text-gray-300"><span dir="ltr">{labels[value]}</span></label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </FormItem>

                            <FormItem>
                                <div className="flex items-start gap-3">
                                     <input
                                        id="termsAccepted"
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleChange}
                                        className="h-5 w-5 mt-0.5 rounded border-gray-600 bg-gray-700 text-green-600 focus:ring-green-500"
                                    />
                                    <div>
                                    <label
                                        htmlFor="termsAccepted"
                                        className="font-normal leading-5 text-gray-300"
                                    >
                                        أنا على يقين تام بأنني مستعد ولدي رأس المال الكافي، وأنتظر
                                        مكالمة من فريق إيكومفستورس للحصول على المزيد من المعلومات.
                                    </label>
                                    <FormMessage>{errors.termsAccepted}</FormMessage>
                                    </div>
                                </div>
                            </FormItem>


                            <div className="flex w-full flex-row items-center justify-end gap-2">
                                <Button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-white bg-green-700 font-bold text-white shadow-2xl shadow-green-500/50 hover:bg-gray-900 hover:text-green-600 active:bg-green-950 active:text-green-500 h-10 px-4 py-2 rounded-full"
                                    variant={'secondary'}
                                    shape={'pill'}
                                    onClick={() => {
                                        setFormData({
                                            fullName: '', phoneNumber: '', whereDidYouHear: 'INSTAGRAM',
                                            experienceInEcom: 'NO', budgetRange: '1K$ TO 2.5K$', termsAccepted: false,
                                        });
                                        setErrors({});
                                    }}
                                >
                                    إعادة تعيين
                                </Button>

                                {isLoading ? (
                                    <Button variant={'default'} shape={'pill'} type="button" disabled className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-green-500 bg-white font-bold text-green-500 shadow-2xl shadow-green-500/50 hover:bg-green-50 hover:text-green-600 active:bg-green-100 h-10 px-4 py-2 rounded-full">
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                        يرجى الانتظار
                                    </Button>
                                ) : (
                                    <Button type="submit" variant={'default'} shape={'pill'} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95 border border-green-500 bg-white font-bold text-green-500 shadow-2xl shadow-green-500/50 hover:bg-green-50 hover:text-green-600 active:bg-green-100 h-10 px-4 py-2 rounded-full">
                                        أرسل طلبك
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;