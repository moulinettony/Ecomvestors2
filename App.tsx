import React, { useState } from 'react';
import Announcement from './components/Announcement';
import HeroSection from './components/HeroSection';
import NewHeroSection from './components/NewHeroSection';
import TheOldWay from './components/TheOldWay';
import MasterProgram from './components/MasterProgram';
import WhosMe from './components/WhosMe';
import Wins from './components/Wins';
import Tickers from './components/Tickers';
import BottomGrid from './components/BottomGrid';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import Question from './components/Question';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        selectedPlan: 'Basic',
        whereDidYouHear: 'INSTAGRAM',
        experienceInEcom: 'NO',
        budgetRange: '1K$ TO 2.5K$',
        termsAccepted: false,
    });

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#181c14] border-y border-green-900">
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
        <FrequentlyAskedQuestions />
        <Question />
        <ContactForm formData={formData} setFormData={setFormData} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
