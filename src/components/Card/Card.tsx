import styles from './Card.module.css'
import {Product} from "../../types";

export const Card = ({id, brand, price, product}: Product) => {
    return (<div className={styles.card}>
        <div>{product}</div>
        <div>{brand}</div>
        <div>{price}</div>
        <div>{id}</div>
    </div>)
}

