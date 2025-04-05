import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";


import styles from "./Guide.module.css";

function Guide() {
    return (
        <div className={styles.container}>
            <Link href="/menu">
                <FaBars style={{ fontSize: "1.1rem", margin: "5px", color: "#53c60b" }} />
                <p>Menu</p>
            </Link>
            <Link href="/categories">
                <MdCategory style={{ fontSize: "1.2rem", margin: "5px", color: "#53c60b" }} />
                <p>Category</p>
            </Link>
            <Link href="/">
                <RiDiscountPercentFill style={{ fontSize: "1.2rem", margin: "5px", color: "#53c60b" }} />
                <p>Discount</p>
            </Link>
        </div>
    );
}

export default Guide;