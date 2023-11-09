let name = "Link"
// let leftHand = ""
let leftHand = null
// intentionally emply string
let rightHand = null
let backPack = []

backPack.push("Stick") //adds to end of array
backPack.push("Pot Lid")
backPack.push("Bow")
backPack.push("Food")

console.log(backPack)

let weapon = backPack.shift() // removes from beginning of array
let shield = backPack.shift()

leftHand = shield
rightHand = weapon

console.log(`${name}, with a ${leftHand} and ${rightHand}, he left the village ready to save people with nothing but ${backPack.length} items on his person.`)

rightHand = null
// stick broke

backPack.unshift("sword") //add at beginning of the array
rightHand = "Spear"

console.log(backPack)

backPack.splice(2, 1, "Crumbs") //allows for complex interaction of adding and removing at specific locations..... index, # to be removed, what to replace with
// index, # we want to remove, add to array


backPack.splice(0, 1, "Master sword")

console.log(backPack)

leftHand = "Shield of Hyrule"

for (let i = 0; i < 3; i++) {
    backPack.push("Food")
}

console.log(backPack)

rightHand = backPack.shift()
console.log(backPack)
console.log(rightHand)

for(let i = 0; i < backPack.length; i++) {
    if(backPack[i] === "Food") {  //dynamically access index falue
        backPack.splice(i, 1, "Crumbs")
    } else {
        console.log(`${name} ignored the ${backPack[i]}`)
    }
}

console.log(backPack)

for (let i = 0; i < backPack.length; i++) {
    if(backPack[i] === "Crumbs") {
        console.log(`${name} cleaned the crumbs!`)
        backPack.splice(i, 1, "Roses")
    }
    }

    
    let gift =  backPack.pop()
    
    console.log(`${name} defeated the monster and gave the Princess ${gift}.`)
    console.log(backPack)