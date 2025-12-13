import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Resume } from  './components/sections/Resume';

const IntroPage = () => {
  return (
    <>
      <Hero />

      <Projects onBack={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Resume onBack={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </>
  );
};

export default IntroPage;