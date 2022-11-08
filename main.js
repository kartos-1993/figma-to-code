
var x = "Test"
var y = function func(){
    console.log("func")

}

if(y){
    x += ` ${typeof (y)}`
}
console.log(y)
console.log(x)