import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionDestructing from "./FunctionDestructing";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    return (
        <div>
            <ES5Functions></ES5Functions>
          <ArrowFunctions></ArrowFunctions>
          <ImpliedReturn></ImpliedReturn>
          <FunctionParenthesisAndParameters></FunctionParenthesisAndParameters>
          <FunctionDestructing></FunctionDestructing>
        </div>
    )
}
export default WorkingWithFunctions