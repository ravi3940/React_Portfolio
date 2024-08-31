import React ,{useEffect , useRef} from 'react' ;
import  pdf  from "../pdf/Resume_RaviKumar.pdf";
import hero from  "./data/hero.json";
import Typed from "typed.js";


function Home() {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Ravi Kumar",
        "I'm full stack developer",
        "Androide Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
     <>
     <div className='container home' id ="home">
      <div className='left'
        data-aos = "fade-up-right"
      data-aos-duration="1000"
      >
        <p  style={{fontSize : "30px"}} ref={typedRef}></p>
        
          <a href= {pdf} download= "resume.pdf" className='btn btn-outline-warning my-3'>DownLoad Resume</a>
      </div>
      <div className='right'
        data-aos = "fade-up-left"
        data-aos-duration="1000">
        <div className='img'>
         <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>

     </div>
    </>
  )
}

export default Home