import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Education from './components/Education/Education.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [{
       path : "",
       element : <Home/>
    },
  {
    path : '/About',
    element : <About/>
  },
   { path:'/Skills',
     element : <Skills/>
  },
  {
    path:'/Projects',
    element : <Projects/>
  }, 
  {
    path : '/Education',
    element : <Education/>
  },
  {
       path : '/Contact',
       element : <Contact/>
  }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
