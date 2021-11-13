import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">
            Has completado {completedTodos} de todos {totalTodos} tus TO-DO
        </h2>
    );
}

export { TodoCounter };
//ya no sellaman co porps sino context
