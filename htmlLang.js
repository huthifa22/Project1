const question1=document.getElementById("q1Check");
question1.addEventListener("click", q1);

const question2=document.getElementById("q2Check");
question2.addEventListener("click", q2);

const question3=document.getElementById("q3Check");
question3.addEventListener("click", q3);

const question4=document.getElementById("q4Check");
question4.addEventListener("click", q4);

const question5=document.getElementById("q5Check");
question5.addEventListener("click", q5);

const question6=document.getElementById("q6Check");
question6.addEventListener("click", q6);


// Changing the top q_-_ changes the correct answer
function q1(){
    if(document.getElementById("q1-4").checked ==true){

        document.getElementById("incorrect1").className="hide";
        document.getElementById("correct1").className="show";
    }
    else{
        document.getElementById("correct1").className="hide";
        document.getElementById("incorrect1").className="show";
    }
}

function q2(){
    if(document.getElementById("q2-2").checked ==true){

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
    if(document.getElementById("q4-3").checked ==true){

        document.getElementById("incorrect4").className="hide";
        document.getElementById("correct4").className="show";
    }
    else{
        document.getElementById("correct4").className="hide";
        document.getElementById("incorrect4").className="show";
    }
}

function q5(){
    if(document.getElementById("q5-1").checked ==true){

        document.getElementById("incorrect5").className="hide";
        document.getElementById("correct5").className="show";
    }
    else{
        document.getElementById("correct5").className="hide";
        document.getElementById("incorrect5").className="show";
    }
}

function q6(){
    if(document.getElementById("q6-2").checked ==true){

        document.getElementById("incorrect6").className="hide";
        document.getElementById("correct6").className="show";
    }
    else{
        document.getElementById("correct6").className="hide";
        document.getElementById("incorrect6").className="show";
    }
}












