const question1=document.getElementById("q1Check");
question1.addEventListener("click", q1);

const question2=document.getElementById("q2Check");
question2.addEventListener("click", q2);

const question3=document.getElementById("q3Check");
question3.addEventListener("click", q3);

const question4=document.getElementById("q4Check");
question4.addEventListener("click", q4);


// Changing the top q_-_ changes the correct answer
function q1(){
    if(document.getElementById("q1-1").checked ==true){

        document.getElementById("incorrect1").className="hide";
        document.getElementById("correct1").className="show";
    }
    else{
        document.getElementById("correct1").className="hide";
        document.getElementById("incorrect1").className="show";
    }
}

function q2(){
    if(document.getElementById("q2-3").checked ==true){

        document.getElementById("incorrect2").className="hide";
        document.getElementById("correct2").className="show";
    }
    else{
        document.getElementById("correct2").className="hide";
        document.getElementById("incorrect2").className="show";
    }
}

function q3(){
    if(document.getElementById("q3-2").checked ==true){

        document.getElementById("incorrect3").className="hide";
        document.getElementById("correct3").className="show";
    }
    else{
        document.getElementById("correct3").className="hide";
        document.getElementById("incorrect3").className="show";
    }
}

function q4(){
    if(document.getElementById("q4-4").checked ==true){

        document.getElementById("incorrect4").className="hide";
        document.getElementById("correct4").className="show";
    }
    else{
        document.getElementById("correct4").className="hide";
        document.getElementById("incorrect4").className="show";
    }
}












