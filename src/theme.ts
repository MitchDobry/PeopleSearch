import { createTheme } from "@material-ui/core/styles";

export const spacing = 8;
export const smallBorderRadius = 4;
export const bigBorderRadius = 10;
export const drawerWidth = 270;

export const colors = {
  // main
  primary: "#7938E1",
  secondary: "#F6C8C1",
  error: "#EB5757",
  info: "#2F80ED",
  success: "#219653",
  border: "#F2F2F2",
  // basic
  black: "#1E1A26",
  white: "#fff",
  pink: "#EF86AE",
  // types
  background: {
    secondary: "#FBFBFB",
    gray: "#BDBDBD",
    paper: "#EFF0F6",
    primary: "#BC9BF0",
    info: "rgba(47, 128, 237, .25) ",
    success: "rgba(111, 207, 151, .38) ",
    error: "rgba(235, 87, 87, .43) ",
    orange: "rgba(255,	114,	28, .38)",
  },
};
export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Helvetica", "Arial", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: 64,
      lineHeight: "66px",
      fontWeight: 900,
      letterSpacing: "1px",
    },
    h2: {
      fontSize: 64,
      lineHeight: "66px",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h3: {
      fontSize: 48,
      lineHeight: "50px",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h4: {
      fontSize: 32,
      lineHeight: "34px",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h5: {
      fontSize: 24,
      lineHeight: "38px",
      letterSpacing: "0.75px",
    },
    h6: {
      fontSize: 18,
      lineHeight: "32px",
      letterSpacing: "0.75px",
    },
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.75px",
    },
    body2: {
      fontSize: "12px !important",
      lineHeight: "24px",
      letterSpacing: "0.75px",
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "0.75px",
    },
    subtitle2: {
      fontSize: "12px !important",
      lineHeight: "24px",
      fontWeight: 600,
      letterSpacing: "0.75px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 2200,
    },
  },
  palette: {
    common: {
      black: colors.black,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    background: {
      default: colors.white,
      paper: colors.background.paper,
    },
  },
  shape: {
    borderRadius: smallBorderRadius,
  },
  spacing: spacing,
});
