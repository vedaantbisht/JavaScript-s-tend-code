let birthMonth = 5;

const fortunes = [
    "You will have a great day!",
    "Something unexpected will happen today.",
    "You will achieve your goals!",
    "A surprise is waiting for you.",
    "Happiness is around the corner.",
    "Today is a good day to try something new.",
    "You will make a new friend soon.",
    "Good news is on the way.",
    "Your hard work will pay off.",
    "Adventure is in your future.",
    "You will find what you're looking for.",
    "Success is in your stars."
];

function printFortune(month){
    if (month < 1 || month > 12){
        console.log("Please enter the valid month (1-12)");
        return;
    }
}
let randomNumber = Math.floor(Math.random() * fortunes.length);
console.log(fortunes[randomNumber]);

printFortune(birthMonth);