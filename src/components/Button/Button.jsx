import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}) {
  const combinedClassName = `
    ${styles.btn} 
    ${variant === "primary" ? styles.primary : styles.outline} 
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
