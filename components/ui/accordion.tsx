import React, { createContext, useContext, useState, useRef } from 'react';

// --- Context Setup ---
interface AccordionContextProps {
  activeItem: string | null;
  setActiveItem: (value: string) => void;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an <Accordion> provider.');
  }
  return context;
};

interface AccordionItemContextProps {
    value: string;
}
const AccordionItemContext = createContext<AccordionItemContextProps | undefined>(undefined);

const useAccordionItemContext = () => {
    const context = useContext(AccordionItemContext);
    if(!context) {
        throw new Error('AccordionTrigger and AccordionContent must be used within an <AccordionItem>');
    }
    return context;
}


// --- Main Accordion Component ---
interface AccordionProps {
  children: React.ReactNode;
  type: 'single'; 
  collapsible?: boolean;
  className?: string;
}

// FIX: Changed accordion components to be defined as React.FC.
// This helps TypeScript's type inference to correctly handle props and children,
// resolving incorrect 'property is missing' errors at various call sites.
const Accordion: React.FC<AccordionProps> = ({ children, type, collapsible = false, className }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleSetActiveItem = (value: string) => {
    if (collapsible && activeItem === value) {
      setActiveItem(null);
    } else {
      setActiveItem(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem: handleSetActiveItem, collapsible }}>
      <div className={`w-full ${className || ''}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

// --- Accordion Item ---
interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ children, value, className }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
        <div className={`border-b border-gray-700 ${className || ''}`}>
        {children}
        </div>
    </AccordionItemContext.Provider>
  );
};


// --- Accordion Trigger ---
interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className }) => {
  const { activeItem, setActiveItem } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = activeItem === value;

  return (
    <button
      onClick={() => setActiveItem(value)}
      className={`flex w-full items-center justify-between py-5 text-start text-lg font-medium text-white transition-all hover:text-gray-300 ${className || ''}`}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
    >
      <span>{children}</span>
      <svg
        className={`h-6 w-6 shrink-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  );
};


// --- Accordion Content ---
interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, className }) => {
  const { activeItem } = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isOpen = activeItem === value;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={contentRef}
      role="region"
      id={`accordion-content-${value}`}
      aria-labelledby={`accordion-trigger-${value}`}
      style={{
        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
      }}
      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${className || ''}`}
    >
      <div className="pb-5 pt-0 text-gray-400">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };