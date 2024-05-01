const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const countLabel = document.getElementById('countLabel');
const incrementBtn = document.getElementById('increment')
let count = 0;

incrementBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

