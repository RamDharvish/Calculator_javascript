function buttonclick(value){
    document.getElementsByClassName('screen')[0].value+=value
}

function clearDisplay(){
    document.getElementsByClassName('screen')[0].value=""
}
 
function equalClick(){
    var text= document.getElementsByClassName('screen')[0].value
    var result=eval(text)
    document.getElementsByClassName('screen')[0].value=result
}
