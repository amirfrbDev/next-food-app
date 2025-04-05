import { useState } from "react"
import styles from "./CategoriesPage.module.css"
import { useRouter } from "next/router"

function CategoriesPage(props) {
    // console.log(props)

    const [query, setQuery] = useState({
        difficulty: "",
        time: ""
    })

    const router = useRouter()

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name

        setQuery(queries => ({ ...queries, [name]: value }))
    }

    const searchHandler = () => {
        // if (!query.difficulty || !query.time) return

        router.push({ pathname: "/categories", query })
    }

    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select name="difficulty" value={query.difficulty} onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select name="time" value={query.time} onChange={changeHandler}>
                        <option value="">Cooking Time</option>
                        <option value="less">Less than 30 mins</option>
                        <option value="more">More than 30 mins</option>
                    </select>
                    <button onClick={searchHandler}>search</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage