//Find the largest numbers

function largesMax (arr) {
    let maxes = []
    for (let i = 0; i < arr.length; i++) {
      var valmax = arr[i][0]
      for (let j = 0; j < arr[i].length; j++) {
        currentE = arr[i][j]
        if (currentE >= valmax) {
          valmax = currentE
        }
      }
      maxes.push(valmax)
    }
    return maxes
  }
  console.log(largesMax([[3, 5, 4], [7, 8, 1,], [6, 2, 0]]))