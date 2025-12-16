let radif = document.querySelectorAll("#eykhoda tr");
let doki = document.getElementById("doki");
let max = 0;
let first = "";
doki.onclick = funy;


function funy(){
    for (let i = 1; i < radif.length; i++) {
        let t_ha = radif[i].querySelectorAll("td");
        if(Number(t_ha[2].innerText) > max){
            max = t_ha[2].innerText;
            first = t_ha[0].innerText;
        }
    }
    alert( first + " ba emtiaz " + max + " bishtarin emtiaz ra darad.");
}


let x = document.getElementById('eykhoda')
let a = document.getElementsByClassName('class')
let y = document.querySelectorAll('#eykhoda tr td')
let xx = x.querySelectorAll('th')

// y.innerText = "loop"

// for(let i=0;i<y.length;i++){
//     y[i].innerText = "salam"
// }



