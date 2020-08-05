import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/23747927?s=400&u=8b23092773d60fbe9945d6605fe2e1450b9f79d3&v=4" alt="Igor Sasaki"/>
                <div>
                    <strong>Igor Sasaki</strong>
                    <span>Desenvolvedor FullStack</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de programação web avançada. Apaixonado por fazer sistemas web utilizando a omnistack
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 120,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whats"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;