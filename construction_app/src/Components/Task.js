import react, {useState, useEffect} from react;
import axios from 'axios';

function TextTrackList() {
    const [tasks,setTasks] = useState([]);
    const[newTask,setNewTask] = useState('');

    useEffect(()=> {
        axios.get('/tasks').then((repsonse) => setTasks(response.data));
    },[]);

    const addTask = () => {
        axios.post('/tasks', {title:newTask}).then(response => {
            setTasks([...tasks,response.data]);
            setNewTask('');
        });
    };
}

const deleteTask = (id) => {
    axios.delete('/tasks/${id}').then(() =>{
        setTasks(tasks.filter((task) => task.id!==id));

    });
}

return (
    <div> 
        <h1> Task Tracker </h1>
        <input type='text' value = {newTask} onChange={(e) => setNewTask(e.target.value)} 
        placeholder='New Task'> </input>
        <button onCLick = {addTask}>Add Task</button>
        <ul> {tasks.map((task) => (<li key ={tasks.id}>
            {task.title}{''}
            <button onCLick={()=>deleteTask(task.id)}>Delete</button>
        </li>

        ))}
        </ul>
    </div>
);



export default Task;