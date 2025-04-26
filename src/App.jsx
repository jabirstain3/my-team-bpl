import HeroBanner from './components/herobanner/HeroBanner'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <section className='relative w-full'>
        <Navbar />  
        <HeroBanner/>
      {/* <div className="bg-red-100 h-screen"></div> */}
    </section>
  )
}

export default App
