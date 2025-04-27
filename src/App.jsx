import { useState } from 'react'
import DisplayPlayer from './components/dispalyplayear/DisplayPlayer'
import HeroBanner from './components/herobanner/HeroBanner'
import Navbar from './components/navbar/Navbar'
import NewsLetter from './components/newsletter/NewsLetter'
import FooterContent from './components/footercontent/FooterContent'

function App() {
  const [coin, setCoin] = useState(0)

  const handleCradit = () => {
    setCoin(coin + 1500000)
    alert('You have received 1500000 free credits')
  }

  const handleDebit = ( price ) => {
    if (coin >= price) {
      setCoin(coin - price)
    } else {
      alert('Insufficient credits')
    }
  }

  return (
    <section className='relative w-full'>
        <Navbar coin={coin}/>  
        <HeroBanner handleCradit={handleCradit}/>
        <DisplayPlayer handleDebit={handleDebit}/>
        <div className="relative max-w-[1180px] h-28 mx-4 md:mx-10 xl:mx-auto mt-12">
          <NewsLetter/>
        </div>
        <FooterContent/>
    </section>
  )
}

export default App
