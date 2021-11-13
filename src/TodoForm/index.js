import React from "react";
import { TodoContext } from "../TodoContext";
import "./Todoform.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="CREA TUS TODO"
            />
            <div className="todoForm__buttons--container">
                <button
                    className="todoForm__button todoForm__button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="todoForm__button todoForm__button--add"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
