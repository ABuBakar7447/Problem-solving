function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        
        minPrice = Math.min(minPrice, price);
        console.log("minprice",minPrice);
        
        let profit = price - minPrice;
        console.log("profit",profit);
        
        
        maxProfit = Math.max(maxProfit, profit);
        console.log("maxprofit",maxProfit);
    }

    return maxProfit;
}


const prices = [7,1,5,3,6,4];
console.log("Maximum profit:", maxProfit(prices));
