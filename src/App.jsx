import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Hours from './components/Hours'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='w-full h-screen overflow-hidden'>
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
      <Hours />
      <Prices />
      <div className='w-full flex-col bg-dark pt-20'>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
