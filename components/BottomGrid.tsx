


import React from 'react';

const CourseCard = () => {
  const features = [
    { 
      name: 'System check',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><g><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0Z"></path></g></svg>,
      active: true
    },
    { 
      name: 'Research',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><g><path d="M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0-16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z"></path></g></svg>,
      active: false
    },
    { 
      name: 'Meta',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><g><path d="M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27a112,112,0,0,0-156.66,137A16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z"></path></g></svg>,
      active: false
    },
    {
      name: 'Strategies',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><g><path d="M168,104H88a40,40,0,0,0-40,40v8a40,40,0,0,0,40,40h80a40,40,0,0,0,40-40v-8A40,40,0,0,0,168,104Zm24,48a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24v-8a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24ZM208,40a32.06,32.06,0,0,0-31,24H79a32,32,0,0,0-63,8v80a72.08,72.08,0,0,0,72,72h80a72.08,72.08,0,0,0,72-72V72A32,32,0,0,0,208,40Zm16,112a56.06,56.06,0,0,1-56,56H88a56.06,56.06,0,0,1-56-56V72a16,16,0,0,1,32,0,8,8,0,0,0,8,8H184a8,8,0,0,0,8-8,16,16,0,0,1,32,0Zm-120-4a12,12,0,1,1-12-12A12,12,0,0,1,104,148Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,148Z"></path></g></svg>,
      active: false
    },
    {
      name: 'Creatives',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><g><path d="M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z"></path></g></svg>,
      active: false
    },
    { 
      name: '& More...',
      icon: null,
      active: true
    },
  ];

  return (
    <div className="border border-gray-800 rounded-3xl p-6 flex flex-col lg:h-[320px] bg-gray-950/50 justify-between">
      <div>
        <h3 className="text-2xl font-medium text-white">The Course</h3>
        <p className="text-white/75 mt-2 leading-snug">Step-by-step strategy, tactics, and templates to build, launch, and scale a real brand.</p>
      </div>
      <div className="flex-grow flex items-center justify-center gap-4 mt-4">
        <div className="w-1/2 h-full flex flex-col items-center justify-center border border-gray-800 rounded-2xl p-4">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border border-purple-500/10 rounded-full"></div>
            <div className="absolute inset-2 border border-purple-500/10 rounded-full"></div>
            <div className="absolute inset-5 border border-purple-500/10 rounded-full"></div>
            <div className="absolute inset-0 animate-radar-scan rounded-full" style={{ background: 'conic-gradient(rgba(45, 143, 161, 0) 315deg, rgba(178, 239, 67, 0.15) 331deg, rgba(178, 239, 67, 0.6) 360deg)' }}></div>
          </div>
          <p className="text-xs mt-2 text-white">Step-by-Step Modules</p>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between p-[5px] border border-gray-800 rounded-[5px]">
            {features.map((feature, index) => (
                <div key={index} className={`border border-gray-800 rounded-md flex items-center p-1 gap-3 ${feature.active ? 'bg-white/5' : ''}`}>
                    <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                      {feature.icon && React.cloneElement(feature.icon, { className: `w-5 h-5 ${feature.active ? 'text-white' : 'text-white/75'}`})}
                    </div>
                    <p className={`text-xs font-medium ${feature.active ? 'text-white' : 'text-white/75'}`}>{feature.name}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ResourceVaultCard = () => (
  <div className="border border-gray-800 rounded-3xl p-6 flex flex-col lg:h-[320px] bg-gray-950/50 justify-between">
    <div>
      <h3 className="text-2xl font-medium text-white">The Resource Vault</h3>
      <p className="text-white/75 mt-2 leading-snug">Tested funnels, automations, ad templates, email flows, everything we actually use inside our brands.</p>
    </div>
    <div className="flex-grow flex items-center justify-center mt-4 border border-gray-800 rounded-2xl p-4">
      {/* Our Solution */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 border border-gray-800 rounded-lg bg-gray-950/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-10 h-10 relative flex justify-center items-center" style={{ filter: 'blur(1px)' }}>
            <div
                className="absolute w-full h-full rounded-full animate-rotate-left"
                style={{
                    background: 'linear-gradient(141deg, rgb(178, 239, 67) 13%, rgba(178, 239, 67, 0) 35.0236%, rgba(164, 92, 219, 0) 64.1724%, rgb(178, 239, 67) 88%)',
                    willChange: 'transform',
                }}
            />
            <div
                className="absolute w-6 h-6 rounded-full animate-rotate-right"
                style={{
                    background: 'linear-gradient(141deg, rgb(178, 239, 67) 13%, rgba(178, 239, 67, 0) 35.0236%, rgba(178, 239, 67, 0) 64.1724%, rgb(178, 239, 67) 88%)',
                    willChange: 'transform',
                }}
            />
          </div>
        </div>
        <p className="text-[10px] mt-2 text-white/90">Our Solution</p>
      </div>

      {/* Connecting Lines */}
      <div className="max-w-[45%] min-w-[45%] w-[45%] flex-grow flex flex-col justify-center items-center gap-2 mt-[-20px]">
        <div className="w-full h-px bg-white/5 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-1/2 animate-ray-one rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(129, 74, 200, 0.1) 0%, rgba(129, 74, 200, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(223, 122, 254, 0.6) 100%)',
              willChange: 'transform',
            }}
          />
        </div>
        <div className="w-full h-px bg-white/5 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-1/2 animate-ray-two rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(129, 74, 200, 0.1) 0%, rgba(129, 74, 200, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(223, 122, 254, 0.6) 100%)',
              willChange: 'transform',
            }}
          />
        </div>
        <div className="w-full h-px bg-white/5 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-1/2 animate-ray-three rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(129, 74, 200, 0.1) 0%, rgba(129, 74, 200, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(223, 122, 254, 0.6) 100%)',
              willChange: 'transform',
            }}
          />
        </div>
      </div>

      {/* Your Sales */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 border border-gray-800 rounded-lg bg-gray-950/80 backdrop-blur-sm flex items-center justify-center">
          <img src="https://framerusercontent.com/images/0gGPo0G2Tn7mkfCvISKT1bdH0.png" alt="Shopify" className="w-10 h-10" />
        </div>
        <p className="text-[10px] mt-2 text-white/90">Your Sales</p>
      </div>
    </div>
  </div>
);


const AiDevelopmentCard = () => {
  const codeLines = [
    "// Before AI",
    "– Spending hours every day scrolling through product research",
    "– Manually analyzing TikTok ads to spot trends",
    "– Segmenting customers in Klaviyo based on gut feeling",
    "– Building content strategies based on what competitors might be doing well",
    "",
    "// After AI",
    "✓ Find winning products in minutes with AI and real-time trends.",
    "✓ Automatically detecting viral TikTok products",
    "✓ Klaviyo segmentation fully optimized by AI",
    "✓ AI generates data-driven content strategies",
    "✓ AI turns competitor research into minutes of insights",
  ];

  return (
    <div className="border border-gray-800 rounded-3xl p-6 flex flex-col lg:h-[320px] bg-gray-950/50 justify-between">
      <div>
        <h3 className="text-2xl font-medium text-white">AI Development</h3>
        <p className="text-white/75 mt-2 leading-snug">Our team builds intelligent automation systems tailored to your business processes.</p>
      </div>
      <div className="flex-grow flex flex-col mt-4 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="flex items-center p-2 bg-white/5 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
        </div>
        <div className="flex flex-grow min-h-0">
          <div className="w-12 bg-white/5 border-r border-gray-800 p-2 flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5 text-white"><g><path d="M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Z"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-5 h-5 text-white/75"><g><path d="M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"></path></g></svg>
          </div>
          <div className="flex-grow relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute inset-0 animate-code-scroll">
              <div className="p-4 text-xs text-white/80 whitespace-pre">
                {[...codeLines, ...codeLines].map((line, index) => (
                  <p key={index} className={line.startsWith('// After') || line.startsWith('✓') ? 'text-[#b2ef43]' : (line.startsWith('//') ? 'text-gray-400' : '')}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const CommunityCard = () => (
  <div className="border border-gray-800 rounded-3xl p-6 flex flex-col lg:h-[320px] bg-gray-950/50 justify-between">
    <div>
      <h3 className="text-2xl font-medium text-white">The Community</h3>
      <p className="text-white/75 mt-2 leading-snug">Private group of eCom operators. No influencers. No fake screenshots. Just results.</p>
    </div>
    <div className="flex-grow flex flex-col items-center justify-center gap-2 mt-4 border border-gray-800 rounded-2xl p-2">
      <div className="w-full flex flex-col gap-2">
        {/* Chatbot system */}
        <div className="flex items-center justify-between p-2 border border-[#222] rounded bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
              <div className="w-4 h-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="text-white w-full h-full">
                  <g><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216Z"></path></g>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-xs text-white"><strong>Built for builders</strong></p>
              <p className="text-xs text-white/75">Share strategies, wins, and numbers.</p>
            </div>
          </div>
          <div className="relative animate-spin-slow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="rgb(178, 239, 67)" className="w-6 h-6">
              <g><path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path></g>
            </svg>
          </div>
        </div>

        {/* Workflow system */}
        <div className="flex items-center justify-between p-2 border border-[#222] rounded bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
              <div className="w-4 h-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="text-white w-full h-full">
                  <g><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></g>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-xs text-white"><strong>Grow together.</strong></p>
              <p className="text-xs text-white/75">Learn from what’s working <em>now</em>.</p>
            </div>
          </div>
          <div className="relative border border-[#222] bg-white/5 rounded w-8 h-8 flex items-center justify-center">
             <div className="animate-jump">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="rgb(178, 239, 67)" className="w-4 h-4"><g><path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path></g></svg>
             </div>
          </div>
        </div>

        {/* Sales system */}
        <div className="flex items-center justify-between p-2 border border-[#222] rounded bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded">
                <div className="w-4 h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="text-white w-full h-full">
                        <g><path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z"></path></g>
                    </svg>
                </div>
              </div>
              <div>
                <p className="font-medium text-xs text-white">Sales system</p>
                <p className="text-[10px] text-white/75">Up to date</p>
              </div>
            </div>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="rgb(178, 239, 67)" className="w-6 h-6">
                <g><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></g>
              </svg>
            </div>
        </div>
      </div>
    </div>
  </div>
);


const BottomGrid: React.FC = () => {
  return (
    <section className="py-10 text-white bg-gray-950">
      <style>{`
                @keyframes radar-scan {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-radar-scan {
                    animation: radar-scan 8s linear infinite;
                }
                
                @keyframes code-scroll {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                .animate-code-scroll {
                    animation: code-scroll 8s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }

                @keyframes rotate-left {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .animate-rotate-left {
                    animation: rotate-left 10s linear infinite;
                }
                @keyframes rotate-right {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-rotate-right {
                    animation: rotate-right 10s linear infinite;
                }
                @keyframes ray-animation {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(200%); }
                }
                .animate-ray-one {
                    animation: ray-animation 3s linear infinite;
                    animation-delay: 0s;
                }
                .animate-ray-two {
                    animation: ray-animation 3s linear infinite;
                    animation-delay: 0.2s;
                }
                .animate-ray-three {
                    animation: ray-animation 3s linear infinite;
                    animation-delay: 0.4s;
                }
                @keyframes jump {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20%); }
                }
                .animate-jump {
                    animation: jump 2s ease-in-out infinite;
                }
            `}</style>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard />
          <ResourceVaultCard />
          <AiDevelopmentCard />
          <CommunityCard />
        </div>
      </div>
    </section>
  );
};

export default BottomGrid;