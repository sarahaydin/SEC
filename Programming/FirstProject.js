function randomGame(){
    let num;
    let counter = 0;
    let timer = setInterval(function(){
        num = Math.random()
        counter++;
        if (num > .75){
            clearInterval(timer);
            console.log(`Number of tries we did is ${counter}`);
        }
    })
}

function countdown(time){
    let timer = setInterval(function(){
        time--;
        if (time<=0){
            clearInterval(timer);
            console.log("DONE");
        }else{
            console.log(time);
        }
    },1000)
}
countdown(4)
randomGame()

