
// You should implement your task here.

module.exports = function towelSort (matrix) {
	//return matrix
    let arr = [];
    let arr2 = matrix;
    let a = 0;

    if (matrix == undefined) {
        return [];
    } else {
    
        for (let i = 0; i < matrix.length; i++) {
            //r[i] = matrix[i];
            //arr2[i] = matrix[i];
            if ((i % 2) == 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    //return i%2
        		    arr.push(matrix[i][j]);
            	}
            } else {
                for (let j = 0; j < matrix[i].length; j++) {
        	    	//arr2[i][j] = arr[i][j];
                    a = arr[i][j];

                    arr.push(matrix[i][matrix[i].length - j - 1]);
                    matrix[i][matrix[i].length - j - 1] = a;
                    //return matrix
                    //arr[i][matrix[i].length - j - 1] = arr2[i][j];  
                }
                //return arr2 + arr
            }
        
        }
        return arr;
        /*for (let i = 0; i < arr.length  ; i++) {
            //return arr[i]
            for (let j = 0; j < arr.length * arr[i].length; j++) {
                //return arr[0][j];
            }
        }*/
    }
}
