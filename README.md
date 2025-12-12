# JavaScript Algorithms and Data Structures Masterclass

A learning repository containing my implementations and solutions from the [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/) course on Udemy.

This repository is continuously updated as I progress through the course, implementing algorithms, data structures, and solving coding challenges in TypeScript.

## 📚 Course

This repository follows along with the course:
**[JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)**

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/)

### Installing TypeScript

Install TypeScript globally:

```bash
npm install -g typescript
```

Or use it locally via npx (no installation needed):

```bash
npx tsc
```

### Clone the Repository

```bash
git clone <repository-url>
cd JavaScript-Algorithms-and-Data-Structures-Masterclass
```

## 🔨 Compilation

Compile all TypeScript files to JavaScript:

```bash
tsc
```

This compiles all `.ts` files from `src/` to `dist/`, preserving the directory structure.

### Watch Mode (Auto-compile)

Automatically recompile on file changes:

```bash
tsc --watch
```

## ▶️ Running Code

### Option 1: Run Compiled JavaScript

After compiling with `tsc`, run the JavaScript files:

```bash
node "dist/path/to/file.js"
```

### Option 2: Run TypeScript Directly

Use `ts-node` to run TypeScript files directly:

```bash
npx ts-node "src/path/to/file.ts"
```

## 📁 Project Structure

```
JavaScript-Algorithms-and-Data-Structures-Masterclass/
├── src/              # TypeScript source files
├── dist/             # Compiled JavaScript files (gitignored)
├── tsconfig.json     # TypeScript configuration
├── .gitignore        # Git ignore file
└── README.md         # This file
```

## 📝 Notes

- Code is written in TypeScript with type safety
- All code is organized by topic in the `src/` directory
- Compiled JavaScript files are output to `dist/` (gitignored)
- This is a work-in-progress repository updated as I learn

---

**Happy Coding! 🚀**
