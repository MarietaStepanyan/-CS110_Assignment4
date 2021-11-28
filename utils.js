module.exports = {
    sumOfEachRow,
    sumOfMatrices,
    matrixProduct,
  }

function matrixProduct(mat1, mat2) {
    let product = [] 
    for (let i = 0; i < mat1.length; i++) {
      product.push([])
      for (let j = 0; j < mat2[0].length; j++) {
        let cellValue = 0
        for (let k = 0; k < mat1[0].length; k++) {
          cellValue += mat1[i][k] * mat2[k][j]
        }
        product[i].push(cellValue)
      }
    }
    return product
  }

  function sumOfMatrices(mat1, mat2) {
    let sum = []
    for(let row = 0; row < mat1.length; row++){ 
      sum.push([]) 
        for(let col = 0; col < mat1[row].length; col++) {
            sum[row][col] = mat1[row][col] + mat2[row][col]
        }
    }
    return sum
}

function sumOfRow(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
  }

function sumOfEachRow(mat) {
    const result = []
    for (let i = 0; i < mat.length; i++) {
      const sum = sumOfRow(mat[i])
      result.push(sum)
    }
    return result
  }