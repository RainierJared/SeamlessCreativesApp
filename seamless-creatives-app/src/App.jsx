import { useState } from 'react'
import showSlides from './Slides.jsx'

import './App.css'
import banner1 from '../src/assets/banner-1.jpg'
import banner2 from '../src/assets/banner-2.jpg'
import banner3 from '../src/assets/banner-3.jpg'
import banner4 from '../src/assets/banner-4.jpg'

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
