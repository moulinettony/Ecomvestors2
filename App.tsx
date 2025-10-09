import React from 'react';
import Announcement from './components/Announcement';
import HeroSection from './components/HeroSection';
import NewHeroSection from './components/NewHeroSection';
import TheOldWay from './components/TheOldWay';
import MasterProgram from './components/MasterProgram';
import WhosMe from './components/WhosMe';
import Wins from './components/Wins';
import Tickers from './components/Tickers';
import BottomGrid from './components/BottomGrid';
import PricingSection from './components/PricingSection';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import Question from './components/Question';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#181c14] border-y border-blue-950">
      <main className="w-full">
        <Announcement />
        <HeroSection />
        <Tickers />
        <BottomGrid />
        <NewHeroSection />
        <TheOldWay />
        <MasterProgram />
        <WhosMe />
        <Wins />
        <PricingSection />
        <FrequentlyAskedQuestions />
        <Question />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;