let array = [1, 3, 4, 6, 3, 3, 6, 77, 8, 3];
array.forEach((ele, ele1, ele2)=> {
    console.log(ele, ele1, ele2);
});

let arraymulpile = array.map((ele)=>{
    return ele * 2;
})
console.log(arraymulpile);
