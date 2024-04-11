import './App.css';
import { AnimatedText } from './AnimatedText';


const header = [
  "Degree Programs",
  "We Offer"
]

const headerMobile = [
  "Degree",
  "Programs",
  "We Offer"
]



    
function Headline() {

  return (
    <>
     <div className="hide hero ps-14 pt-64 lg:pt-72 lg:pb-24">
    {header.map((header) => 
       <span className="overflow-hidden fade">
          <AnimatedText
          once
          text={header}
          el="h1"
          className="lg:text-7xl text-6xl font-medium"
        />
      </span>
        
  
)}
</div>
<div className="sm:hidden hero ps-4 pt-36 lg:pt-72">
{headerMobile.map((header) => 
       <span className="overflow-hidden fade">
        <AnimatedText
       once
       text={header}
       el="h1"
       className="text-5xl font-medium"
     />
       </span>
       
 
)}

  </div>
  
    </>
  );

 
}

export default Headline;



