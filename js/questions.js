function GetAndResult(event){
    var pregunta1=document.getElementsByName("preg1");
    var pregunta2=document.getElementsByName("preg2");
    var pregunta3=document.getElementsByName("preg3");
    var pregunta4=document.getElementsByName("preg4");
    var pregunta5=document.getElementsByName("preg5");
    var questions=[pregunta1,pregunta2,pregunta3,pregunta4,pregunta5];
    var message="";
    var cont=0;
    for(i=0; i<questions.length; i++){
        for (j=0; j<questions[i].length; j++){
            if (questions[i][j].checked){
                if (i===0){
                    if (questions[i][j].value==="3"){
                        message=message+"Pregunta 1 correcta,"
                    }else{
                        message=message+"Pregunta 1 incorrecta,";
                    }
                }
                if (i===1){
                    if (questions[i][j].value==="1"){
                        message=message+"Pregunta 2 correcta,<br>"
                    }else{
                        message=message+"Pregunta 2 incorrecta,<br>";
                    }
                }
                if (i===2){
                    if (questions[i][j].value==="2"){
                        message=message+"Pregunta 3 correcta,"
                    }else{
                        message=message+"Pregunta 3 incorrecta,";
                    }
                }
                if (i===3){
                    if (questions[i][j].value==="1"){
                        message=message+"Pregunta 4 correcta,<br>"
                    }else{
                        message=message+"Pregunta 4 incorrecta,<br>";
                    }
                }
                if (i===4){
                    if (questions[i][j].value==="1"){
                        message=message+"Pregunta 5 correcta,"
                    }else{
                        message=message+"Pregunta 5 incorrecta,";
                    }
                }
                
            }else{
                if(cont===0){
                    alert("Debes responder todas las preguntas")
                    cont++;
                    location.reload();
                }
            }
        }
    }
    InnerHtmlMessage(message);
    
}
function InnerHtmlMessage(message){
    var result=document.getElementById("result");
    result.innerHTML=`${message}`;
}