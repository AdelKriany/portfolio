const career = ["Cyber Security", "Open Source", "Frontend Developer", "Game Developer"];
let charIndex=0;
let currentText="";
let careerIndex=0;
let isDeleting=false;


function typestyling(){
    let highlightText=document.getElementById("career")
    let Text=career[careerIndex];

    if(isDeleting){
        currentText=Text.substring(0,charIndex--);
    }
    else{
        currentText=Text.substring(0,charIndex++);
    }
    highlightText.textContent=currentText;


    let speedText=isDeleting ?150:100;

    if(!isDeleting && charIndex===Text.length+1){
        speedText=1500;
        isDeleting=true;
    }

    else if(isDeleting&&charIndex===0){
        isDeleting=false;
        careerIndex=(careerIndex + 1) % career.length;
        speedText=500;
    }
    setTimeout(typestyling,speedText);

}
typestyling();

