import { useState } from 'react'
import './App.css'
import banner1 from '../src/assets/banner-1.jpg'
import banner2 from '../src/assets/banner-2.jpg'
import banner3 from '../src/assets/banner-3.jpg'
import banner4 from '../src/assets/banner-4.jpg'

function showSlides() {
  let i;
  let slideIndex = 0;
  let slides = document.getElementsByClassName('mySlides');
  if (slides.length > 0) {
    for(i = 0; i < slides.length; i++ ){
      slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,10000) //  Changes every 2 seconds
  }
}



function App() {
  const [count, setCount] = useState(0)
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
                  Seamless Creative
                </div>
          </div>
            <div className='mySlides fade'>
                <img src={banner2} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
          </div>
              <div className='mySlides fade'>
                <img src={banner3} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
          </div>
              <div className='mySlides fade'>
                <img src={banner4} alt="Photo of wedding 1" style={{width:'100%'}}/>
                <div className='content'>
                  Seamless Creatives
                </div>
          </div>
        </div>
        
      </body>
    </>
  )
}
export default App

showSlides()
