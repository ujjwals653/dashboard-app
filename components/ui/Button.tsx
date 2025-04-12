import React, { ReactElement } from "react";

interface ButtonProps {
  icon?: ReactElement;
  bgColor?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
  borderRadius?: string;
  width?: string;
  onClick?: () => void;
}

const sizeStyles: Record<"sm" | "md" | "lg", React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "14px" },
  md: { padding: "8px 16px", fontSize: "16px" },
  lg: { padding: "10px 20px", fontSize: "18px" },
};

const Button: React.FC<ButtonProps> = ({
  icon,
  bgColor = "#3498db",
  color = "#ffffff",
  size = "md",
  text = "Click Me",
  borderRadius = "6px",
  width,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color,
        border: "none",
        cursor: "pointer",
        borderRadius: borderRadius,
        width: width,
        ...sizeStyles[size],
      }}
      className="hover:drop-shadow-xl"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
