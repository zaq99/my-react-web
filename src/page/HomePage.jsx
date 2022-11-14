import FotoProfil from '../assets/Mohammad-Rozakul.png';
import { useState } from 'react';
import 'animate.css';
import './../CSS/HomePage.css'

const HomePage = ({ name }) => {


    return (
        <>
            <div className='container d-flex align-items-center justify-content-around p-5 home'>
                <img className='animate__animated animate__fadeInLeft fotoHome' src={FotoProfil} alt="Mohammad Rozakul" height={'400'} />
                <div className='d-flex flex-column animate__animated animate__fadeInRight'>
                    <h3>Hi There, I'm</h3>
                    <h1 className='fw-semibold'>{name}</h1>
                    <p>I'm a passionate <span className='fw-bold'>Frontend Developer</span> from Indonesia</p>
                </div>
            </div>
        </>
    )
}

export default HomePage