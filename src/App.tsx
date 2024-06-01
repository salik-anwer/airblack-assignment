import { Footer } from './components/Footer';
import { GetCertified } from './components/GetCertified';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import { JoinAirblack } from './components/JoinAirBlack';

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <JoinAirblack/>
      <GetCertified/>
      <Footer/>
    </>
  )
}

export default App
