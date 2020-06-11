import './../css/componentes.css';
/* DOM */
const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
      image: './assets/img/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './assets/img/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './assets/img/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './assets/img/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './assets/img/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './assets/img/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './assets/img/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './assets/img/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './assets/img/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './assets/img/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './assets/img/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './assets/img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
  ];

// Create speech boxes
const createBox = (item) => {
    const box = document.createElement('div');
    const { image, text } = item;
    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}"/>
        <p class="info">${text}</p>
    `;
    // @todo - speak event
    main.appendChild(box);
}

data.forEach((item) => createBox(item));


/* ************************************************************ */
const eventos = () => {
    console.log('Event Listeners');
};
/* ************************************************************ */
const init = () => {
    console.log('Speech Text Reader');
};
/* ************************************************************ */
export {
    init
}