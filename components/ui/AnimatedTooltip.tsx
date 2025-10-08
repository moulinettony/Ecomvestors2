import React from 'react';

interface Person {
    id: number;
    name: string;
    designation: string;
    image: string;
    showTooltip?: boolean;
}

interface AnimatedTooltipProps {
    items: Person[];
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
    return (
        <div className="flex flex-row items-center justify-center -space-x-4 rtl:space-x-reverse">
            {items.map((item) => (
                <div key={item.id} className="group relative">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 rounded-full border-2 border-gray-800 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    />
                    {item.showTooltip && (
                        <div className="absolute -top-12 left-1/2 z-10 hidden -translate-x-1/2 transform whitespace-nowrap rounded-md bg-black px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
                            <div className="font-bold">{item.name}</div>
                            <div className="text-gray-300">{item.designation}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTooltip;
