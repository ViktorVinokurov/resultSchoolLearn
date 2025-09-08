import styles from './field.module.css'
const FieldLayout = ({field, setField, currentPlayer}) => {
    return (<div className={styles.field}>
        {field.map((f,i) => <div key={i} className={`${styles.card} ${!!f && `${styles[`card${f}`]} ${styles.disabled}`}`} onClick={()=>setField(i)}></div>)}
    </div>)
}

export default FieldLayout