import { useState } from 'react'
import DisplayPlayer from './components/dispalyplayear/DisplayPlayer'
import HeroBanner from './components/herobanner/HeroBanner'
import Navbar from './components/navbar/Navbar'
import NewsLetter from './components/newsletter/NewsLetter'
import FooterContent from './components/footercontent/FooterContent'
import { Bounce, toast, ToastContainer } from 'react-toastify'

function App() {
  const [coin, setCoin] = useState(0);

  const showToast = ( type, message) => {
    const design ={ position: "bottom-right", autoClose: 3000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,};

    if (type === 'success') {
      toast.success(message, design);
    }
    else if (type === 'warn') {
      toast.warn(message, design);
    }
    else if (type === 'error') {
      toast.error(message, design);
    }
  }

  const handleCradit = () => {
    setCoin(coin + 1500000);
    showToast('success', 'You have received 1500000 credits');

  }

  const handleDebit = ( price ) => {
    if (coin >= price) {
      setCoin(coin - price);
      return true;
    } else {
      showToast( 'error', 'Insufficient credits');
      return false;
    }
  }

  return (
    <section className='relative w-full'>
        <Navbar coin={coin}/>  
        <HeroBanner handleCradit={handleCradit}/>
        <DisplayPlayer handleDebit={handleDebit} showToast={showToast}/>
        <div className="relative max-w-[1180px] h-28 mx-4 md:mx-10 xl:mx-auto mt-12">
          <NewsLetter/>
        </div>
        <FooterContent/>
        <ToastContainer position="bottom-right" autoClose={3000} limit={4} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce} />
    </section>
  )
}

export default App
