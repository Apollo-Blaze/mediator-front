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
import cov from './assets/cov.mp4'
import connect from './assets/connect.jpg'
import office from './assets/office.jpg'
import priyag from './assets/priyag.jpg'
import visual from './assets/visual.jpg'
import hall from './assets/hall.jpg'
import m from './assets/M.png'
import vis from './vis';


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
            src={cov}
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
      
      <motion.div className='hero3' style={{backgroundImage: `url(${office})`, backgroundSize: "cover" }}>
      <div className="review-t"> Our customers love us! Read what they have to say about their experiences using our platform.</div>
      <motion.div class="card"
        
      >
  <div class="first-content" >
    <span className="im" style={{display: "inline-block",backgroundImage:`url(${priyag})`,height:"230px",width:"230px", backgroundSize:"cover"}}></span>
    <span className='rn'>- Prayag_gift_

⭐⭐⭐⭐⭐</span>
  </div>
  <div class="second-content">
<span>"I do Online business through instagram. I haven't really thought of marketing my product since cost is just too high. Since the platform would assist in marketing in a cheap rate by connecting to micro influencer, It would be really helpful. "</span>
  </div>
</motion.div>
<motion.div class="card"
  
>
  <div class="first-content" >
    <span className="im" style={{display: "inline-block",backgroundImage:`url(${visual})`,height:"230px",width:"230px", backgroundSize:"cover"}}></span>
    <span className='rn'>- visualvoyager__

⭐⭐⭐⭐⭐</span>
  </div>
  <div class="second-content">
<span>"We are a group of college students who started the production house - "Visual Voyagers". Currently it's very expensive to rent a high quality camera even for one day. It would be really great if we can monetise our content, even if it's low.</span>
  </div>
</motion.div>
      </motion.div>
      <motion.div className="hero2" style={{backgroundImage: `url(${connect})`, backgroundSize: "cover"} } >
        <div className='hero2-content'>
        <motion.div className="sub1" 
        >
          <motion.form className="form"
          ref={ref1}
          initial={{
            opacity:0,
            x: -130
          }}
          animate={{
            opacity:0
          }}
          style={{
            x:parallax1.x,
            opacity:parallax1.opacity
          }}
          
          transition={{
            duration: 2,
            type: "spring"
          }}>
    
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
</motion.form>
        </motion.div>
        <motion.div className="sub2" 
        >
          <h3>Get in touch!</h3>
          <p3>Drop us a message using the form, and we'll get back to you shortly.</p3>
        </motion.div>
        </div>
      </motion.div>
      <motion.div className='hero4'>
      <motion.div className="sub8" ref={ref2}
          transition={{
            duration: 1,
            type: "just"
          }}
          animate={{
           // Use the calculated xValue here
            opacity: [0, 0.6, 1]
          }}
        >
          <motion.div className='sub9'>
          <div class="card1">
            <h2>Vision</h2>
            <p2>Envisioning a future where the boundaries between content creators and businesses dissolve, our app aspires to be the unparalleled hub for dynamic collaboration in the digital realm. We see a landscape where creativity knows no limits, and partnerships transcend traditional boundaries, resulting in a global network of thriving content ecosystems. By pioneering innovation, fostering inclusivity, and driving transformative connections, our vision is to shape the future of online collaboration, where every creator's voice is amplified, and every business finds its ideal collaborator effortlessly.

</p2>
          </div>
          <div class="card1">
            <h2>Mission</h2>
            <p2>Empowering collaboration and innovation, our mission is to seamlessly connect content creators with businesses, fostering meaningful partnerships in the digital landscape. By providing a dynamic platform that facilitates efficient communication, secure transactions, and insightful analytics, we aim to be the catalyst for creativity, growth, and success in the online content creation ecosystem. Our commitment lies in building a vibrant community where creators thrive, businesses prosper, and authentic collaborations flourish.</p2>
          </div>
          </motion.div>
          </motion.div>
          <motion.div className="sub7" style={{backgroundImage: `url(${hall})`, backgroundSize: "cover"}}></motion.div>

      </motion.div>
      <div className='footer'>
        <div className='sub5' style={{height:"100%"}}>
      <span className="logo" style={{backgroundImage: `url(${m})`, backgroundSize: "contain" ,backgroundRepeat: "no-repeat", // Prevent the image from repeating
    backgroundPosition: "center"  }}></span>
    </div>
        <div className='sub4'>
         <p className="quick">Quick Links</p>
          <ul className='social'>
            
            <li className='sites'>
              <a href='https://www.instagram.com/mediaterofficial/' target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className='sites'>
              <a href='https://www.linkedin.com/company/mediater-in/about/?viewAsMember=true' target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className='sites'>
              <a href='https://medium.com/@mediaterofficial' target="_blank" rel="noopener noreferrer">
                Blogs
              </a>
            </li>
            <li className='sites'>
              <a href='https://twitter.com/mediater_' target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className='sub4'>
        <p className="quick">Contact Us</p>
          <ul className='social'>
            
            <li className='sites'>
                Ph:+91 7994076261
            </li>
            <li className='sites'> 
              Email: official@mediater.in
            </li>
            <li className='sites'>
              Address: Karicode, Kollam
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
