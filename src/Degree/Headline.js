import './App.css';
import { AnimatedText } from './AnimatedText';



    
function Headline() {

  return (
    <>
    <div className="hide hero ps-14 pt-64 lg:pt-72">
          <AnimatedText
            once
            text="Degree programs"
            el="h1"
            className="lg:text-7xl text-6xl font-medium"
          />
          <AnimatedText
            once
            text="We Offer"
            el="h1"
            className="lg:text-7xl text-6xl font-medium"
          />
    </div>
    <div className="sm:hidden hero ps-4 pt-36 lg:pt-72">
          <AnimatedText
            once
            text="Degree"
            el="h1"
            className="text-5xl font-medium"
          />
          <AnimatedText
            once
            text="Programs"
            el="h1"
            className="text-5xl font-medium"
          />
          <AnimatedText
            once
            text="We Offer"
            el="h1"
            className="text-5xl font-medium"
          />
    </div>
    </>
  );

 
}

export default Headline;



