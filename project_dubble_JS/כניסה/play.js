function save() {
    let newName = document.getElementsByTagName("input")[0].value;
    let newId = document.getElementsByTagName("input")[1].value;
    var idPattern = /^\d{9}$/; // פטרן לבדיקת 9 ספרות
    var onlyNumbers = /^[0-9]+$/; // פטרן לבדיקת מספרים בלבד
    var onlyLetters = /^[A-Za-z א-ת' ']+$/; // פטרן לבדיקת אותיות באנגלית ובעברית
    if (idPattern.test(newId) && onlyNumbers.test(newId) && onlyLetters.test(newName)) {
        localStorage.setItem('id', newId)
        if (newName != "" && newId != "") {
            let temp = localStorage.getItem(newId);
            if (temp != null) {
                temp = JSON.parse(temp).Name
                if (temp == newName) {
                    event.preventDefault()
                    window.location = '../הוראות/Instructions.html'
                }
                else if (temp != newName) {
                    alert(" פרטים שגויים⚠")
                }
            }
            else {
                let name = document.getElementsByTagName("input")[0].value;
                let id = document.getElementsByTagName("input")[1].value;
                let newPlay = {
                    id: id,
                    Name: name,
                    Score: 0,
                    time: 0,
                    src: 'pic1',
                    type: 'webp',
                }
                let pJson = JSON.stringify(newPlay)
                // שמירת משתמשים עי אידקס
                localStorage.setItem(id, pJson)
                // localStorage.setItem('count', ++cPlay)
                // שמירת משתמשים במערך
                let players;
                if (localStorage.getItem('arrplayers') == null)
                    players = []
                else
                    players = JSON.parse(localStorage.getItem('arrplayers'))
                //הכנסת הערך החדש
                //    push - הכנסת ערכים למערך
                players.push(newPlay)
                //שמירת במחסנית
                event.preventDefault()
                localStorage.setItem('arrplayers', JSON.stringify(players))
                window.location = '../הוראות/Instructions.html'
            }
        }

    }
}