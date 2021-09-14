function horario(){

    const today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();


    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    
    setTimeout(horario, 100);
}

function checar(i){
    if(i < 10){
        i = "0" + i
    };
    return i;
}