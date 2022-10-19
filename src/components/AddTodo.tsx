import { css } from "@stitches/react";
import { useState } from "react";
import { TodolistTask } from "./TodolistTask";

export const AddTodo = () => {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = () => {
        if (task.length > 0) {
            setTasks((oldTasks) => [...oldTasks, task]);
            setTask("");
        }
    };

    return (
        <div className={styles.AddTodoContainer()}>
            <input className={styles.TextInput()}
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask} className={styles.Button()}>Add task</button>
            {tasks.map((task) => (
                <TodolistTask task={task} />
            ))}
        </div>
    );
};

const styles = {
    TextInput: css({
        width: "300px",
        height: "30px",
        fontSize: "20px",
        padding: "10px",
        border: "none",
        borderRadius: "2px",
        '&:focus': {
            outline: "none",
        },
    }),
    AddTodoContainer: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }),
    Button: css({
        width: "100px",
        height: "30px",
        fontSize: "15px",
        margin: "30px",
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
    })
};

export default AddTodo;
