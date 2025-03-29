import {  Route, Routes } from "react-router-dom"
import { Home } from "./components/Home.jsx"
import { Skills } from "./components/Skills.jsx"
import { Projects } from "./components/Projects.jsx"
import { Contact } from "./components/Contact.jsx"
import { Layout } from "./components/Layout.jsx"
function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index  element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
