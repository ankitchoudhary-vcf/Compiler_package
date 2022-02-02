"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flush = exports.compilerPythonWithInput = exports.compilerPython = exports.compilerCppWithInput = exports.compilerCpp = exports.init = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cppModule = __importStar(require("./ccpModule"));
const pyModule = __importStar(require("./pyModule"));
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
const init = () => {
    console.log('Compiler initialized');
    if (!fs_1.default.existsSync('./temp')) {
        fs_1.default.mkdirSync('./temp', { recursive: true });
    }
    ;
};
exports.init = init;
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
const compilerCpp = (language, code, envData) => {
    try {
        return cppModule.compilerCpp(language, code, envData);
    }
    catch (error) {
        console.error(error);
    }
};
exports.compilerCpp = compilerCpp;
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
const compilerCppWithInput = (language, code, envData, input) => {
    try {
        return cppModule.compilerCppWithInput(language, code, envData, input);
    }
    catch (error) {
        console.error(error);
    }
};
exports.compilerCppWithInput = compilerCppWithInput;
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
const compilerPython = (language, code, envData) => {
    try {
        return pyModule.compilerPy(language, code, envData);
    }
    catch (error) {
        console.error(error);
    }
};
exports.compilerPython = compilerPython;
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
const compilerPythonWithInput = (language, code, envData, input) => {
    try {
        return pyModule.compilerPyWithInput(language, code, envData, input);
    }
    catch (error) {
        console.error(error);
    }
};
exports.compilerPythonWithInput = compilerPythonWithInput;
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
const flush = () => {
    const temppath = './temp';
    const files = fs_1.default.readdirSync(temppath);
    for (var i = 0; i < files.length; i++) {
        fs_1.default.unlinkSync(path_1.default.join(temppath, files[i]));
    }
};
exports.flush = flush;
