

var r  = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var lumin = function(r, g, b){
	
	return(0.2126*r + 0.7152*g + 0.0722*b)
}
console.log(lumin(r, g, b));




// var r  = process.argv[2]
// var g = process.argv[3]
// var b = process.argv[4]

// var lumin = function(r, g, b){
// 	if ((0.2126*r + 0.7152*g + 0.0722*b)>155){
// 		return "light"
// 	} else {
// 		return "dark"
// 	}
// }
// console.log(lumin(r, g, b));