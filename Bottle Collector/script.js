console.log('Hello World!');

// 2 inputs
/*
function bottleCollector(dailyExpenses, dailyExpedition) {

}
*/


const inputString = "8 ABMRB 24.50";

// Extracting values using REGEX and store in 'match' as array
const match = inputString.match(/(\d+) (\w+) (\d+\.\d+)/); 

console.log(match);

if (match) {
    const totalTime = parseInt(match[1], 10);
    const letters = match[2].split('');  
    const pricePerBottle = parseFloat(match[3]);
    let totalBottles = 0;

    let totalPath = ''
    for(let i = 0; i < totalTime; i++) {
        const currentIndex = i % letters.length;
        totalPath  += letters[currentIndex];
    }

    for (let char of totalPath) {
        if (char === 'B') {
            totalBottles++;
        }
    }

    let totalEarnings = pricePerBottle * totalBottles;

    console.log(`Specified Total Time: ${totalTime} hours`);
    console.log(`Total path: ${totalPath}`);
    console.log(`Number of Bottles: ${totalBottles}`);
    console.log(`Price per Bottle: ${pricePerBottle}`);
    console.log(`Total Day Earnings: ${totalEarnings}`);
  
} else {
    console.log("No match found");
};
