import React from 'react'
import ProffyLogo from './../../assets/logo.svg'
import Voltar from './../../assets/icons/back.svg'
import {NavLink} from 'react-router-dom'
import TeacherItem from './teacherItem'

import './../component-styles/header.scss'
import './styles.scss'

export default function () {
    return (
        <div id='page-study'>
            <div id='container'>
                <header className='page-header'>
                    <div className='top-bar-container'>
                        <NavLink to='/'>
                            <img src={Voltar} alt='Voltar'></img>
                        </NavLink>
                        <img src={ProffyLogo} alt='Proffy'></img>
                    </div>
                    <div className='header-content'>
                        <strong>Esses são os proffys disponíveis</strong>
                        <form id='search-teachers'>
                            <div className='select-block'>
                                <label for='subject'>Matéria</label>
                                <select name='subject' id='subject'>
                                    <option value='0' disabled='' hidden=''>Selecione uma opção</option>
                                    <option value='1'>Artes</option>
                                    <option value='2'>Biologia</option>
                                    <option value='3'>Ciências</option>
                                    <option value='4'>Educação Fisica</option>
                                    <option value='5'>Física</option>
                                    <option value='6'>Geografia</option>
                                    <option value='7'>História</option>
                                    <option value='8'>Matemática</option>
                                    <option value='9'>Português</option>
                                    <option value='10'>Química</option>
                                </select>
                            </div>
                            <div className='select-block'>
                                <label for='weekday'>Dia da semana</label>
                                <select name='weekday' id='weekday'>
                                    <option value='0' disabled='' hidden=''>Selecione uma opção</option>
                                    <option value='1'>Domingo</option>
                                    <option value='2'>Segunda-Feira</option>
                                    <option value='3'>Terça-Feira</option>
                                    <option value='4'>Quarta-Feira</option>
                                    <option value='5'>Quinta-Feira</option>
                                    <option value='6'>Sexta-Feira</option>
                                    <option value='7'>Sábado</option>
                                </select>
                            </div>
                            <div className='input-block'>
                                <label form='time'>Hora</label>
                                <input name='time' id='time' type='time' />
                            </div>
                            <button type='submit'>Filtrar</button>
                        </form>
                    </div>
                </header>
                <main>
                    <TeacherItem 
                        teacherPhotoUrl='https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4'
                        teacherName='Diego Fernandes'
                        teacherArea='Química'
                        teacherDescriptionTitle='Entusiasta das melhores tecnologias de química avançada'
                        teacherDescriptionBody='Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
                        teacherPrice='20,00'
                    />
                    <TeacherItem 
                        teacherPhotoUrl='https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4'
                        teacherName='Diego Fernandes'
                        teacherArea='Química'
                        teacherDescriptionTitle='Entusiasta das melhores tecnologias de química avançada'
                        teacherDescriptionBody='Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.'
                        teacherPrice='20,00'
                    />
                </main>
            </div>
        </div>
       
        
    )
}