let video = document.createElement('video')
video.id = "video"
video.src = "../תמונות/רקע_מנצחים.mp4"
video.autoplay = true
video.muted = true
video.loop = true
document.body.appendChild(video)
let img = document.createElement('img')
img.src = "../תמונות/מנצחים.png"
img.id = "winImg"
document.body.appendChild(img)
let div1 = document.createElement('div')
div1.className = "div"
div1.id = 'div1'
document.body.appendChild(div1)
let p1 = document.createElement('p')
p1.id = "p1"
p1.className = "pname"
p1.innerText = " "
div1.appendChild(p1)
let p11 = document.createElement('p')
p11.className = 'pscore'
p11.id = "p11"
p11.innerText = "  "
div1.appendChild(p11)
let p111 = document.createElement('p')
p111.className = 'ptime'
p111.id = "p111"
p111.innerText = "  "
div1.appendChild(p111)
let div2 = document.createElement('div')
div2.className = "div"
div2.id = 'div2'
document.body.appendChild(div2)
let p2 = document.createElement('p')
p2.id = "p2"
p2.innerText = " "
p2.className = "pname"
div2.appendChild(p2)
let p22 = document.createElement('p')
p22.className = 'pscore'
p22.id = "p22"
p22.innerText = " "
div2.appendChild(p22)
let p222 = document.createElement('p')
p222.className = 'ptime'
p222.id = "p222"
p222.innerText = " "
div2.appendChild(p222)
let div3 = document.createElement('div')
div3.className = "div"
div3.id = 'div3'
document.body.appendChild(div3)
let p3 = document.createElement('p')
p3.id = "p3"
p3.innerText = " "
p3.className = "pname"
div3.appendChild(p3)
let p33 = document.createElement('p')
p33.className = 'pscore'
p33.innerText = " "
p33.id = "p33"
div3.appendChild(p33)
let p333 = document.createElement('p')
p333.className = 'ptime'
p333.innerText = " "
p333.id = "p333"

div3.appendChild(p333)
let max1 = 0, max2 = 0, max3 = 0;
let allP = JSON.parse(localStorage.getItem('arrplayers'));
for (let i = 0; i < allP.length; i++) {
  debugger
  if (allP[i].Score >= allP[max3].Score) {
    if (allP[i].Score > allP[max1].Score || (allP[i].Score === allP[max1].Score && allP[i].time < allP[max1].time)) {
      max3 = max2;
      max2 = max1;
      max1 = i;
    } else if (allP[i].Score > allP[max2].Score || (allP[i].Score === allP[max2].Score && allP[i].time < allP[max2].time)) {
      max3 = max2;
      max2 = i;
    } else {
      if (i < 3 && allP.length >= 3) {
        max2 = i + 2
        max3 = i + 1
      }
      else
        max3 = i;
    }
  }
  else if (allP[i].Score === allP[max3].Score && allP[i].time < allP[max3].time) {
    max3 = i;
  }

  document.getElementById('p1').innerText = allP[max1].Name;
  document.getElementById('p11').innerText = allP[max1].Score;
  document.getElementById('p111').innerText = "0" + allP[max1].time;
  document.getElementById('p2').innerText = allP[max2].Name;
  document.getElementById('p22').innerText = allP[max2].Score;
  document.getElementById('p222').innerText = "0" + allP[max2].time;
  document.getElementById('p3').innerText = allP[max3].Name;
  document.getElementById('p33').innerText = allP[max3].Score;
  document.getElementById('p333').innerText = "0" + allP[max3].time;
}
