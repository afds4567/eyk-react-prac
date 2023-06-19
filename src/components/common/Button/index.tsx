import { toPropValue } from "../../../../src/utils/styles";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: string;
  backgroundColor?: string;
  pseudoClass?: {
    hover?: {
      backgroundColor?: string;
    };
    disabled?: {
      backgroundColor?: string;
    };
  };
  children: React.ReactNode;
};

const variants = {
  primary: {
    color: "white",
    backgroundColor: "blue",
    border: "none",
    pseudoClass: {
      hover: {
        backgroundColor: "darkblue",
      },
      disabled: {
        backgroundColor: "lightblue",
      },
    },
  },
  secondary: {
    color: "white",
    backgroundColor: "green",
    border: "none",
    pseudoClass: {
      hover: {
        backgroundColor: "darkgreen",
      },
      disabled: {
        backgroundColor: "lightgreen",
      },
    },
  },
};

const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass }) => {
    if (variant && variants[variant]) {
      const styles = [];
      !color && styles.push(toPropValue("color", variants[variant].color));
      !backgroundColor &&
        styles.push(
          toPropValue("background-color", variants[variant].backgroundColor)
        );
      !pseudoClass &&
        styles.push(
          `&:hover { ${toPropValue(
            "background-color",
            variants[variant].pseudoClass.hover.backgroundColor
          )} }`
        );
      !pseudoClass &&
        styles.push(
          `&:disabled { ${toPropValue(
            "background-color",
            variants[variant].pseudoClass.disabled.backgroundColor
          )} }`
        );
      return styles.join(";\n");
    }
  }};
  ${(props) => toPropValue("color", props.color)};
  cursor: pointer;
  outline: 0;
  text-decoration: "none";
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border-radius: 4px;
  border: none;
  border: ${({ theme }) => `${theme.colors.border} solid 1px`};
`;

// Button.defaultProps = {
//   color: "white",
//   backgroundColor: "blue",
// };

export default Button;
