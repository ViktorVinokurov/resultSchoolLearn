
import { useMemo } from 'react'
import styles from './information.module.css'

const InformationLayout = ({currentPlayer, isDraw, isGameEnded, setRestart}) => {
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