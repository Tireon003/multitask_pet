import styles from '../styles/Dashboard.module.css';
import TaskSection from './TaskSection';
import { useState } from 'react';


export default function Dashboard() {

    const titles = ["High", "Medium", "Low"];
    
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
                {titles.map(title => <TaskSection  titlePriority={title}/>)}
            </main>
        </>
    );
}