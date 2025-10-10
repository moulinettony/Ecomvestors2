import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'secondary' | 'default' | 'outline' | 'destructive' | 'ghost' | 'link' | 'special';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';
  shape?: 'pill' | 'round' | 'square';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', size = 'default', shape, className, ...props }) => {
  if (variant === 'special') {
    return (
      <button className={`${className || ''}`} {...props}>
        {children}
      </button>
    );
  }
  
  const baseClasses = [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'transform-gpu transition-transform duration-200 hover:scale-105 active:scale-95',
  ].join(' ');
  
  const variantClasses = {
    default: 'border border-green-500 bg-white font-bold text-green-500 shadow-2xl shadow-green-500/50 hover:bg-green-50 hover:text-green-600 active:bg-green-100',
    secondary: 'border border-white bg-green-700 font-bold text-white shadow-2xl shadow-green-500/50 hover:bg-gray-900 hover:text-green-600 active:bg-green-950 active:text-green-500',
    outline: 'border border-gray-700 bg-transparent hover:bg-gray-800 hover:text-white',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'hover:bg-gray-800 hover:text-white',
    link: 'text-green-500 underline-offset-4 hover:underline',
    green: 'border border-white bg-green-600 font-semibold text-white shadow-2xl shadow-green-500/50 transition-all hover:bg-green-700',
  };

  const sizeClasses = {
    default: 'h-10 px-12 py-2',
    xs: 'h-7 rounded-md px-2',
    sm: 'h-9 rounded-md px-3',
    md: 'h-10 rounded-md px-4',
    lg: 'h-11 rounded-md px-8',
    xl: 'h-12 rounded-md px-16',
    icon: 'size-10',
  };

  const shapeClasses = {
    round: 'rounded-xl',
    pill: 'rounded-full',
    square: 'rounded-none',
  };

  const classes = [
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses],
    sizeClasses[size],
    shape ? shapeClasses[shape] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;