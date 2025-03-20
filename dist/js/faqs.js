const faqs = [
    {
        question: "¿Cuál es el objetivo de este evento?",
        answer: "Hackathon Emprende Intercentros Utrera es una oportunidad para que los alumnos y alumnas participantes pongan acción a sus ideas, participando como protagonistas en la co-creación de soluciones innovadoras a un reto de una empresa. Esto, además, les permite mostrar su talento a las empresas del entorno."
    },
    {
        question: "¿Con qué metodologías se trabajan?",
        answer: "A lo largo del evento, se trabaja con las metodologías más innovadoras del mundo empresarial, como son el prototipado de ideas, el Design Thinking, la técnica del Elevator Pitch, etc."
    },
    {
        question: "¿Qué empresa propondrá el reto?",
        answer: "El reto será propuesto por una empresa del entorno local basándose en su experiencia empresarial y en los problemas que como empresario/a afronta cada día."
    },
    {
        question: "¿Qué modalidades de participación existen?",
        answer: "Sólo se puede participar de manera presencial."
    },
    {
        question: "¿Cómo se desarrolla el evento?",
        answer: `Los participantes trabajarán en equipos intercentros e interdisciplinares en un espacio
        preparado exclusivamente para esta jornada y serán provistos con todos los materiales y
        herramientas que necesiten para desarrollar sus propuestas.

        El evento comienza con el lanzamiento del reto por parte del empresario/a. A continuación,
        se asigna a cada equipo una zona de trabajo y se les explican las herramientas con las que
        irán dando forma a su propuesta-solución del resto.

        Los mentores de Andalucía Emprende son los encargados de explicar las herramientas y
        estarán a disposición de los participantes para sus consultas.

        A lo largo de la mañana se hará una pausa para tomar un café (media hora). Los
        participantes disfrutarán de café y un catering dulce de manera gratuita gracias a las
        empresas colaboradoras Confitería Diego Vázquez y Cafés Mocaibo.

        El evento concluye con la elección del equipo ganador y la entrega de premios.`
    },
    {
        question: "¿Dónde se celebrará?",
        answer: "Se celebrará en la planta baja de la Biblioteca Municipal de Utrera, sita en C/ Álvarez Quintero, 39."
    },
    {
        question: "¿En qué consisten los premios?",
        answer: "Cada miembro del equipo ganador será premiado con un vale para material escolar valorado en 50 €. Dicho vale se podrán canjear en una papelería de la localidad."
    },
    {
        question: "¿Quién organiza el evento?",
        answer: "El concepto y formato del evento es de Andalucía Emprende. Hackathon Emprende Intercentros Utrera está organizado conjuntamente por el Centro Andaluz de Emprendimiento de Utrera, el Instituto de Enseñanza Secundaria, Bachillerato y Formación Profesional IES Ponce de León y el Excmo. Ayuntamiento de Utrera."
    },
    {
        question: "¿Cuántos alumnos/as debe tener un equipo?",
        answer: "Los equipos tendrán entre 6 y 7 componentes."
    },
    {
        question: "¿Quién forma los equipos?",
        answer: "Los equipos los forma la organización teniendo como criterio principal que estos sean lo más interdisciplinares posible, puesto que esto enriquece las propuestas de solución."
    },
    {
        question: "¿Qué tengo que llevar si asisto presencialmente?",
        answer: "Realmente, sólo necesitas traer ¡muchas ganas de disfrutar! Allí, pondremos a disposición de cada equipo un ordenador portátil, así como todos los materiales que necesitarás para trabajar (folios, rotuladores, etc.). Si quieres traer tu propio dispositivo, por supuesto puedes hacerlo."
    },
    {
        question: "¿Cuándo sabremos el reto que debemos trabajar?",
        answer: "El reto se conocerá el mismo día del evento."
    }
];

const accordion = document.getElementById('accordion');

// Generar dinámicamente las preguntas y respuestas
faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.classList.add('accordion-item bg-sky-50');

    item.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button text-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                ${faq.question}
            </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
            data-bs-parent="#accordion">
            <div class="accordion-body">
                ${faq.answer}
            </div>
        </div>
    `;

    accordion.appendChild(item);
});
