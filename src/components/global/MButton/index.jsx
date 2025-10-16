import styles from './button.module.css';

const MButton = ({children, className, onClick, disabled=false}) => {
    return <button className={[styles.btn, className].join(' ')} onClick={onClick} disabled={disabled}>{children}</button>
}

export default MButton