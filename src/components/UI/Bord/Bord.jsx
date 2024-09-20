import Button from "../Button/Button"
import styles from "./Bord.module.scss"
export default function Bord() {
    return (
        <>
        <div className={styles.body}>
            <h1 className={styles.h1}>جدیدترین دوره‌های آنلاین</h1>
            <div></div>
            <Button>بیشتر</Button>
        </div>
        </>
    )
}