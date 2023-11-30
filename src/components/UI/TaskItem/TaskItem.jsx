import styles from "./TaskItem.module.css";
import { useState } from "react";



export default function TaskItem({task}) {

    const [active, setActive] = useState(false);

    return (
        <div
            className={styles.list_item}
            onPointerEnter={() => setActive(true)}
            onPointerLeave={() => setActive(false)}
        >
            <h1 className={styles.task_title}>{task.title}</h1>
            <h2 className={styles.task_body}>{task.body}</h2>
            <h2 className={styles.task_deadline}>Deadline: {task.deadline}</h2>
            <div className={active ? styles.task_tools : styles.unvisible_mode}>
                <span>Options:</span>
                <button className={styles.tools_btn}>Del</button>
                <button className={styles.tools_btn}>Edit</button>
                <button className={styles.tools_btn}>Done!</button>
            </div>
        </div>
    );
}