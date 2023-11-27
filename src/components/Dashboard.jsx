import styles from '../styles/Dashboard.module.css';



export default function Dashboard() {
    
    return (
        <>
            <header className={styles.Dashboard_header}>
                <div className={styles.dashboard_header_left}>
                    <h1 className={styles.header_label}>Dashboard</h1>
                    <span className={styles.header_addtask}>Add new</span>
                </div>
            </header>
        </>
    );
}