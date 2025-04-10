import Link from "next/link";

import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

import styles from "./Card.module.css";

function Card(props) {

    const { id, name, price, details, discount } = props;

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={`/images/${id}.jpeg`} alt={`${name} food image`} />
                {discount ? <div className={styles.badge}>{discount}%</div> : null}
            </div>
            <div className={styles.details}>
                <h4>{name}</h4>
                <div>
                    <Location />
                    {details[0].Cuisine}
                </div>
            </div>
            <div className={styles.price}>
                <Dollar />
                {discount ? (
                    <span className={styles.discount}>
                        {(price * (100 - discount)) / 100}$
                    </span>
                ) : (
                    <span>{price}$</span>
                )}
            </div>
            <Link href={`/menu/${id}`}>See Details</Link>
        </div>
    );
}

export default Card;