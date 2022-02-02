# vcompiler

![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=1.1.2&x2=0)

## 🎉 Version 1.x is live ! 🎉

## Introducation

---

It is the npm package for the compilation of the code. Currently it supports the following programming languages:

    1. C language.
    2. C++ language.
    3. Python language.

It can be used for the compilation of the code with or without the input.

---

## Installation

### NPM

```
npm install --save vcompiler
```

### Yarn

```
yarn add vcompiler
```

## Initializing the Compiler

---

```javascript
const Compiler = require("vcompiler");

// initializing the Compiler instance.
Compiler.init();
```

## Compiling the c or cpp code

---

- ### Without Input

  ```javascript
  const Compiler = require("vcompiler");
  Compiler.init();
  const getOutput = async () => {
    try {
      const output = Compiler.compileCppWithInput(
        "cpp",
        `#include <iostream> int main(){ std::cout <<"Hello World"<< std::endl; return 0; }`,
        { OS: "Windows", cmd: "g++" }
      );
      console.log(output);
    } catch (err) {
      console.log(err);
    }
  };
  ```

  ### Output

  ```
  Hello World
  ```

- ### With Input

  ```javascript
  const Compiler = require("vcompiler");
  Compiler.init();
  const getOutput = async () => {
    try {
      const output = Compiler.compileCppWithInput(
        "cpp",
        `#include <iostream> int main(){ int a; std::cin>>a; std::cout <<"Hello World"<<std::endl<<a << std::endl; return 0; }`,
        { OS: "Windows", cmd: "g++" },
        `1`
      );
      console.log(output);
    } catch (err) {
      console.log(err);
    }
  };
  ```

  ### Output

  ```
  Hello World
  1
  ```

## Compiling the python code

---

- ### Without Input
    ```javascript
      const Compiler = require("vcompiler")
      Compiler.init()
      const getOutput =  async () => {
            try {
              const output = Compiler.compilerPython("py",`print("Hello World")`, {OS: 'Windows'})console.log(output)
              }
            catch(err){
                console.log(err)
            }
        }
    ```
    ### Output
    ```
    Hello World
    ```
- ### With Input
    ```javascript
        const Compiler = require("vcompiler")
        Compiler.init()
        const getOutput =  async () => {
            try {
              const output = Compiler.compilerPython("py",`input("Enter the String: ")`, {OS: 'Windows'}, `Hello World!`)console.log(output)
              }
            catch(err){
                console.log(err)
            }
        }
    ```
    ### Output
    ```
    Enter the String: Hello World!
    ```
## Pull Request
[Please read...](./submitting-a-pull-request.md)

## Contribution

Everyone is welcome to contribute to this project and build more functionality into it. Make a fork, improve/fix it and create a pull request. I'd love it! :) Also, I'll be mentioning your names over here!

---
---

# -By Dev [Ankit Choudhary](https://github.com/ankit1509)
