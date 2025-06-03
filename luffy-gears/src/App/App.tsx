
import './App.css'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'

function App() {
   return (<main>
      <div className='min-h-screen bg-gradient-to-b from-gear-400 to-gear-50 text-white'> 
      <NavBar/>
      <Hero/>
      <Content/>
      <Footer/>
      </div>
   </main>)
}

export default App
