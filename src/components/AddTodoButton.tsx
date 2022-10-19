import { styled } from "@stitches/react";
import { useState } from "react";
import { TodolistTask } from "./TodolistTask";

const AddTodoButton = () => {
    
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);


    //if tasks are completed, they should be at the bottom of the list
    const addTask = () => { 
        if (task.length > 0) {
            setTasks((oldTasks) => [...oldTasks, task]);
            setTask("");
        }
    };

    return (
        <div>
            <StyledButton onClick={addTask}>
            Add Todo
            </StyledButton>
            {tasks.map((task) => (
                <TodolistTask task={task} />
            ))}
        </div>
        
    );
}

const StyledButton = styled('button', {
    width: "100px",
    height: "30px",
    fontSize: "15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    '&:hover': {
        backgroundColor: "#e8e6e1"
    },
    '&:focus': {
        outline: "none",
        backgroundColor: "#e8e6e1"
    },
});

export default AddTodoButton;