// Multiples of 3 and 5
// Should return sum of multiples below 1000

function findSum(num) {
  const numList = [];

  for (let i = 1; i < num; i++) {
    let threes = 3 * i;
    let fives = 5 * i;   
    
    if(threes < num){
      numList.push(threes)
    }
    if(fives < num){
      numList.push(fives)
    }
  }
  return numList.filter((num, index) => numList.indexOf(num) >= index).reduce((acc, curr) => acc + curr);
}

module.exports = findSum;