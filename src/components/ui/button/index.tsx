import React from "react";
import styles from "./button.module.scss";

type Proptypes = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  variant: string;
  className?: string;
};

const Button = (props: Proptypes) => {
  const { type, onClick, children, variant = "primary", className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
