import React from 'react'
import './Home.css'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { useState,useRef , useEffect} from 'react'
import './card.css'

function useParallax(ref, distance) {
  const { scrollYProgress } = useScroll({ target: ref });

  const parallax = {
    x: useTransform(scrollYProgress, [1, 0.1], [-distance, distance]),
    opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0])
  };
  

  return parallax;
}
function useFilter(ref, blur){
  const { scrollYProgress } = useScroll({ target: ref });

  const filter = {
    x: useTransform(scrollYProgress, [0.4, 1], [-blur, blur])
  };
  

  return filter;
}
function useParallaxp(ref, distance) {
  const { scrollYProgress } = useScroll({ target: ref });

  const parallax = {
    x: useTransform(scrollYProgress, [0.3, 1], [-distance, distance]),
    opacity: useTransform(scrollYProgress, [1, 0.5], [1, 0])
  };


  return parallax;
}
function useParallaxf(ref, distance) {
  const { scrollYProgress } = useScroll({ target: ref });

  const parallax = {
    x: useTransform(scrollYProgress, [0, 0.3,0.7, 1], [0,distance, distance,0]),
    opacity: useTransform(scrollYProgress, [0,0.3, 0.7, 1], [0,1, 1, 0])
  };

  return parallax;
}




const Home = () => {
  const videoRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const filter1 = useFilter(ref5, 100);
  const parallax1 = useParallaxf(ref1, 130);
  const parallax2 = useParallax(ref2, 50);
  const parallax3 = useParallaxp(ref3, 50);
  const parallax4 = useParallax(ref4, 50);
  const [animatee, setAnimate] = useState(true);

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 40,
  //   restDelta: 0.001
  // });
  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.playbackRate = -1; // Rewind to the beginning
      video.play(); // Play the video again
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div>
      <motion.div className="hero" >
      <motion.video
      ref={videoRef}
        src="src/assets/cov.mp4"
        autoPlay
        loop
        muted
        style={{width: "100%", height: "100%", objectFit: "cover"}}
    />
    <div className="text-overlay" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <motion.h1
        ref={ref4}
        style={{
          opacity:parallax3.opacity,
          x:parallax4.x,
          
        }}
        initial={{
          x:0
        }}
        transition={{
          duration: 1,
          type: "just"
        }}
        animate={{
          opacity: [0, 0.6, 1]}}>Connecting Brands with Creativity</motion.h1>   
        <motion.p ref={ref3}
          style={{
            opacity:parallax3.opacity,
            x:parallax3.x
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            type: "just"
          }}
          animate={{
           // Use the calculated xValue here
            opacity: [0, 0.6, 1]}}><strong>Welcome to Mediater - Your Gateway to Digital Collaboration!</strong></motion.p>
        <motion.p ref={ref3}
          style={{
            opacity:parallax3.opacity,
            x:parallax3.x
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            type: "just"
          }}
          animate={{
           // Use the calculated xValue here
            opacity: [0, 0.6, 1]
          }}>At Mediater , we redefine collaboration by seamlessly connecting content creators with businesses, fostering a dynamic ecosystem of innovation and creativity. Our platform serves as the catalyst for strategic alliances, unlocking endless possibilities in the digital landscape. Join the revolution, where every collaboration is an opportunity to elevate and innovate.</motion.p>
    </div>
      
      </motion.div>
      
      <motion.div className='hero3' style={{backgroundImage: "url('src/assets/office.jpg')", backgroundSize: "cover" }}>
      <div className="review-t"> Our customers love us! Read what they have to say about their experiences using our platform.</div>
      <motion.div class="card"
        whileInView={{
          x:100,
          opacity:1
        }}
        initial={
          {
            x:0,
            opacity:0
          }
        }
        whileHover={{
          scale:1.2
        }}
        transition={{
          duration:0.1
        }}
      >
  <div class="first-content" >
    <span className="im" style={{display: "inline-block",backgroundImage:"url('src/assets/priyag.jpg')",height:"230px",width:"230px", backgroundSize:"cover"}}></span>
    <span className='rn'>- Prayag_gift_

⭐⭐⭐⭐⭐</span>
  </div>
  <div class="second-content">
<span>"I do Online business through instagram. I haven't really thought of marketing my product since cost is just too high. Since the platform would assist in marketing in a cheap rate by connecting to micro influencer, It would be really helpful. "</span>
  </div>
</motion.div>
<motion.div class="card"
  whileInView={{
    x:100,
    opacity:1
  }}
  initial={
    {
      x:-100,
      opacity:0
    }
  }
  whileHover={{
    scale:1.2
  }}
  transition={{
    duration:0.1
  }}
>
  <div class="first-content" >
    <span className="im" style={{display: "inline-block",backgroundImage:"url('src/assets/visual.jpg')",height:"230px",width:"230px", backgroundSize:"cover"}}></span>
    <span className='rn'>- visualvoyager__

⭐⭐⭐⭐⭐</span>
  </div>
  <div class="second-content">
<span>"We are a group of college students who started the production house - "Visual Voyagers". Currently it's very expensive to rent a high quality camera even for one day. It would be really great if we can monetise our content, even if it's low.</span>
  </div>
</motion.div>
      </motion.div>
      <motion.div className="hero2" style={{backgroundImage: "url('src/assets/connect.jpg')", backgroundSize: "cover"} } >
        <motion.div className="sub1" ref={ref1}
          style={{
            x:parallax1.x,
            opacity:parallax1.opacity
          }}
          initial={{
            opacity: 1,
            x: -50
          }}
          transition={{
            duration: 2,
            type: "spring"
          }}
          animate={{
           // Use the calculated xValue here
            opacity: [0, 0.6, 1]
          }}
        >
          <form className="form">
    
    <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>First Name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input" />
            <span>Last Name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input" />
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="" className="input" />
        <span>Contact Number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="" className="input01"></textarea>
        <span>Message</span>
    </label>
    
    <button className="fancy" href="#">
      <span className="top-key"></span>
      <span className="text">Submit</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
</form>
        </motion.div>
      </motion.div>
      <motion.div className='hero3'>
      <motion.div className="sub6" ref={ref2}
          style={{
            x:parallax2.x,
            opacity:parallax2.opacity
          }}
          initial={{
            opacity: 0,
            x: -50
          }}
          transition={{
            duration: 1,
            type: "just"
          }}
          animate={{
           // Use the calculated xValue here
            opacity: [0, 0.6, 1]
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </motion.div>
      

      </motion.div>
      <div className='footer'></div>
    </div>
  );
};

export default Home;
