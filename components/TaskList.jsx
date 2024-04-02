import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import '../styles/list.css'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Todolist({ todos, setTodos }) {

    // Function to delete a todo item
    let deleteTodo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id));
    }

    // Function to mark a todo item as done
    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if (todo.id == id)
                    return {
                        ...todo,
                        isDone: true
                    };
                else
                    return todo;
            })
        ))
    }

    // Function to mark all todo items as done
    let markAllAsDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                };
            })
        ))
    }

    // Style for completed todo items
    let styles = { textDecoration: "line-through" };
    return (
        <>
            <Card sx={{ maxWidth: 400 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{backgroundColor:"black"}}>
                        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2>To Do Task</h2>
                        </Toolbar>
                    </AppBar>
                </Box>
                <CardContent>
                    <List>
                        {todos.map((todo) => (
                            <span key={todo.id}>
                                <ListItem disablePadding>
                                    <ListItemButton style={todo.isDone ? styles : {}}>
                                        <ListItemIcon>
                                            <Checkbox variant="contained" color="success" size="small" checked={todo.isDone} onClick={() => markAsDone(todo.id)} />
                                        </ListItemIcon>
                                        <ListItemText primary={todo.task} />
                                    </ListItemButton>
                                    <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => deleteTodo(todo.id)}>Delete</Button>
                                </ListItem>
                                <div>
                                </div>
                            </span>
                        ))}
                    </List>
                    <br /><br />
                    <Button variant="contained" color="secondary" onClick={markAllAsDone} size="small">Mark All As Done</Button>
                </CardContent>
            </Card>
        </>
    );
}