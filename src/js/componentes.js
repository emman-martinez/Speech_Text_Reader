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
    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();
        // Add active effect
        box.classList.add('active');
        setTimeout(() => {
            box.classList.remove('active');
        }, 800);

    });
    // @todo - speak event
    main.appendChild(box);
}

data.forEach((item) => createBox(item));

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

// Get Voices
const getVoices = () => {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelect.appendChild(option);
    });
};

// Set text
const setTextMessage = (text) => {
    message.text = text;
};
// Speak text
const speakText = () => {
    speechSynthesis.speak(message);
};
// Set voice
const setVoice = (e) => {
    message.voice = voices.find((voice) => {
        return voice.name === e.target.value;
    });
}; 
/* ************************************************************ */
const eventos = () => {
    console.log('Event Listeners');
    // Voices changed
    speechSynthesis.addEventListener('voiceschanged', getVoices);
    // Toggle text box
    toggleBtn.addEventListener('click', () => {
        document.getElementById('text-box').classList.toggle('show');
    });
    // Close button
    closeBtn.addEventListener('click', () => {
        document.getElementById('text-box').classList.remove('show');
    });
    // Change voice
    voicesSelect.addEventListener('change', setVoice);
    // Read text button
    readBtn.addEventListener('click', () => {
        setTextMessage(textarea.value);
        speakText();
    });

    getVoices();
};
/* ************************************************************ */
const init = () => {
    console.log('Speech Text Reader');
    eventos();
};
/* ************************************************************ */
export {
    init
}