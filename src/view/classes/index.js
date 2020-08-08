import React from 'react'
import ProffyLogo from './../../assets/logo.svg'
import Voltar from './../../assets/icons/back.svg'
import Warning from './../../assets/icons/warning.svg'

import {NavLink} from 'react-router-dom'
import './../component-styles/header.scss'
import './../component-styles/forms.scss'
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

                        <fieldset>
                            <legend>Sobre a aula</legend>
                            <div className='select-block'>
                                <label for='subject'>Matéria</label>
                                <select name='subject' id='subject' required>
                                    <option value=''>Selecione uma opção</option>
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
                            <div className='input-block'>
                                <label for='cost'>Custa da sua hora/aula<small>(R$)</small></label>
                                <input type='cost' id='cost' type='number' required />
                            </div>
                        </fieldset>
                    
                        <fieldset>
                            <legend>Horários disponíveis
                                <button id='add-time'>+ Novo Horário</button>
                            </legend>

                            <div className='shedule-items'>
                                <div className='select-block'>
                                    <label for='weekday'>Dia da semana</label>
                                    <select name='weekday[]' required>
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
                                    <label for='time_from'>Das</label>
                                    <input type='time' name='time_from[]' required />
                                </div>

                                <div className='input-block'>
                                    <label for='time_to'>Até</label>
                                    <input type='time' name='time_to[]' required />
                                </div>
                            </div>

                            <div className='shedule-items'>
                                <div className='select-block'>
                                    <label for='weekday'>Dia da semana</label>
                                    <select name='weekday[]' required>
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
                                    <label for='time_from'>Das</label>
                                    <input type='time' name='time_from[]' required />
                                </div>

                                <div className='input-block'>
                                    <label for='time_to'>Até</label>
                                    <input type='time' name='time_to[]' required />
                                </div>
                            </div>

                            

                            
                        </fieldset>    
                    </form>
                    <footer>
                        <p>
                            <img alt='' src={Warning} alt='aviso-importante' />    
                            Importante!<br/>
                            Preencha todos os dados
                        </p>
                        <button type='submit' from='create-class'>Salvar cadastro</button>   
                    </footer>
                </main>
            </div>
        </div>
       
        
    )
}