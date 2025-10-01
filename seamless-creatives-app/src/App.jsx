import { useEffect, useState } from 'react'
import './App.css'
import banner1 from '../src/assets/banner-1.jpg'
import banner2 from '../src/assets/banner-2.jpg'
import banner3 from '../src/assets/banner-3.jpg'
import banner4 from '../src/assets/banner-4.jpg'
import closeUp from '../src/assets/ranier-closeup.jpg'
import showSlides from './slide.jsx'

function App() {
  const [count, setCount] = useState(0)
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log('page loaded');
      showSlides();
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      <body>
        <navbar className='navbar'>
          <div>=</div>
          <div>Inquire</div>
        </navbar>

        <div className="slideshow">
            <div className='mySlides fade'>
                <img src={banner1} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
                <div className='overlay'></div>
          </div>
            <div className='mySlides fade'>
                <img src={banner2} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
                <div className='overlay'></div>
          </div>
              <div className='mySlides fade'>
                <img src={banner3} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
                <div className='overlay'></div>
          </div>
              <div className='mySlides fade'>
                <img src={banner4} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
                <div className='overlay'></div>
          </div>
        </div>
        <div className='mainText'>
          <h1>Who are we?</h1>
          <p>Seamless Creatives aims to give you excellent wedding photography in New Zealand and Australia. We strive to create an amazing experience cherished by you and your guests. As a Wedding Photographer, our approach is very personalized. We step back and let you be you. We’re here to capture moments in every aspect of your big day, from the first look to the last dance.</p>
          <p>Seamless Creatives is a responsive, reliable, creative  wedding photographer. We are a group of Wedding Photographers that offers an affordable price. Seamless Creatives are a high-standard wedding photographer. We are using the most modern equipment, lighting, and editing techniques.</p>
        </div>

        <div className='about'>
          <img src={closeUp} alt="Photo of Ranier Manalo"/>
          <div>
            <h1>About Us</h1>
            <p> Hi! I’m Rainier Manalo, a professional photographer and videographer based in Melbourne, Australia. I lead the amazing team of Seamless Creatives. We specialize in wedding, elopement, and engagement photography. We do well in capturing the candor of the moment.</p> 
            <p>I always loved going to weddings. There was something about the joy and love in the air that made me feel warm and fuzzy inside. As I got older, I started to think about what it would be like to capture those moments for other couples. And then, one day, I fell in love with wedding photography. It was an amazing feeling to know that I could help capture some of the happiest moments in someone’s life!</p> 
            <p>I love to capture the candid and natural moments of the wedding.  Back then, capturing the candid, natural, and happiest moments of other couples inspired me to propose to my girlfriend, and now, my wife. The desire to be a professional wedding photographer started when I saw the candid moments of my own wedding. My inspiration came from there. Since then, I’ve captured more than 50 weddings in NZ and Australia, and my passion for this art continues to grow stronger every day. Nowadays you can find me on any given day capturing beautiful elopements or intimate weddings.  I can say that I’m truly blessed to be able to do what I love for a living!</p>
            <p>If you’re interested in having me capture your special day, please feel free to get in touch</p>
          </div>
        </div>

        <div className='gallery'>
          <h1>Gallery</h1>
          <p>WIP :)</p>
        </div>
      </body>
    </>
  )
}



export default App

