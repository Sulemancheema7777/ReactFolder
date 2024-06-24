import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { Home,About,Contact,Github,User } from './components'
import Layout from './Layout'
import { githubInfo } from './components/Github/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route loader={githubInfo} path='github' element={<Github/>}/>
      <Route path='user/:userId' element={<User/>}/>
    </Route> 
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
