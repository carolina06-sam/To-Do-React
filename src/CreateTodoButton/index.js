import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal((prevState) => !prevState);
        // si esta abierto o cerrado el modal
    };

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };
