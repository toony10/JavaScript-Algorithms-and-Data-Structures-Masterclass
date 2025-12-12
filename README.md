# JavaScript Algorithms and Data Structures Masterclass

A comprehensive collection of algorithms and data structures implementations written in TypeScript. This repository contains solutions to common programming problems, algorithm implementations, and coding challenges organized by topic.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Compilation](#compilation)
- [Running Code](#running-code)
- [Topics Covered](#topics-covered)
- [File Structure](#file-structure)

## 🎯 Overview

This repository is a learning resource for mastering JavaScript/TypeScript algorithms and data structures. It includes:

- Problem-solving patterns and techniques
- Algorithm implementations (searching, sorting)
- Recursion examples and challenges
- Coding challenges and exercises
- TypeScript implementations with type safety

All code is written in TypeScript and compiled to JavaScript in the `dist` folder.

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (can be installed globally or locally)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installing TypeScript

You can install TypeScript globally:

```bash
npm install -g typescript
```

Or use it locally via npx (no installation needed):

```bash
npx tsc
```

## 📁 Project Structure

```
JavaScript-Algorithms-and-Data-Structures-Masterclass/
├── src/                          # TypeScript source files
│   ├── 1.problem solving patternes/
│   ├── 2.challenges/
│   ├── 3.Recursion/
│   ├── 4.Recursion Challenges/
│   ├── 5.Bonus Recursion challenges/
│   ├── 6.Searching Algorithms/
│   └── 7.Sort/
├── dist/                         # Compiled JavaScript files (gitignored)
├── tsconfig.json                 # TypeScript configuration
├── .gitignore                    # Git ignore file
└── README.md                     # This file
```

## 🚀 Getting Started

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd JavaScript-Algorithms-and-Data-Structures-Masterclass
   ```

2. **Install dependencies** (if any):
   ```bash
   npm install
   ```

## 🔨 Compilation

### Compile All TypeScript Files

To compile all TypeScript files in the `src` directory to JavaScript:

```bash
tsc
```

This will compile all `.ts` files and output them to the `dist` folder, preserving the directory structure.

### Watch Mode (Auto-compile)

To automatically recompile files when changes are detected:

```bash
tsc --watch
```

or

```bash
tsc -w
```

### Compile Configuration

The project uses `tsconfig.json` with the following key settings:

- **Source Directory**: `./src`
- **Output Directory**: `./dist`
- **Target**: ES2016
- **Module System**: CommonJS
- **Strict Mode**: Enabled

## ▶️ Running Code

### Option 1: Run Compiled JavaScript

After compiling with `tsc`, run the JavaScript files:

```bash
node "dist/6.Searching Algorithms/Binary-search-exercise.js"
```

### Option 2: Run TypeScript Directly with ts-node

If you have `ts-node` installed, you can run TypeScript files directly:

```bash
npx ts-node "src/6.Searching Algorithms/Binary-search-exercise.ts"
```

### Option 3: Add Test Code

To see output, add `console.log` statements to your functions. For example:

```typescript
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
```

## 📚 Topics Covered

### 1. Problem Solving Patterns

Common algorithmic patterns and techniques:

- **Frequency Counter**: Using objects to count frequencies
  - `frequency-counter.ts` - Basic frequency counter pattern
  - `Anagram-challenge.ts` - Anagram detection using frequency counters

- **Multiple Pointers**: Using two or more pointers to solve problems efficiently
  - `multiple-pointers.ts` - Basic multiple pointers pattern
  - `count-uniq-values.ts` - Count unique values in sorted array

- **Sliding Window**: Efficiently process subarrays/substrings
  - `max-sub-array-sum.ts` - Maximum subarray sum

### 2. Challenges

Various coding challenges:

- `areThereDuplicates.ts` - Check for duplicate values
- `averagePair.ts` - Find pairs with target average
- `isSubsequence.ts` - Check if string is subsequence
- `maxSubArray.ts` - Maximum subarray problem

### 3. Recursion

Recursion fundamentals and examples:

- `factorial.ts` - Factorial using recursion
- `Helper-recursion-method.ts` - Helper method recursion pattern
- `Pure-recursion.ts` - Pure recursion examples
- `test.ts` - Recursion test cases

### 4. Recursion Challenges

Advanced recursion problems:

- `factorial.ts` - Factorial implementation
- `fibonacci.ts` - Fibonacci sequence
- `sameFrequency.ts` - Compare number frequencies

### 5. Bonus Recursion Challenges

Additional recursion exercises:

- `capitalize-first.ts` - Capitalize first letter of each string
- `capitalize-words.ts` - Capitalize all words
- `collect-strings.ts` - Collect all strings from object
- `flatten.ts` - Flatten nested arrays
- `is-palindrome.ts` - Palindrome checker
- `nested-even-sum.ts` - Sum of even numbers in nested object
- `reverse.ts` - Reverse string recursively
- `some-recursive.ts` - Check if any element passes test
- `stringify-numbers.ts` - Convert numbers to strings in object

### 6. Searching Algorithms

Search algorithm implementations:

- `linear-search.ts` - Linear search algorithm (O(n))
- `Binary-search-exercise.ts` - Binary search algorithm (O(log n))

### 7. Sorting Algorithms

Sorting algorithm implementations:

- `Bubble-sort.ts` - Bubble sort algorithm
- `built-in-sort-function.ts` - JavaScript built-in sort examples

## 📂 File Structure

### Source Files (`src/`)

All TypeScript source files are located in the `src/` directory, organized by topic:

```
src/
├── 1.problem solving patternes/
│   ├── frequency counter/
│   ├── multiple pointers/
│   └── sliding window/
├── 2.challenges/
├── 3.Recursion/
├── 4.Recursion Challenges/
├── 5.Bonus Recursion challenges/
├── 6.Searching Algorithms/
└── 7.Sort/
```

### Compiled Files (`dist/`)

Compiled JavaScript files are output to the `dist/` directory, mirroring the structure of `src/`. The `dist/` folder is gitignored and should not be committed to version control.

## 🛠️ Development

### TypeScript Configuration

The project uses strict TypeScript settings for type safety:

- Strict mode enabled
- ES2016 target
- CommonJS modules
- ESModule interop enabled

### Git Ignore

The `.gitignore` file excludes:

- `dist/` - Compiled JavaScript files
- `node_modules/` - Dependencies
- Log files
- OS-specific files
- IDE configuration files

## 📝 Notes

- All algorithms include comments explaining the approach
- Some files include example usage in comments
- To see output, uncomment example calls or add `console.log` statements
- The code follows TypeScript best practices with type annotations

## 🤝 Contributing

Feel free to add more algorithms, improve existing implementations, or fix bugs. Make sure to:

1. Follow the existing code style
2. Add appropriate comments
3. Include example usage
4. Test your implementations

## 📄 License

This project is for educational purposes.

---

**Happy Coding! 🚀**

