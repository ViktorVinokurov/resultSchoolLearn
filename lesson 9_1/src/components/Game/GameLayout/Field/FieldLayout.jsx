import styles from './field.module.css'
import { useSelector } from 'react-redux'
const FieldLayout = ({setField}) => {
    const field = useSelector(state => state.field)
    const isGameEnded = useSelector(state => state.isGameEnded)
    return (<div className={styles.field}>
        {field.map((f,i) => <div key={i} className={`${styles.card} ${!!f && `${styles[`card${f}`]} ${styles.disabled}`} ${isGameEnded && styles.disabled}`} onClick={()=>setField(i)}></div>)}
    </div>)
}

export default FieldLayout