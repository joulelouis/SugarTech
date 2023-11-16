console.log('Hello World!');

// 2 inputs
/*
function bottleCollector(dailyExpenses, dailyExpedition) {

}
*/

function earningsAnalyzer(dailyEarnings, dailyExpenses) {
    if (dailyEarnings) {
        let sumEarnings = dailyEarnings.reduce((sum, value) => {
            return sum + value;
        }, 0);
        console.log(`Sum of earnings: ${sumEarnings}`);

        let aveEarnings = sumEarnings / dailyEarnings.length;
        console.log(`Average earnings: ${aveEarnings}`);

        // return `${sumEarnings}, ${aveEarnings}`;
        let sumExpenses = dailyExpenses.reduce((sum, value) => {
            return sum + value;
        }, 0);
        console.log(sumExpenses);

        let aveExpenses = sumExpenses / dailyExpenses.length;
        console.log(aveEarnings);

        if (aveEarnings > aveExpenses) {
            return `Good earnings. Extra money per day: ${(aveEarnings - aveExpenses).toFixed(2)}`;
        } else if (aveEarnings < aveExpenses) {
            return `Hard times. Money needed: ${(aveExpenses - aveEarnings).toFixed(2)}`;
        }


    } else {
        throw new Error("No data provided");
    }
}

function computeProfit(dayExpense, dayExpedition) {
    // Extracting values using REGEX and store in 'match' as array
    const match = dayExpedition.match(/(\d+) (\w+) (\d+\.\d+)/); 
    // console.log(match);

    const totalTime = parseInt(match[1], 10);
    const letters = match[2].split('');  
    const pricePerBottle = parseFloat(match[3]);
    let totalBottles = 0;
    let totalPath = '';

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

    // console.log(`Specified Total Time: ${totalTime} hours`);
    // console.log(`Total path: ${totalPath}`);
    // console.log(`Number of Bottles: ${totalBottles}`);
    // console.log(`Price per Bottle: ${pricePerBottle}`);
    // console.log(`Total Day Earnings: ${totalEarnings}`);

    return totalEarnings - dayExpense;

};

let dailyEarnings = [];
let dailyExpenses = [50, 50];
computeProfit(100, "8 ABMRB 24.50");
dailyEarnings.push(computeProfit(dailyExpenses[0], "8 ABMRB 24.50"));
dailyEarnings.push(computeProfit(dailyExpenses[1], "7 BBCD 25.00"));
console.log(dailyEarnings);
console.log(earningsAnalyzer(dailyEarnings, dailyExpenses));



