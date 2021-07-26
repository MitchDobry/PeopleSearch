import styled from "@emotion/styled";
import { Card } from "@material-ui/core";
import { colors, theme } from "../theme";

export const AppCard = styled(Card)`
  background-color: ${colors.white};
  border: 1px solid ${colors.border};,
  box-shadow: 0px 20px 40px rgba(184, 184, 184, 0.12);
  border-radius: 10px;
  padding: ${theme.spacing(2)}px;
  text-align: center;
  color: ${theme.palette.text.primary};
`;
