/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let res = []
  for (let transaction of transactions) {
    let i = 0
    for (i = 0; i < res.length; i++) {
        if (res[i].category === transaction.category) {
            res[i].price += transaction.price
            break
        }
    }
    if (i == res.length) {
        res.push({category: transaction.category, price: transaction.price})
    }
  }
  return res
}

// Input

// let transactions = [
//     {
//         category: 'item1',
//         price: 400.
//     },
//     {
//         category: 'item2',
//         price: 500.
//     },
//     {
//         category: 'item1',
//         price: 200.
//     },
//     {
//         category: 'item2',
//         price: 100.
//     },
//     {
//         category: 'item3',
//         price: 900.
//     },
// ]

// Output

// [
//     { category: 'item1', price: 600 },
//     { category: 'item2', price: 600 },
//     { category: 'item3', price: 900 }
// ]

module.exports = calculateTotalSpentByCategory;
