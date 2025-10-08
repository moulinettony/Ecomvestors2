import React from 'react';
import AnimatedTooltip from './ui/AnimatedTooltip';

const people = [
  {
    id: 1,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=1',
    showTooltip: false,
  },
  {
    id: 2,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=2',
    showTooltip: false,
  },
  {
    id: 3,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=3',
    showTooltip: false,
  },
  {
    id: 4,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=4',
    showTooltip: false,
  },
  {
    id: 5,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=5',
    showTooltip: false,
  },
  {
    id: 6,
    name: '',
    designation: '',
    image: 'https://i.pravatar.cc/150?u=6',
    showTooltip: false,
  },
  {
    id: 7,
    name: 'أنت',
    designation: 'انضم إلينا',
    image: 'https://i.pravatar.cc/150?u=7',
    showTooltip: true,
  },
];

const Question: React.FC = () => {
  return (
    <section
      dir="rtl"
      className="container relative mt-20 ml-auto mr-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-4 text-center sm:px-6 md:px-8"
    >
      <div className="flex w-full flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
      </div>
      <p className="max-w-md text-sm text-gray-400" dir="rtl">
        في سوق تبلغ قيمته 717+ مليار يورو، ألا يمكنك حتى التمتع بشريحة من 1000 دولار في اليوم؟ نحن أول برنامج
        مدفوع بربح مضمون من خلال عقد قانوني. بالإضافة إلى ذلك، نتولى كل شيء من المنتجات إلى الشحن وتحويل الأموال
        - كل شيء يتم العناية به من أجلك.
      </p>
    </section>
  );
};

export default Question;
