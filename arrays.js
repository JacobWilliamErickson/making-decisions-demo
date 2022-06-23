/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
//Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.
let backpack = []

//Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

backpack.push('sword','shield','food')
//Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.
let belt = backpack.splice(0,1)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable called furCoat and give it a string value of "fur coat". Then add that variable to the backpack
let furCoat = "fur coat"
backpack.unshift(furCoat)


//Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.
backpack.shift()
//Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack.
let itemCount= backpack.length
// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.
backpack.push(`flint`,`blanket`,`knife`,`toothbrush`)
let backpack2 = backpack.splice(2,4)
console.log(belt)
console.log(backpack2)
console.log(backpack)
//Using bracket syntax, console.log the first item in backpack2
for (i = 0;i<backpack.length;i++){
    console.log(backpack[i])
}
for (i = 0;i<backpack2.length;i++){
    console.log(backpack2[i])
}