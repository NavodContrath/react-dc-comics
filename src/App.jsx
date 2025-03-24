import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import comics from './components/data/comics'
import menuLinks from "./components/data/links"


function App() {

  return (
    <>
      <Header menuLinks={menuLinks} />
      <Main comics={comics} />
      <Footer />
    </>
  )
}

export default App
