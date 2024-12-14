function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];
console.log(greeterArray(user)); // Correct usage with array

let user2 = "Jane Doe";
console.log(greeter(user2)); // Correct usage with string

//Improved error handling with type checking
function greet(person: string | string[]): string {
    if (typeof person === 'string') {
        return `Hello, ${person}!`;
    } else {
        return `Hello, ${person.join(', ')}!`;
    }
}

console.log(greet("John"));
console.log(greet(["John", "Jane"]));