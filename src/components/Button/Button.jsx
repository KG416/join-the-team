import styles from './Button.module.scss'

const Button = ({
  as: Component = 'button',
  children,
  onClick = () => {},
  variant = 'primary'
}) => {
  return (
    <Component onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </Component>
  )
}

export default Button
