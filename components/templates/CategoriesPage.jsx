import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Card from "../modules/Card"

import styles from "./CategoriesPage.module.css"

function CategoriesPage({ foods }) {

    const router = useRouter()

    const [query, setQuery] = useState({
        difficulty: "",
        time: ""
    })

    useEffect(() => {
        const { difficulty, time } = router.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({ difficulty, time })
        }
    }, [])

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name

        setQuery(queries => ({ ...queries, [name]: value }))
    }

    const searchHandler = () => {
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
                <div className={styles.cards}>
                    {!foods.length ?
                        <img src="/images/search.png" alt="category" className={styles.mapImg} /> : null
                    }
                    {
                        foods?.map(food => <Card key={food.id} {...food} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage