import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
        id: 1,
        pergunta: "Vocês são uma ONG transparente e confiável?",
        resposta: "Somos uma ONG de Ocara-CE formada exclusivamente por voluntários. A Amados realiza ações de resgate, castração, tratamento e busca por adoções responsáveis, enfrentando sérias limitações de tempo, estrutura e recursos."
        },
        {
        id: 2,
        pergunta: "Como funciona o processo de adoção?",
        resposta: "O processo de adoção inclui visita ao animal, entrevista com nossa equipe, verificação de compatibilidade e acompanhamento pós-adoção para garantir que tudo esteja funcionando bem."
        },
        {
        id: 3,
        pergunta: "Vocês fazem castração dos animais?",
        resposta: "Sim! Realizamos castração de cães e gatos como parte fundamental do nosso trabalho de controle populacional e bem-estar animal."
        },
        {
        id: 4,
        pergunta: "Como posso ajudar a ONG?",
        resposta: "Você pode ajudar através de doações, voluntariado, divulgação do nosso trabalho, adoção responsável ou fornecendo materiais como ração, medicamentos e produtos de limpeza."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
        <div className="faq-container">
            <h2 className="faq-titulo">Dúvidas Frequentes</h2>
            
            <div className="faq-accordion">
            {faqData.map((item, index) => (
                <div key={item.id} className="faq-item">
                <button 
                    className={`faq-pergunta ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                >
                    <span>{item.pergunta}</span>
                    <span className="faq-arrow"></span>
                </button>
    
                <div className={`faq-resposta ${activeIndex === index ? 'active' : ''}`}>
                    <p>{item.resposta}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default FAQ; 