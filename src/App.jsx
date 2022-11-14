import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import PortofolioPage from './page/PortofolioPage';
import ArticlePage from './page/ArticlePage';
import AboutMe from './page/AboutMe';
import AboutMySkill from './page/AboutMySkill';
import AboutMyCertif from './page/AboutMyCertif';
import NavMobile from './component/NavMobile';



function App() {
  // const ForAbout = ['About', 'My Skill', 'Certificate',]
  const user = {
    name: 'Mohammad Rozakul'
  }

  return (
    <>
      <Navbar />
      <NavMobile />
      <Routes>
        <Route path='/' element={<HomePage name={user.name} />} />
        <Route path='/about' element={<AboutPage />}>
          <Route path='my-skill' element={<AboutMySkill name={user.name} />} />
          <Route path='my-certif' element={<AboutMyCertif name={user.name} />} />
          <Route index element={<AboutMe name={user.name} />} />
        </Route>
        <Route path='/portofolio' element={<PortofolioPage />} />
        <Route path='/article' element={<ArticlePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
