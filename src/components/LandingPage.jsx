import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {

    return (
        <>
            <header className={styles.LandingHeader}>
                <div className={styles.HeaderBody}>
                    <span className={styles.HeaderLogo}>MultiTask</span>
                    <nav className={styles.HeaverNav}>
                        <button className={styles.HeaderNavButton}>Sign Up</button>
                        <button className={styles.HeaderNavButton}>Sign In</button>
                    </nav>
                </div>
            </header>
            <div className={styles.LandingContent}>
                <h1 className={styles.ContentTitle}>MultiTask - удобный инструмент для Time-Management.</h1>
            </div>
            <div className={styles.ContentAdvantages}>
                <h2 className={styles.AdvantegesTitle}>Что мы даем нашим пользователям:</h2>
                <div className={styles.AdvantegesWrapper}>

                    <div className={styles.AdvantageItem}>
                        Удобные инструменты для создания и редактирования задач
                    </div>
                    <div className={styles.AdvantageItem}>
                        Добавление сроков выполнения задач
                    </div>
                    <div className={styles.AdvantageItem}>
                        Настройка приоритета задачи
                    </div>
                    <div className={styles.AdvantageItem}>
                        Удобный адаптивный интерфейс
                    </div>
                    <div className={styles.AdvantageItem}>
                        Качественный, а главное бесплатный сервис
                    </div>
                    <div className={styles.AdvantageItem}>
                        Постоянная поддержка проекта и его улучшение
                    </div>
                </div>
            </div>
            <footer className={styles.LandingFooter}>
                <span className={styles.FooterSpan}>Pet project by Tireon003</span>
            </footer>
        </>
    )
}