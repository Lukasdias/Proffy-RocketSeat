import React from 'react'
import ProffyLogo from './../../assets/logo.svg'
import Voltar from './../../assets/icons/back.svg'
import {NavLink} from 'react-router-dom'
import './../component-styles/header.scss'
import './styles.scss'

export default function () {
    return (
        <div id='page-classes'>
            <div id='container'>
                <header className='page-header'>
                    <div className='top-bar-container'>
                        <NavLink to='/'>
                            <img src={Voltar} alt='Voltar'></img>
                        </NavLink>
                        <img src={ProffyLogo} alt='Proffy'></img>
                    </div>
                    <div className='header-content'>
                        <strong>Que incrível que você quer dar aulas</strong><br/>
                        <p>O primeiro passo, é preencher esse formulário</p>
                    </div>
                </header>
                <main>
                    <form action='' id='create-class'>
                        <fieldset>
                            <legend>Seus Dados</legend>

                            <div className='input-block'>
                                <label form='name'>Nome completo</label>
                                <input name='name' id='name' required />
                            </div>

                            <div className='input-block'>
                                <label form='avatar'>Link da sua foto<small>(comece com https://)</small></label>
                                <input name='avatar' id='avatar' type='url' required />
                            </div>

                            <div className='input-block'>
                                <label form='whatsapp'>Whatsapp<small>(somente números)</small></label>
                                <input name='whatsapp' id='whatsapp' type='number' required />
                            </div>

                            <div className='textarea-block'>
                                <label form='bio'>Biografia</label>
                                <textarea name='bio' id='bio' required />
                            </div>
                            
                        </fieldset>
                    </form>
                </main>
            </div>
        </div>
       
        
    )
}