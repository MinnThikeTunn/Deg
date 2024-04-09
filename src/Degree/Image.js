import './App.css';
import { useInView,motion,AnimatePresence } from "framer-motion";
import { useRef } from "react";
import image from 'C:/Degree/degree/src/Degree/deg.jpg';

function Image() {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.8,once: true});


  return (
    <center>
        <div className="sm:hidden image-section gap-2.5">
        
        <div style={{ 
          width: "100%",
          opacity: 1,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className="gap-2.5 image-container" ref={ref} >
       
       <img src={image} className=" image inline-block " />

    

  </div>
        </div>

        <div className="hide image-section gap-2.5">
        
        <div style={{ 
          width: isInView ? "100%" : 0,
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }} className="gap-2.5 image-container" ref={ref} >
       
       <img src={image} className=" image inline-block " />

    

  </div>
        </div>
        
    </center>
    
    
     
  );
}

export default Image;