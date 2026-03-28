import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveMap } from './components/InteractiveMap';
import { FeaturedStories } from './components/FeaturedStories';
import { SubmissionMock } from './components/SubmissionMock';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar />
      <Hero />
      <InteractiveMap />
      <FeaturedStories />
      <SubmissionMock />
      <Footer />
    </div>
  );
}

export default App;
