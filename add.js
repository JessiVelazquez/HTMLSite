function getUserName() {
    let userName = prompt('Please Enter Your Name: ');
console.log(userName);

if (userName == 'Jessi') {
    document.write('<h3>' + 'Hi, ' + userName + ' !' + '</h3>');
} else {
    document.write('<h3>Sorry, your name is not Jessi.</h3>');
    return userName
}
}


function foodChoice() {
    let userChoice = prompt('Do you prefer steak or seafood? ');
console.log(userChoice);

if (userChoice == 'steak') {
    document.write('<h3>We recommend checking out Longhorn Steakhouse!</h3>');
} else if (userChoice == 'Steak') {
    document.write('<h3>We recommend checking out Longhorn Steakhouse!</h3>');
} else if (userChoice == 'seafood') {
    document.write('<h3>We recommend checking out Goode Seafood Company!</h3>');
} else if (userChoice == 'Seafood') {
    document.write('<h3>We recommend checking out Goode Seafood Company!</h3>');
} else if (userChoice == 'yes' || 'Yes') {
    document.write('<h3>You like both! Great! You have a highly developed palette.</h3>');
} else {
    document.write('<h3>You do not like steak or seafood? You are crazy.</h3>');
    return foodChoice
}
}

function printStatement() {
    document.write('<h3>mmmm... look at these lovely restaurants:</h3>')
}

function userHungry() {
    let userAnswer = prompt('Are you hungry? Answer yes or no: ')
    if (userAnswer != 'yes' && userAnswer != 'no' && userAnswer != 'Yes' && userAnswer != 'No'){
        alert('You answered incorrectly!')
    }
    else {
        document.write('<h3>Are you hungry? You answered: ' + userAnswer + '</h3>')
    }
}

function favDessert() {
    let userAnswer = prompt('What is the best dessert? ');
    let correctAnswer = "pie";
    while(userAnswer.toLowerCase() != correctAnswer){
        alert('Nuh uh uh... that is not the best dessert... try again!')
        userAnswer = prompt('What is the best dessert?')
    }
    if(userAnswer.toLowerCase() == correctAnswer){
        document.write('<h3>Correct! Pie is the best dessert.</h3>');
    }
}

function imagesOnScreen(){
    userAnswer = prompt('How many glasses of wine will you drink with dinner?');
    for (let i = 0; i <userAnswer; i++){
        document.write('<img src="https://images.rosendahl.dk/products/480/241/1/4802411/v/4802411/Large/perfection-red-wine-glass-clear-43-cl-1-pcs-perfection-460x460.png">')
    }
}
