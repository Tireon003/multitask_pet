import styles from '../styles/Dashboard.module.css';
import TaskSection from './TaskSection';



export default function Dashboard() {
    
    return (
        <>
            <header className={styles.Dashboard_header}>
                <div className={styles.dashboard_header_left}>
                    <h1 className={styles.header_label}>Dashboard</h1>
                    <span className={styles.header_addtask}>Add new</span>
                </div>
                <div className={styles.header_useroptions}>
                    <span className={styles.header_user_name}>tireon</span>
                    <button className={styles.header_user_logout_btn}>Log out</button>
                </div>
            </header>
            <main className={styles.main_wrapper}>
                <TaskSection  priority={"High priority"}/>
                <TaskSection  priority={"Medium priority"}/>
                <TaskSection  priority={"Low priority"}/>
            </main>
        </>
    );
}