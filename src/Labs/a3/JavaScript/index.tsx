import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants></VariablesAndConstants>
          <VariableTypes></VariableTypes>
          <BooleanVariables></BooleanVariables>
          <IfElse></IfElse>
          <TernaryOperator></TernaryOperator>
          <WorkingWithFunctions></WorkingWithFunctions>
          <WorkingWithArrays></WorkingWithArrays>
          <JsonStringify></JsonStringify>
          <TemplateLiterals></TemplateLiterals>
          <House></House>
          <Spreading></Spreading>
          <Destructing></Destructing>
       </div>
    );
 }
 export default JavaScript
 
 var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];
console.log("Working with Arrays", functionScoped, blockScoped, constant1, numberArray1, stringArray1, variableArray1)