

let div=document.createElement('div')
div.className="divP"
document.body.appendChild(div)

let img=document.createElement('img')
img.id="img"
img.src="../תמונות/logo.png"
// img.style.width="300px"
div.appendChild(img)

let h1=document.createElement("h1")
h1.id="h1"
div.appendChild(h1)
h1.innerText="👁️ על המשחק"
let p = document.createElement('p')
p.className="p"
p.id="p"
div.appendChild(p)
p.innerText=" דאבל הוא משחק קלפים עם יותר מ-50 סמלים יש בו 50 קלפים, על כל קלף מופיעים 8 סמלים, ולכל שני קלפים יש סמל אחד משותף! את הסמל הזה עליכם לימצוא במהירות המירבית תוך 15 שניות"

let pass=document.createElement('div')
pass.className="ps"
pass.id="ps"
div.appendChild(pass)

let h2=document.createElement("h1")
h2.id="h2"
div.appendChild(h2)
h2.innerText="🖥️ איך משחקים"

let p1 = document.createElement('p')
p1.className="p"
p1.id="p1"
div.appendChild(p1)
p1.innerText="על המסך יוצגו שני קלפים חפשו את הסמל המשותף באותו הצבע, ובצורה וליחצו עליו במהירות תמיד יהיה סמל אחד משותף לשני הכרטיסים"
let pass1=document.createElement('div')
pass1.className="ps"
pass1.id="ps1"
div.appendChild(pass1)

let h3=document.createElement("h1")
h3.id="h3"
div.appendChild(h3)
h3.innerText="🎯 מטרת המשחק"

let p2 = document.createElement('p')
p2.className="p"
p2.id="p2"
div.appendChild(p2)
p2.innerText="המטרה במשחק היא לזהות את הסמל שנמצא בשני הכרטיסים במהירות הגבוהה ביותר וליצבור כמה שיותר נקודות במינימום זמן. על כל לחיצה נכונה מקבלים 10 נקודות ועל כל לחיצה שגויה יורד נקודה אחת. "

let b=document.createElement("button")
b.id="b"
div.appendChild(b)
b.addEventListener('click', pss)
b.innerText="המשך למשחק"
function pss(){
    event.preventDefault()
    window.location = '../משחק/game.html'
}

