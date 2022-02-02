import fs from 'fs'
import path from 'path'
import * as cppModule from './ccpModule'
import * as pyModule from './pyModule'

/**
 * Function to initialize the compiler.
 * @summary This function just initialize the Compiler instance.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * *****
 * output : 
 * Compiler initialized.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */

export const init = () =>{
	
	console.log('Compiler initialized')		
	if(!fs.existsSync('./temp')){		
        fs.mkdirSync('./temp',{recursive: true});
	};
}

/**
 * Function to compiler the c or cpp Code.
 * @param {language: string, code: string, envData : {OS: string, cmd: string : optional}: optional} input the programming language to compiler, like c, cpp, .etc, and input the code to be compiled, or input the environment data it's optional to pass.
 * @summary This function is used to compile the c or cpp Code without input.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * const getOutput =  async () => {
 * try {
 *  const output = Compiler.compileCpp("cpp", `#include <iostream> int main(){ std::cout <<"Hello World" << std::endl; return 0; }`, {OS: 'Windows', cmd: 'g++'})
 *  console.log(output)
 * }
 * catch(err){
 *  console.log(err)
 * }
 * }
 * *****
 * output : 
 * Hello World.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */

export const compilerCpp = (language: string, code:string, envData:any,) => {
    try{
        return cppModule.compilerCpp(language, code, envData);
    }
    catch(error){
        console.error(error)
    }
}

/**
 * Function to compiler the c or cpp Code.
 * @param {language: string, code: string, envData : {OS: string, cmd: string : optional}: optional, input: any} input the programming language to compiler, like c, cpp, .etc, and input the code to be compiled, or input the environment data it's optional to pass, and input the input data of the code to the compiler.
 * @summary This function is used to compile the c or cpp Code with input.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * const getOutput =  async () => {
 * try {
 *  const output = Compiler.compileCppWithInput("cpp", `#include <iostream> int main(){ int a; std::cin>>a; std::cout <<"Hello World"<<a << std::endl; return 0; }`, {OS: 'Windows', cmd: 'g++'}, `1`)
 *  console.log(output)
 * }
 * catch(err){
 *  console.log(err)
 * }
 * }
 * *****
 * output : 
 * Hello World1.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */

export const compilerCppWithInput = (language: string, code:string, envData:any, input: any) => {
    try{
        return cppModule.compilerCppWithInput(language, code, envData, input);
    }
    catch(error){
        console.error(error)
    }
}

/**
 * Function to compiler the Python Code.
 * @param {language: string, code: string, envData : {OS: string}: optional} input the programming language to compiler (like py), and input the code to be compiled, or input the environment data it's optional to pass.
 * @summary This function is used to compile the Python Code without input.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * const getOutput =  async () => {
 * try {
 *  const output = Compiler.compilerPython("py",`print("Hello World")`, {OS: 'Windows'})
 *  console.log(output)
 * }
 * catch(err){
 *  console.log(err)
 * }
 * }
 * *****
 * output : 
 * Hello World.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */

export const compilerPython = (language:string, code:string, envData:any) => {
    try{
        return pyModule.compilerPy(language, code, envData);
    }
    catch(error){
        console.error(error)
    }
}

/**
 * Function to compiler the Python Code.
 * @param {language: string, code: string, envData : {OS: string}: optional, input: any} input the programming language to compiler (like py), and input the code to be compiled, or input the environment data it's optional to pass, and input the input data of the code to the compiler.
 * @summary This function is used to compile the Python Code with input.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * const getOutput =  async () => {
 * try {
 *  const output = Compiler.compilerPythonWithInput("py", `print(input("Enter the String: "))`, {OS: 'Windows'}, `hello World!`)
 *  console.log(output)
 * }
 * catch(err){
 *  console.log(err)
 * }
 * }
 * *****
 * output : 
 * Enter the String: Hello World!.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */

export const compilerPythonWithInput = (language:string, code:string, envData:any, input:any) => {
    try{
        return pyModule.compilerPyWithInput(language, code, envData, input);
    }
    catch(error){
        console.error(error)
    }
}


/**
 * Function to flush out the temporary registers and the buffer contents.
 * @summary This function is used to clear the buffer or temporary registers, It should be used at the end of the compilation of the code to clear out the buffer storage.
 * @example 
 * - code 
 * const Compiler = require("vcompiler")
 * Compiler.init()
 * const getOutput =  async () => {
 * try {
 *  const output = Compiler.compileCppWithInput("cpp", `#include <iostream> int main(){ int a; std::cin>>a; std::cout <<"Hello World"<<a << std::endl; return 0; }`, {OS: 'Windows', cmd: 'g++'}, `1`)
 *  console.log(output)
 *  Compiler.flush()
 * }
 * catch(err){
 *  console.log(err)
 * }
 * }
 * *****
 * output : 
 * Hello World1.
 * 
 * @author Ankit Choudhary
 * @license ISC
 */


export const flush = () => {
    const temppath = './temp';
    const files = fs.readdirSync(temppath);

    for (var i = 0; i <files.length; i++) {
        fs.unlinkSync(path.join(temppath, files[i]))
    }
}