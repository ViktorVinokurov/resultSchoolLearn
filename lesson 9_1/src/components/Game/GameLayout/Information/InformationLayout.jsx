
import { useMemo } from 'react'
import styles from './information.module.css'
import { useSelector } from 'react-redux'

const InformationLayout = ({setRestart}) => {
    const isDraw = useSelector(state => state.isDraw);
    const isGameEnded = useSelector(state => state.isGameEnded);
    const currentPlayer = useSelector(state => state.currentPlayer);
    return (
         <div className={styles.info}>
            { isDraw && <span>Ничья</span>}
            { (!isDraw && isGameEnded) && <span>Попеда <b>{currentPlayer}</b></span>}
            { (!isDraw && !isGameEnded) && <span>Ход <b>{currentPlayer}</b></span>}
            <button className={styles.button} onClick={setRestart}>Начать заново</button>
        </div>
    )
}

export default InformationLayout