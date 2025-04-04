import { useState } from "react"
import styles from "./CategoriesPage.module.css"

function CategoriesPage() {

    const [query, setQuery] = useState({
        difficulty: "",
        time: ""
    })

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name

        setQuery(queries => ({ ...queries, [name]: value }))
    }

    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select name="difficulty" value={query.difficulty} onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="">Easy</option>
                        <option value="">Medium</option>
                        <option value="">Hard</option>
                    </select>
                    <select name="time" value={query.time} onChange={changeHandler}>
                        <option value="">Cooking Time</option>
                        <option value="">More than 30 mins</option>
                        <option value="">Less than 30 mins</option>
                    </select>
                    <button onClick={searchHandler}>search</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage