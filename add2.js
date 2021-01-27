let userChoice = prompt('Do you prefer steak or seafood? ');
console.log(userChoice);

if (userChoice == 'steak') {
    document.write('<h3>We recommend checking out Longhorn Steakhouse!</h3>');
} else if (userChoice == 'seafood') {
    document.write('<h3>We recommend checking out Goode Seafood Company!</h3>');
} else {
    document.write('<h3>You do not like steak or seafood? You are crazy.</h3>');
}