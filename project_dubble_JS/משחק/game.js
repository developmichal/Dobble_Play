let nameGame = document.createElement('p')
nameGame.id = "nameGame"
nameGame.innerText = " 🖐️Game Dobble👀"
document.body.appendChild(nameGame)
let timeGame = 0
let setTime
let countcard = 0
let points = 0
let count1 = 0, c2 = 0, t3 = 0, t4 = 0, count2 = 0;
let picsrc
let t2 = document.createElement('p')
Timer1();
t2.id = "t2"
t2.innerText = '00:00'
document.body.appendChild(t2)

let divButton = document.createElement('div')
divButton.id = "divButton"
document.body.appendChild(divButton)

let bthStop = document.createElement('button')
bthStop.className = "button"
bthStop.id = "bthStop"
bthStop.addEventListener('click', stop)
divButton.appendChild(bthStop)
bthStop.style.backgroundImage = "url(../תמונות/השהיה.png)"
bthStop.title = "השהה"
bthStop.style.backgroundColor = "white"
bthStop.style.backgroundSize = "cover"

let bthStopAudio = document.createElement('button')
bthStopAudio.className = "button"
bthStopAudio.id = "bthStopAudio"
bthStopAudio.addEventListener('click', stopAudio)
divButton.appendChild(bthStopAudio)
bthStopAudio.style.backgroundImage = "url(../תמונות/הפעל.png)"
bthStopAudio.style.backgroundColor = "white"
bthStopAudio.style.backgroundSize = "cover"
bthStopAudio.title = "ללא שמע"

let choice = document.createElement('button')
choice.className = "choice"
choice.id = "choice"
choice.innerText = "שינוי סמלים"
document.body.appendChild(choice)
choice.addEventListener('click', Choice)

let divchoice = document.createElement("div")
divchoice.id = "divchoice"
document.body.appendChild(divchoice)

let g1 = document.createElement('button')
g1.className = "game"
g1.id = "g1"
divchoice.appendChild(g1)
g1.style.backgroundImage = "url(../תמונות/imugy.jpg)"
g1.title = "אימוג'י"
g1.style.backgroundSize = "cover"
g1.setAttribute('data-src', "pic1")
g1.setAttribute('data-type', "webp")
g1.addEventListener('click', pic)
g1.addEventListener('blur', close)

let g2 = document.createElement('button')
g2.className = "game"
g2.id = "g2"
divchoice.appendChild(g2)
g2.style.backgroundImage = "url(../תמונות/tut.jpg)"
g2.title = "פרות וירקות"
g2.style.backgroundSize = "cover"
g2.setAttribute('data-src', "pic2")
g2.setAttribute('data-type', "png")
g2.addEventListener('click', pic)
g2.addEventListener('blur', close)

let g3 = document.createElement('button')
g3.className = "game"
g3.id = "g3"
divchoice.appendChild(g3)
g3.style.backgroundImage = "url(../תמונות/disney.jpg)"
g3.title = "דיסני"
g3.style.backgroundSize = "cover"
g3.setAttribute('data-src', "pic3")
g3.setAttribute('data-type', "png")
g3.addEventListener('click', pic)
g3.addEventListener('blur', close)

function pic() {
    picsrc = event.currentTarget.getAttribute('data-src')
    pictype = event.currentTarget.getAttribute('data-type')
    let k = localStorage.getItem('id')
    n = JSON.parse(localStorage.getItem(k))
    n.src = picsrc
    n.type = pictype
    localStorage.setItem(k, JSON.stringify(n));
    document.getElementById('t').remove()
    document.getElementById('score').remove()
    document.getElementById('div1').remove()
    document.getElementById('div2').remove()
    countcard--;
    startGame()
    resetCards(); // להפעיל את הפונקציה לאחר סיום השלב
}

function close() {
    document.getElementById('divchoice').style.display = "none"
    c2 = 0
}

function startGame() {
    if (countcard == 25) {
        clearInterval(timeGame)
        timeGame = document.getElementById('t2').innerText;
        document.getElementById('t2').remove()
        let allP = JSON.parse(localStorage.getItem('arrplayers'));
        let id = localStorage.getItem('id');
        for (let index = 0; index < allP.length; index++) {
            if (allP[index].id == id) {
                if (allP[index].Score < points) {
                    allP[index].time = timeGame;
                    allP[index].Score = points;
                    let userDataJson = localStorage.getItem(id);
                    let userData = JSON.parse(userDataJson); // המרת נתוני המשתמש לאובייקט
                    userData.Score = points; // עדכון הנקודות של המשתמש בהתאם ל־points
                    userData.time = timeGame; // -עדכון הזמן של המשתמש בהתאם לtime
                    localStorage.setItem(id, JSON.stringify(userData)); // עדכון נתוני המשתמש ב־localStorage
                    localStorage.setItem('arrplayers', JSON.stringify(allP)); // שמירת allP ב־localStorage
                }
                else if (allP[index].Score == points && allP[index].time > timeGame) {
                    allP[index].Score = points;
                    allP[index].time = timeGame;
                    let userDataJson = localStorage.getItem(id);
                    let userData = JSON.parse(userDataJson);
                    userData.Score = points;
                    userData.time = timeGame;
                    localStorage.setItem(id, JSON.stringify(userData));
                    localStorage.setItem('arrplayers', JSON.stringify(allP));
                }
                break; // סיום לולאת החיפוש, כי מצאנו את המשתמש
            }
        }
        clearInterval(timer)
        clearInterval(setTime)
        finish()
        return
    }
    countcard++
    clearInterval(timer)
    clearInterval(setTime)
    let p = document.createElement('p')
    p.id = "t"
    Timer();
    p.innerText = '00:15'
    document.body.appendChild(p)
    let p1 = document.createElement('p')
    p1.id = "score"
    p1.innerText = 'Score : ' + points
    document.body.appendChild(p1)
    let div = document.createElement('div')
    div.className = "div"
    div.id = "div"
    document.body.appendChild(div)
    let divm1 = document.createElement('div');
    let divm2 = document.createElement('div');
    divm1.className = "divm";
    divm2.className = "divm";
    divm1.id = "divm1";
    divm2.id = "divm2";
    div.appendChild(divm1);
    div.appendChild(divm2);
    let logo1 = document.createElement('div');
    logo1.className = "logo";
    divm1.appendChild(logo1);
    let logo2 = document.createElement('div');
    logo2.className = "logo";
    divm2.appendChild(logo2);
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.className = "circle";
    div2.className = "circle";
    div1.id = "div1";
    div2.id = "div2";
    divm1.appendChild(div1);
    divm2.appendChild(div2);
    let counter = new Array(30);
    let card1 = new Array(8);
    let card2 = new Array(8);
    for (let i = 0; i < counter.length; i++) {
        counter[i] = 0;
    }
    let k = 0
    while (k < card1.length) {
        let r1 = Math.floor(Math.random() * 30 + 1)
        if (counter[r1] == 0) {
            card1[k++] = r1
            counter[r1]++;
        }
    }
    let r2 = Math.floor(Math.random() * 8)
    let place = Math.floor(Math.random() * 8)
    card2[place] = card1[r2]
    let num = card1[r2]
    k = 0
    while (k < card2.length) {
        r2 = Math.floor(Math.random() * 30 + 1)
        if (counter[r2] == 0) {
            if (place != k) {
                card2[k++] = r2
                counter[r2]++;
            }
            else
                k++
        }
    }
    let counterSize1 = [0, 0, 0, 0, 0, 0, 0, 0]
    let counterSize2 = [0, 0, 0, 0, 0, 0, 0, 0]
    let img1;
    k = 1
    let n
    if(localStorage.getItem('id').charAt(0)=='0')
        n =localStorage.getItem('id')
    else
      n = JSON.parse(localStorage.getItem('id'))
    let pic1 = JSON.parse(localStorage.getItem(n)).src
    let type = JSON.parse(localStorage.getItem(n)).type
    for (let i = 0; i < card1.length; i++) {
        let img = document.createElement('img')
        img.src = '../תמונות למשחק/' + pic1 + '/(' + card1[i] + ').' + type + ''
        img.id = 'c' + k++
        img.className = "imgim"
        img.addEventListener('click', check)
        img1 = document.createElement('img')

        img1.src = '../תמונות למשחק/' + pic1 + '/(' + card2[i] + ').' + type + ''
        img1.id = 'c' + k++
        img1.className = "imgim"
        img1.addEventListener('click', check)
        if (card1[i] == num)
            img.setAttribute('data-good', img.id)
        if (card2[i] == num)
            img1.setAttribute('data-good', img1.id)
        div2.appendChild(img1)
        div1.appendChild(img)
    }
    setTime = setTimeout(
        () => {
            document.getElementById('t').remove()
            document.getElementById('score').remove()
            document.getElementById('div1').remove()
            document.getElementById('div2').remove()
            let audio1 = document.createElement('audio')
            audio1.src = "../תמונות/הפסד.WAV"
            if (count1 == 0)
                audio1.play()
            else
                audio1.pause()
            document.body.appendChild(audio1)
            startGame()
            resetCards(); // להפעיל את הפונקציה לאחר סיום השלב
        }, 16000
    )
}
function check() {
    let s = event.currentTarget.id
    let g = event.currentTarget.getAttribute('data-good')
    if (s == g) {
        let audio = document.createElement('audio')
        audio.src = "../תמונות/ניצחון.mp3"
        if (count1 == 0)
            audio.play()
        else
            audio.pause()
        document.body.appendChild(audio)
        points += 10
        document.getElementById('t').remove()
        document.getElementById('score').remove()
        document.getElementById('div1').remove()
        document.getElementById('div2').remove()
        startGame()
        resetCards(); // להפעיל את הפונקציה לאחר סיום השלב
    }
    else {
        points -= 1
        document.getElementById('score').remove()
        let p1 = document.createElement('p')
        p1.id = "score"
        p1.innerText = 'Score : ' + points
        document.body.appendChild(p1)
    }
}
let timer
function Timer() {
    //הפעלת טיימר
    let d = new Date()
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(15)
    // setInterval - פונקציה המקבלת 2 ערכים:
    //1. פעולה לביצוע
    //2. כל כמה זמן - במיליסקונט - אלפית השניה
    timer = setInterval(
        () => {
            //נחסר את משתנה השעה בשניה
            d.setSeconds(d.getSeconds() - 1)
            //הצגה על המסך
            document.getElementById('t').innerText = d.getMinutes() + "0:" + d.getSeconds()
        },
        1000
    );
}
function Timer1() {
    let d1 = new Date()
    d1.setHours(0)
    d1.setMinutes(t4)
    d1.setSeconds(t3)
    timeGame = setInterval(
        () => {
            d1.setSeconds(d1.getSeconds() + 1)
            document.getElementById('t2').innerText = d1.getMinutes() + ":" + d1.getSeconds()
        },
        1000
    );
}

function stop() {
    if (count2 == 0) {
        clearInterval(timer)
        clearInterval(setTime)
        clearInterval(timeGame)
        count2++;
        document.getElementById("bthStop").style.backgroundImage = "url(../תמונות/הפעלה.png)"
        document.getElementById("bthStop").title = "הפעל"
        document.getElementById('div1').style.display = "none"
        document.getElementById('div2').style.display = "none"
    }
    else {
        document.getElementById('div1').style.display = "grid"
        document.getElementById('div2').style.display = "grid"
        let temp = document.getElementById('t2').innerText
        if (temp.length <= 4) {
            t3 = temp.substring(2)
            t4 = temp.substring(0, 1)
        }
        else {
            t3 = temp.substring(3)
            t4 = temp.substring(0, 2)
        }
        count2 = 0;
        document.getElementById('t').remove()
        let p = document.createElement('p')
        p.id = "t"
        p.innerText = '00:15'
        document.body.appendChild(p)
        Timer();
        Timer1();
        setTime = setTimeout(
            () => {
                document.getElementById('t').remove()
                document.getElementById('score').remove()
                document.getElementById('div1').remove()
                document.getElementById('div2').remove()
                let audio1 = document.createElement('audio')
                audio1.src = "../תמונות/הפסד.WAV"
                if (count1 == 0)
                    audio1.play()
                else
                    audio1.pause()
                document.body.appendChild(audio1)
                startGame()
            }, 16000
        )
        document.getElementById("bthStop").style.backgroundImage = "url(../תמונות/השהיה.png)"
        document.getElementById("bthStop").title = "השהה"

    }

}
function stopAudio() {
    if (count1 == 0) {
        count1 = 1;
        document.getElementById("bthStopAudio").style.backgroundImage = "url(../תמונות/השתק.png)"
        document.getElementById("bthStopAudio").title = "שמע"
    }
    else {
        count1 = 0
        document.getElementById("bthStopAudio").style.backgroundImage = "url(../תמונות/הפעל.png)"
        document.getElementById("bthStopAudio").title = "ללא שמע"
    }
}

function finish() {
    const choiceDiv = document.createElement('div');
    choiceDiv.id = 'choice';
    document.body.appendChild(choiceDiv);
    choiceDiv.className = 'modalbg';

    const dialogDiv = document.createElement('div');
    dialogDiv.className = 'dialog';
    choiceDiv.appendChild(dialogDiv);

    const pJump = document.createElement('p');
    pJump.innerText = "its very good!!";
    pJump.id = "pJump";
    dialogDiv.appendChild(pJump);

    const p1Jump = document.createElement('p');
    p1Jump.innerText = "👏❤️✌️❤️👌";
    p1Jump.id = "p1Jump";
    dialogDiv.appendChild(p1Jump);

    const a1 = document.createElement('a');
    a1.id = "a1";
    dialogDiv.appendChild(a1);
    const bt1 = document.createElement('button');
    bt1.className = "bth";
    bt1.id = "bt1";
    bt1.innerText = "newPlay";
    a1.href = "./game.html";
    a1.appendChild(bt1);

    const a2 = document.createElement('a');
    a2.id = "a2";
    dialogDiv.appendChild(a2);
    const bt2 = document.createElement('button');
    bt2.className = "bth";
    bt2.id = "bt2";
    bt2.innerText = "winPage";
    a2.href = "../מנצחים/Record Page.html";
    a2.appendChild(bt2);

    const audio = document.createElement('audio');
    audio.src = "../תמונות/כפיים.mp3";
    if (count1 == 0)
        audio.play()
    else
        audio.pause()
    dialogDiv.appendChild(audio);

    choiceDiv.style.animation = 'slideDown 1s forwards';

}

function Choice() {
    if (c2 == 0) {
        document.getElementById('divchoice').style.display = "grid"
        c2++;
    }
    else {
        c2 = 0
        document.getElementById('divchoice').style.display = "none"
    }

}
function resetCards() {
    var cardElements = document.querySelectorAll('.divm');
    // להוסיף את הקלאס 'flipped' שוב לאחר מספר שניות
    setTimeout(function () {
        cardElements.forEach(function (cardElement) {
            cardElement.classList.add('flipped');
        });
    }, 10);
}

// הוספת סיבוב הקלף
setTimeout(function () {
    var cardElement1 = document.getElementsByClassName('divm')[1];
    var cardElement2 = document.getElementsByClassName('divm')[0];
    cardElement1.classList.add('flipped');
    cardElement2.classList.add('flipped');
}, 100); // Flip the div after 2 seconds