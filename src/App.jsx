import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Stats } from './sections/Stats';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        
        <Header />
        <main>
          <Hero />
          <Features />
          <Stats />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
