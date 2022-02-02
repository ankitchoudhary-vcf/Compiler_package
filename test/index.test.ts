import * as Compiler from '../src/index'

Compiler.init()


const compilerCpp =async()  => {
    try{
    const output = await Compiler.compilerCpp("cpp", `#include <iostream>
    int main(){
     std::cout <<"Hello World" << std::endl;
     return 0;
    }`, {OS: 'Windows', cmd: 'g++'})

    console.log(output)
    Compiler.flush()
    }
    catch(err:any){
        console.log(err.stderr)
    }

    try{
    const output = await Compiler.compilerCppWithInput("cpp", `#include <iostream>
    int main(){
     int a;
     std::cin>>a;
     std::cout <<"Hello World"<<a << std::endl;
     return 0;
    }`, {OS: 'Windows', cmd: 'g++'}, `1`)

    console.log(output)
    Compiler.flush()
    }
    catch(err:any){
        console.log(err.stderr)
    }

}
compilerCpp();

const compilerPy =async()  => {
    try{
    const output = await Compiler.compilerPython("py", `print("Hello World")`, {OS: 'Windows'})

    console.log(output)
    Compiler.flush()
    }
    catch(err:any){
        console.log(err.stderr)
    }


    try{
    const output = await Compiler.compilerPythonWithInput("py", `print(input("Enter the String: "))`, {OS: 'Windows'}, `hello World!`)

    console.log(output)
    Compiler.flush()
    }
    catch(err:any){
        console.log(err.stderr)
    }

}
compilerPy();