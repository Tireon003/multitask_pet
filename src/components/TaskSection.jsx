import styles from "../styles/TaskSection.module.css";
import TaskItem from "./UI/TaskItem";

export default function TaskSection({priority}) {

    return (
        <section className={styles.main_list_section}>
            <span className={styles.list_task_priority}>{priority}</span>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </section>
    );
}