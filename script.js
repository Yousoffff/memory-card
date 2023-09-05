let datas = {
    hello:"hi",
    mmd:"m",
    has:"h",
    ff:"ffff"
}
let insertData = function(){
    datas[document.getElementById("key").value] = document.getElementById("value").value;
}
// let showAnswer = function(){
//     for(let i= 0 ; i<datas.length ; i++){
//         document.getElementsByClassName("card")[i].innerHTML = datas[i];
//     }
    
// }

let registerKey = function(){
    let counter = 0;
    for(let i in datas){
        
        document.getElementsByClassName("card")[counter].innerHTML = i;
        document.getElementsByClassName("card")[counter].setAttribute("id",i);
        // document.getElementById("heading").innerHTML = "negar";
        counter++;
        }
}
registerKey();

let showAnswer = function(){
    document.getElementById(event.srcElement.id).innerHTML = datas[event.srcElement.id];
    document.getElementById(event.srcElement.id).style =red;


    // alert(datas[event.srcElement.id])
    
    }

    
    let hideAnswer = function(){
       
            document.getElementById(event.srcElement.id).innerHTML = event.srcElement.id;
    
}




let registerKey1 = function(){
    // let counter = 0;
    // for(let i in datas){
        
        document.getElementById("testcard").innerHTML = "negar";
        document.getElementsByClassName("card__face")[counter].setAttribute("id",i);
        // document.getElementById("heading").innerHTML = "negar";
        // counter++;
        // }
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

registerKey1();

