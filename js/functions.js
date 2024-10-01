
let rand_num1 = 0
let rand_num2 = 0
let correct = 0
let wrong = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}
const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}
addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});
document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        correct = correct + 1
    } else {
        alert('Incorrect!')
        wrong = wrong + 1
    }
    document.querySelector('#correct').innerHTML = correct
    document.querySelector('#wrong').innerHTML = wrong
    randomizeNumbers()
    document.querySelector('input').value=''
})