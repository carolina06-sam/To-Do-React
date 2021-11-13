import React from "react";
import "./TodoItem.css";
import { BiCheckDouble } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.onComplete}
            >
                <BiCheckDouble />
            </span>
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                <RiDeleteBin5Fill />
            </span>
        </li>
    );
}

export { TodoItem };
