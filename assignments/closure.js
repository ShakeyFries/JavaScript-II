// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function chrisUniverse(){

  const emperor = "Emperor Chris";
  console.log (`Bow down to ${emperor}`);

  function kyleeWorld(){
    const ruler = "Ruler Ky";
    console.log (`Kylee says I love ${emperor}`);

    function jakeLand(){
      const beggar = "Jake";
      console.log (`Jake bows down to ${emperor}`);
      console.log (`Jake made a cake for ${ruler}`);

    }
    
    jakeLand()
  }

  kyleeWorld()

}
chrisUniverse()
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
