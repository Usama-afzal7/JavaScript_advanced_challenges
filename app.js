// Challenge 1 ---- create a Rating function

function showRating(rating){
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); i++){
        ratings += '*';
        if (i !== Math.floor(rating) - 1){
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)){
        ratings += " .";
    }
    return ratings
}

console.log(showRating(2.5))

//Challenge 2 --- Sort by Lowest to Highest Price

function sortlowToHigh(arr){
    return arr.sort((a, b) => a - b)
}

console.log(sortlowToHigh([20, 4, 10000, 350, 50000, 10]))

//Challenge 3 --- High to low by prices of a given array of an object

function highToLow(prices){
    return prices.sort((a, b)=> b.price - a.price)
}

console.log(highToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
]))


//Challenge 4 --- call the first api 

// async function postByUser(userId){
//   const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json()
//   const posts = data.filter(element => element.userId === userId)
//   console.log(posts)
// }

// postByUser(3)

//Challenge 5 ---
async function firsrtSixIncomplete(userId){
  const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json()
  const posts = data.filter(element => !element.completed).slice(0, 6);
  console.log(posts)
}

firsrtSixIncomplete(6);
//Challenge 6 ---