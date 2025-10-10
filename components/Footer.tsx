import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 flex h-auto w-full flex-col flex-wrap items-center justify-center gap-20 border-t border-green-900 bg-[#181c14]  px-20 py-5 text-center md:flex-row">
            {/* Logo and Links */}
            <div className="flex size-auto flex-1 flex-col items-center justify-start gap-10 md:flex-row">
                <a className="flex size-auto items-center justify-start bg-none" href={'/'}>
                    <img
                        src={'https://www.ecomvestors.com/logos/logo-dark.png'}
                        height={24}
                        width={150}
                        alt={'Logo'}
                    />
                </a>
                <div className="w-auto text-sm font-normal leading-snug text-gray-500/75">
                    ©{new Date().getFullYear()} EcomVestors, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;