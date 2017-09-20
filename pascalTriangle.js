var pascalDepth = parseInt(line, 10); //The input integer is provided on a single line as a text value, so this handles it.

var testTriangle = pascalTriangle(pascalDepth);
var output = [];

for(var i = 0; i < testTriangle.length; i++){
    for(var j = 0; j < testTriangle[i].length; j++){
        output.push(testTriangle[i][j]);
    }
}

console.log(output.join(" "));   

function pascalTriangle(totalLines, triangle) {
    if (typeof triangle === 'undefined') {
        triangle = [];
    }

    if (triangle.length === totalLines) {
        return triangle;
    }

    if (triangle.length > 0) {
        var triangleLine = [];
        for (var i = 0; i < triangle.length; i++) {
            if (typeof triangle[triangle.length - 1][i - 1] === 'undefined') {
                triangleLine.push(1);
            } else {
                triangleLine.push((triangle[triangle.length - 1][i - 1] + triangle[triangle.length - 1][i]));
            }
        }
        triangleLine.push(1);
        triangle.push(triangleLine);
    } else {
        triangle.push([1]);
    }
    return pascalTriangle(totalLines, triangle);
}
