import React, { FC } from "react";
import { Button, ButtonProps, Tooltip } from "@material-ui/core";
import styled from "@emotion/styled";
import { colors } from "../theme";

const AppButtonStyled = styled(Button)`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: ${(props) =>
    props.disabled
      ? props.variant === "outlined"
        ? colors.pink
        : `${colors.white} !important`
      : null};
  background-clip: ${(props) => (props.variant === "text" ? "text" : null)};
  -webkit-background-clip: ${(props) =>
    props.variant === "text" ? "text" : null};
  -webkit-text-fill-color: ${(props) =>
    props.variant === "text" ? colors.pink : null};

  &:hover {
    background: ${(props) =>
      props.variant === "outlined"
        ? `linear-gradient(${colors.white},${colors.white}) padding-box, linear-gradient(25.18deg, ${colors.primary} 0%, ${colors.primary} 61.58%, ${colors.primary} 100%) border-box;`
        : props.variant === "text"
        ? "transparent"
        : colors.primary};
    border: ${(props) =>
      props.variant === "outlined" ? "2px solid transparent" : null};
    -webkit-text-fill-color: ${(props) =>
      props.variant === "text" || props.variant === "outlined"
        ? colors.primary
        : null};
    box-shadow: none;
  }
`;

export interface AppButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  tooltipText?: string;
}

const AppButton: FC<AppButtonProps> = ({
  children,
  variant,
  tooltipText,
  ...rest
}) => (
  <Tooltip title={tooltipText ?? ""}>
    <AppButtonStyled variant={variant} {...rest}>
      {children}
    </AppButtonStyled>
  </Tooltip>
);

export default AppButton;
