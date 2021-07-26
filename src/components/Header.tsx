import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as Talkout } from "../assets/Talkout.svg";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Box display="flex" width="100%" alignItems="center">
      <Box display="flex" pr={1}>
        <Talkout width="36" height="36" />
      </Box>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
}
