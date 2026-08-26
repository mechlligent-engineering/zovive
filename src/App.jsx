import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Technology from './pages/Technology.jsx'
import About from './pages/About.jsx'
import Collaborate from './pages/Collaborate.jsx'
import Contact from './pages/Contact.jsx'
import ReachUs from './pages/ReachUs.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reach-us" element={<ReachUs />} />
      </Route>
    </Routes>
  )
}

export default App
