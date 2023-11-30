import { useState } from "react";
import styles from "../styles/TaskSection.module.css";
import TaskItem from "./UI/TaskItem/TaskItem";
import { CurrentUserTasks } from "../api/context";

export default function TaskSection({titlePriority}) {

    const [currentUserTasks, setCorrentUserTasks] = useState([
        {id: 1244, type: "High", title: "Task with high priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1241, type: "Medium", title: "Task with medium priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1224, type: "Medium", title: "Task with medium priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1234, type: "Medium", title: "Task with medium priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1254, type: "High", title: "Task with high priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1444, type: "Medium", title: "Task with medium priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 2244, type: "Low", title: "Task with low priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1144, type: "Low", title: "Task with low priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1644, type: "High", title: "Task with high priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1284, type: "Low", title: "Task with low priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false},
        {id: 1664, type: "Medium", title: "Task with medium priority!", body: "It's a description of this task!", deadline: "01.12.23 12:00:00", status: false}
    ]);

    return (
        <CurrentUserTasks.Provider value={[currentUserTasks, setCorrentUserTasks]}>
            <section className={styles.main_list_section}>
                <span className={styles.list_task_priority}>{titlePriority + " priority"}</span>
                {currentUserTasks.filter(item => item.type === titlePriority).map(item => <TaskItem task={item}/>)}
            </section>
        </CurrentUserTasks.Provider>
        
    );
}