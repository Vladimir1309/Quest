let startButton = document.getElementById('startButton');
let getData = document.getElementById('getData');
let context = document.getElementById('context');
let startSpan = document.getElementById('startSpan');
let contButton = document.getElementById('contButton');
let inputNickName = document.getElementById('inputNickName')
let clickTo = document.getElementById ('clickTo');
let button = document.getElementById ("buttonTo");
let sneakySpans = document.getElementById('sneakySpans');
let sneakyNine = document.getElementById('sneakyNine');
let guessButton = document.getElementById('guessButton');
let guessButtonChange = document.getElementById ('guessButtonChange');
let inputChange = document.getElementById ('inputChange');
let h1Loose = document.getElementById('h1Loose');
let h2Buttonh2 = document.getElementById('h2Buttonh2');
let guessMassive = document.getElementById('guessMassive');
let trueMassive = document.getElementById('trueMassive');
let h2GuessMassiveFalse = document.getElementById('h2GuessMassiveFalse');
let h2GuessMassiveTrue = document.getElementById('h2GuessMassiveTrue');
let h2GuessMassiveAttemptsCounter = document.getElementById ('h2GuessMassiveAttemptsCounter');
let h1ButtonEnd = document.getElementById ('h1ButtonEnd');
let h1ClickTo = document.getElementById('h1ClickTo');
let h1SneakySpans = document.getElementById('h1SneakySpans');
let carEnd = document.getElementById('carEnd');
let h2TimerCar = document.getElementById('h2TimerCar');
let divTimerCar = document.getElementById('divTimerCar');
let buttonEnd = document.getElementById('buttonEnd');
let guessMassiveText = document.getElementById('guessMassiveText');

let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');




function addNewClass(teg,className) {
    let arr = teg.classList;
    teg.classList.remove(arr[0]);
    teg.classList.add(className);
};


addNewClass(getData, 'noDisplay');


startButton.addEventListener('click',()=>{
    addNewClass(startSpan, 'noDisplay');
    addNewClass(startButton,'noDisplay');
    addNewClass(getData);
});


addNewClass(clickTo, 'noDisplay');


contButton.addEventListener('click', ()=>{
    addNewClass(getData, 'noDisplay');
    addNewClass(clickTo);

    NickName = inputNickName.value;
    span2.innerText = `Клац, клац... Насколько крепки твои нервы,  ${NickName} :)`;

    button.innerText = 1;

    function buttonIncrease () {
        button.innerText++;
            if (button.innerText === "50") {
                addNewClass(clickTo, 'noDisplay');
                h1ClickTo.innerText = `А ты крепкий орешек, ${NickName}!`;
                addNewClass(h1ClickTo);

                setTimeout(() => {
                    addNewClass(sneakySpans);
                    addNewClass(h1ClickTo, 'noDisplay');
                }, 3000);
            };
    };

    button.addEventListener("click", buttonIncrease);
});


addNewClass(sneakySpans, 'noDisplay');


sneakyNine.addEventListener('click', () => {
    addNewClass(sneakySpans, 'noDisplay');
    h1SneakySpans.innerText = `${NickName} Холмс!`;
    addNewClass (h1SneakySpans);

    setTimeout (() => {
        addNewClass(guessButton);
        addNewClass (h1SneakySpans, 'noDisplay');
    }, 3000);
});


addNewClass(guessButton, 'noDisplay');


guessButtonChange.addEventListener('click', () => {

    randNum = 1 + Math.floor(Math.random() * 2);

    if (Number(inputChange.value) === randNum) {

        addNewClass(guessButton, 'noDisplay');
        h1ButtonEnd.innerText = `А ты везунчик, ${NickName}!`;
        
        setTimeout (() => {
            addNewClass(guessMassive);
            addNewClass(guessMassiveText);
            addNewClass(h1ButtonEnd, 'noDisplay');
        }, 3000);
    } else {
        h1Loose.innerText = `Не повезло, перехожу на главную страницу...`;
        addNewClass(guessButton, 'noDisplay');
                setTimeout(()=>{
                    document.location.reload();
                }, 3000);
    };
});


addNewClass(guessMassive, 'noDisplay');
addNewClass(guessMassiveText, 'noDisplay');


i = 5;

iNull = 0;

h2GuessMassiveAttemptsCounter.innerText = `Осталось попыток: ${i}`;
h2GuessMassiveAttemptsCounter.style.color = "white";

guessMassive.addEventListener ('click', () => {
    i--;
    h2GuessMassiveAttemptsCounter.innerText = `Осталось попыток: ${i}`;
    if (Number(i === iNull)) {
        addNewClass(guessMassive, 'noDisplay');
        addNewClass(guessMassiveText, 'noDisplay');
        h2GuessMassiveFalse.innerText = `Твои попытки закончились, ${NickName}...`
        setTimeout(()=>{
            document.location.reload();
        }, 3000);
    };
});

trueMassive.addEventListener('click', () => {
    addNewClass(guessMassive, 'noDisplay');
    addNewClass(guessMassiveText, 'noDisplay');
    h2GuessMassiveFalse.innerText = `Превосходно, ${NickName}`;
    setTimeout (() => {
        addNewClass(h2GuessMassiveFalse, 'noDisplay');
        addNewClass (car1);
        addNewClass (car2);

        let carArr = ['🚗'];
        let i1 = 0;
        let line1 = document.getElementsByClassName('line1')[0];
        line1.innerText = carArr[0];

        addEventListener('keypress', () => {
                i1++;
                carArr.push('🚗'); 
                carArr[i1-1] = '';
                line1.innerText = carArr;
        });

        h2TimerCar.innerText = `10`;

        let timerCar = setInterval (() => {
            h2TimerCar.innerText = Number(h2TimerCar.innerText) -1;
        
            if (Number(h2TimerCar.innerText) === 0) {
                clearInterval (timerCar);
                divTimerCar.style.display = 'none';
                addNewClass(car1, 'noDisplay');
                addNewClass(car2, 'noDisplay');
                addNewClass(carEnd);
                addNewClass(buttonEnd);

                let audio = new Audio();
                audio.src = 'public/Happy Wheels victory green screen.weba';
                audio.volume = 0.5;
                audio.autoplay = true;
            }
            
        }, 1000)
    }, 3000);
});


addNewClass(car1, 'noDisplay');
addNewClass(car2, 'noDisplay');
addNewClass(carEnd, 'noDisplay');
addNewClass(buttonEnd, 'noDisplay');

buttonEnd.addEventListener ('click', () => {
    document.location.reload();
});