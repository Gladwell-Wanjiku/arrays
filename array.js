let arr1 = [3,7,34,90,12];
let lastElement = arr1[arr1.length -1];
console.log(lastElement);

let arr2 = [true, "green", "where", 12,56];
let findElement = arr2[arr2.length -1];
console.log(findElement);

let myPets = ["cow", "Bird", "Snake", "Dog"];
let stringmyPets = myPets.join();
console.log(stringmyPets);

let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let itemsvar = arr3.sort();
console.log(itemsvar)

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(data){
    return data.filter((value,index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr))

let arr5 = ["the", "way","x",4];
console.log(arr5.includes("way"))

let word = (string) => {
    return string.split("").sort().join("");
}
console.log(word("sevink"))


