import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import PathParameters from "./routing/PathParameters";
import Highlight from "./Highlight";
import Add from "../Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <JavaScript></JavaScript>
            <PathParameters></PathParameters>
            <Classes></Classes>
            <Styles></Styles>
            <ConditionalOutput></ConditionalOutput>
            <Highlight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
            <TodoItem></TodoItem>
            <TodoList></TodoList>
        </div>
    );
}
export default Assignment3;