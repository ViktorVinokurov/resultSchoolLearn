import styles from './button.module.css';

const MButton = ({children, className, onClick}) => {
    return <button className={[styles.btn, className].join(' ')} onClick={onClick}>{children}</button>
}

export default MButton