let datas = {
    hello:"hi",
    mmd:"m",
    has:"h"
}
let insertData = function(){
    datas[document.getElementById("key").value] = document.getElementById("value").value;
}
// let showAnswer = function(){
//     for(let i= 0 ; i<datas.length ; i++){
//         document.getElementsByClassName("card")[i].innerHTML = datas[i];
//     }
    
// }
let showAnswer = function(){
for(let i in datas){
    document.getElementById("card1").innerHTML = datas.hello;
}
}

    
    let hideAnswer = function(){
        for(let i in datas){
        document.getElementById("card1").innerHTML = toString(i);
    }
}


