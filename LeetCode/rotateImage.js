// 48. Rotate Image
// Medium
// 14.6K
// 651
// Companies
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Reference Image =>https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Solution=>
// Youtube Vide Link=>https://youtu.be/swlO6KKh8yk

var rotate = function (matrix) {
    //Transpose Over Matrix
    for (let i = 0; i < matrix.length; i++) {
        for (j = i; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // reverese the element
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = temp;
            // console.log(matrix[i][matrix.length-1-j])
        }
    }
    return matrix;
};