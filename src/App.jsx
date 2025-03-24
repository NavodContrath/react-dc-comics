import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import comics from './components/data/comics'
import menuLinks from "./components/data/head-links"
import socialLinks from './components/data/foot-links'



function App() {

  return (
    <>
      <Header menuLinks={menuLinks} />
      <Main comics={comics} />
      <Footer socialLinks={socialLinks} />
    </>
  )
}

export default App
