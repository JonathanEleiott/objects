// const name = "Paulie";
// const age = 27;
// const children = ["Sally", "Susie", "Penelope"];

// const sallyName = "Sally";
// const sallyAge = 3;

// const keyName = `name`;

const sally = {
  name: `Sally`,
  age: 3,
  children: [],
  isMarried: false
}

const gary = {
  name: `Gary`,
  age: 57,
  children: [`Perry`, `Dylan`, `George`, `Paulie`]
}

gary.wife = {
  name: `Lisa`,
  age: 52,
  children: gary.children
}

gary.age++;

const paulie = {
  name: `Paulie`,
  age: 27,
  children: [sally, `Susie`, `Penelope`],
  isMarried: true,
  father: gary
};

gary.children[1] = `Cole`;

gary.children.splice(2, 1, `Duke`);

// console.log(gary);

// for(let i = 0; i < gary.children.length; i++) {
//   console.log(gary.children[i]);
// }


// for(const characteristic in sally) {
//   console.log(characteristic);

//   console.log(sally[characteristic]);
// }

// console.log(Object.keys(paulie));
// console.log(Object.values(paulie));

// console.log(paulie.father.age);





// const students = [`Duncan`, `Jessica`, `Nate`, `Megatron`, `Charlie`];
// students[2] = `Larry`;
// students[5] = `Devin`;

// students[10] = `Archibald`;

// // console.log(students)



// const board = [
//   [`x`, null, null],
//   [null, `o`, null],
//   [null, null, null]
// ]

// const player1 = `x`;
// const player2 = `o`;

// board[2][2] = `x`;
// board[2][1] = `o`;
// board[0][1] = `x`;

// console.log(board);




// names of bunnies
// count how many bunnies have that name

const names = [`Floppy`, `Floppy`, `Henry`, `Henry`, `Floopy`, `Flippy`, `Flippy`, `Flippy`, `Devin`];

const bunnies = {};

for(let i = 0; i < names.length; i++) {
  const bunnyName = names[i];
  // if it doesn't exist in the obj
  if(bunnies[bunnyName] === undefined) {
    // add it to the obj with a default value of 1
    bunnies[bunnyName] = 1;

    // if it does exist
  } else {
    // add one to the count
    bunnies[bunnyName]++; // bunnies[bunnyName] += 1; 
  } 
}

console.log(bunnies);