# Unclear TypeScript Error with Array and String Function Argument

This repository demonstrates a TypeScript error that can be confusing for beginners. The error occurs when an array is passed as an argument to a function expecting a string. The error message itself isn't very clear about the type mismatch.

## The Bug

The `greeter` function expects a string argument. However, an array of strings is passed to it, resulting in a type error.  The error message from the compiler might not be immediately obvious to someone new to TypeScript.

## The Solution

The solution involves either changing the function signature to accept an array of strings, or modifying the function call to pass a single string.  The solution also includes improved error handling with type checking.

## How to Reproduce

1. Clone the repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`
3. Run the compiled JavaScript file: `node bug.js`

You should observe a type error. Then, you can look at `bugSolution.ts` for the fix.