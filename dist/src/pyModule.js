"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerPyWithInput = exports.compilerPy = void 0;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
// Creating, Compiling and executing the Python file.
const compilerPy = (language, code, envData) => __awaiter(void 0, void 0, void 0, function* () {
    // creating source file
    var filename = (0, uuid_1.v4)();
    const temppath = './temp';
    const filepath = path_1.default.join(temppath, `${filename}.${language}`);
    //creating temp0
    fs_1.default.writeFileSync(filepath, code);
    //Compiling the code
    const command = `python ${filepath}`;
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, (error, stdout, stderr) => __awaiter(void 0, void 0, void 0, function* () {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
        }));
    });
});
exports.compilerPy = compilerPy;
// Creating, Compiling and executing the Python file with Input.
const compilerPyWithInput = (language, code, envData, input) => __awaiter(void 0, void 0, void 0, function* () {
    // creating source file
    var filename = (0, uuid_1.v4)();
    const temppath = './temp';
    const filepath = path_1.default.join(temppath, `${filename}.${language}`);
    const outputpath = path_1.default.join(temppath, `${filename}.out`);
    const inputfilepath = path_1.default.join(temppath, `input.txt`);
    //creating temp0
    fs_1.default.writeFileSync(filepath, code);
    //creating Input file
    fs_1.default.writeFileSync(inputfilepath, input);
    //Compiling the code
    const command = `python ${filepath} < ${inputfilepath}`;
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, (error, stdout, stderr) => __awaiter(void 0, void 0, void 0, function* () {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
        }));
    });
});
exports.compilerPyWithInput = compilerPyWithInput;
