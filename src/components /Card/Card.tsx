import styles from './Card.module.css'

interface CardProps {
    id: string,
    price: number,
    brand: string | null,
    product: string
}

export const Card = ({id, brand, price, product}:CardProps) => {
    return (<div className={styles.card}>
        <div>{product}</div>
        <div>{brand}</div>
        <div>{price}</div>
        <div>{id}</div>
    </div>)
}

