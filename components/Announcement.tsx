import React, { useState, Fragment } from 'react';

const Announcement: React.FC = () => {
    const [isDismissed, setIsDismissed] = useState(false);

    if (isDismissed) {
        return <Fragment />;
    }

    return (
        <div
            dir="rtl"
            className="relative isolate z-50 flex w-full items-center gap-x-6 overflow-hidden border-b border-green-900 bg-[#181c14] px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
        >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-gray-200">
                    <strong className="font-semibold">إعلان</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    أذكى طريقة لبناء عمل تجاري عبر الإنترنت يحقق 10,000 دولار - 50,000 دولار شهريًا في عام 2024
                </p>
                <a
                    href="#form"
                    className="flex-none rounded-full bg-[#1d9248] px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    سجل الآن <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div className="flex flex-1 justify-end">
                <button
                    type="button"
                    className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                    onClick={() => setIsDismissed(true)}
                    aria-label="Dismiss"
                >
                    <span className="sr-only">تجاهل</span>
                     <svg 
                        className="h-5 w-5 text-gray-100" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                     >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Announcement;