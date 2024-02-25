import styles from './CardContainer.module.css'


const CardContainer = (props: any) => {
    return <div className={styles.cardContainer}>{props.children}</div>
}

export default CardContainer