import React from 'react'
import ZapIcon from './../../assets/icons/whatsapp.svg'
export default function (props) {
    return  (
        <>
            <article className="teacher-item">
                <header>
                    <img 
                        src={props.teacherPhotoUrl} 
                        alt={props.teacherName} 
                    />
                    <div>
                        <strong>{props.teacherName} </strong>
                        <span>{props.teacherArea}</span>
                    </div>
                </header>

                <p>{props.teacherDescriptionTitle}<br/>{props.teacherDescriptionBody}</p>

                <footer>
                    <p>Preço/hora<strong>R$ {props.teacherPrice}</strong></p>
                    <button type="button">
                        <img 
                            src={ZapIcon}
                            alt="Whatsapp" 
                        />
                        Entrar em contato
                    </button>
                </footer>
            </article>
        </>
    )    
}