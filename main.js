const utils = require("./utils")

const mat1 = [
  [7, 2],
  [1, 5],
]

const mat2 = [
  [4, 1],
  [8, 9],
]

console.table(utils.sumOfMatrices(mat1, mat2))

console.table(utils.sumOfEachRow(mat1))

console.table(utils.matrixProduct(mat1, mat2))
