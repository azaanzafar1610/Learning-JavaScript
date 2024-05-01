const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){

    guess = Number(window.prompt(`guess a number between ${minNum} - ${maxNum}`));
    //checking if guess is a number or not
    if (isNaN(guess)){
        window.alert('Enter a number please!!!');
        continue;
    }
    else if (guess<minNum || guess>maxNum){
        window.alert(`range is ${minNum}-${maxNum}!!!`);
        continue;
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert('TOO LOW, try again');
        }
        else if(guess>answer){
            window.alert('TOO HIGH, try again');
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
    
}