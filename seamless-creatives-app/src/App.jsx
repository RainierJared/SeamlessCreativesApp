import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let slideIndex = 0;
//showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for(i = 0; i < slides.length; i++ ){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,2000) //  Changes every 2 seconds
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
        <div className='banner'>
          <div className='content'>
            Seamless Creatives
          </div>
          <div className="overlay"></div>
        </div>
      </body>
    </>
  )
}

export default App
