import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TaskList from "./TaskList"

export default function TaskInput() {
    // State to store the list of tasks
    let [todos, setTodos] = useState([{ task: "Code", id: uuidv4(), isDone: false }]);
    
    // State to store the value of the new task input field
    let [newTask, setNewTask] = useState('');

    // Function to add a new task
    let addTask = (event) => {
        event.preventDefault();
        // Add new task to the todos array
        setTodos((currTodo) => {
            return [...currTodo, { task: newTask, id: uuidv4(), isDone: false }];
        });
        // Clear the input field after adding the task
        setNewTask('');
    }
    
    // Function to update the value of the new task input field
    let updateTodoValue = (event) =>{
        setNewTask(event.target.value);
    }

    return (
        <>
        {/* Form for adding a new task */}
        <form onSubmit={addTask}>
            {/* Text field for entering a new task */}
            <TextField id="outlined-basic" label="Enter a task" variant="outlined" onChange={updateTodoValue} value={newTask} required/> <br /><br />
            {/* Button to submit the form and add the task */}
            <Button type="submit" variant="contained" size="small">ADD TASK</Button>
        </form>      
        <br /><br />      
        {/* TaskList component to display the list of tasks */}
        <TaskList todos={todos} setTodos={setTodos}/>       
        </>
    );
}
