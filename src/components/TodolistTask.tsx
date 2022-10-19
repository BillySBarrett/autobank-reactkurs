import { styled } from "@stitches/react";
import { useState } from "react";

interface TodolistTaskProps {
    task: string;
}

export const TodolistTask = ({ task }: TodolistTaskProps) => {
    const [isDone, setIsDone] = useState<boolean>(false);

    return (
        <SingleTask>
            <CheckboxInput type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)} />
            <TaskText>{task}</TaskText>
        </SingleTask>
    );
};

const CheckboxInput = styled('input', {
    width: "20px",
    height: "20px",
    margin: "10px",
    border: "none",
    borderRadius: "2px",
    '&:focus': {
        outline: "none",
    },
});


const StyledDiv = styled('div', {
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

const TaskText = styled('p', {
    fontSize: '15px',
});

const SingleTask = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    boxShadow: '3px 4px 0px 0px rgba(0,0,0,0.75)',
    margin: "10px",
    paddingLeft: "10px", 
    paddingRight: "10px",

});







