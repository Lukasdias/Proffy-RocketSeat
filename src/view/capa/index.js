import React from 'react'
import ProffyLogo from './../../assets/logo.svg'
import ProffyLanding from './../../assets/landing.svg'
import BtnStudy from './../../assets/icons/study.svg'
import BtnClasses from './../../assets/icons/give-classes.svg'
import PurpleHeart from './../../assets/icons/purple-heart.svg'
import {NavLink} from 'react-router-dom'

import './styles.scss'
export default function () {
    return (
        <div id='page-landing'>
            <div id='container'>
                <div className='logo-container'>
                    <img src={ProffyLogo} alt='Proffy' />
                    <h2>Sua plataforma e estudos online</h2>
                </div>

                <img className='hero-image' src={ProffyLanding} alt='Plataforma de Estudos' /> 
                
                <div className='buttons-container'>
                    <NavLink className='study' to='/page-study'>
                        <img src={BtnStudy} alt='Estudar' />
                        Estudar
                    </NavLink>
                    <NavLink className='give-classes' to='/page-classes'>
                        <img src={BtnClasses} alt='Dar aulas' />
                        Dar aulas
                    </NavLink>
                </div>
            
                <p className='total-connections'>Total de 200 conexões já realizadas 
                    <img src={PurpleHeart} alt='Coração Roxo'></img>
                </p>
            </div>
        </div>
       
        
    )
}