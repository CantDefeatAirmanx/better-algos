/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 *
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any time. However,
 * you can buy it then immediately sell it on the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 * You can buy and sell only once
 *
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 *
 */

export const calculateBestTimeToTrade = (prices: number[]) => {
    if (prices.length < 2) {
        return 0;
    }

    if (prices.length === 2) {
        return Math.max(prices[1] - prices[0], 0);
    }

    let leftIndex = 0;
    let rightIndex = 1;

    let minBuyPrice = prices[leftIndex];
    let maxSellPrice = prices[rightIndex];

    while (rightIndex < prices.length) {
        const leftPrice = prices[leftIndex];
        const rightPrice = prices[rightIndex];

        if (leftPrice < minBuyPrice) {
            minBuyPrice = leftPrice;
        }

        if (rightPrice > maxSellPrice) {
            maxSellPrice = rightPrice;
        }

        const distance = rightIndex - leftIndex;
        const nextRightPrice = prices[rightIndex + 1];
        const nextLeftPrice = prices[leftIndex + 1];

        if (nextRightPrice > rightPrice) {
            rightIndex++;
            continue;
        }

        if (nextLeftPrice < leftPrice) {
            leftIndex++;
            continue;
        }

        if (rightIndex < prices.length - 1) {
            rightIndex++;
        } else {
            leftIndex++;
        }
    }

    return Math.max(0, maxSellPrice - minBuyPrice);
};
