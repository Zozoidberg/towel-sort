module.exports = function towelSort (matrix) {
  unpackedMatrix = []
  let k = -1
  if (!matrix)
    return unpackedMatrix
  for (e of matrix){
    k = k * (-1)
    if (k === 1) {
        for(number of e)
            unpackedMatrix.push(number)
        }
    else {
        newArr = e.reverse()
        for(number of newArr)
            unpackedMatrix.push(number)
        }
    }
  return unpackedMatrix
}
