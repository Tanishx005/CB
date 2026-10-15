// global scope and local scope! 

const score = 12 

function myFunction(){
    let b = 'abc'
    console.log(b)
    console.log(score)
    if(score>10){
        let score =20
        console.log("correct score")
    }
}
console.log()

myFunction();

