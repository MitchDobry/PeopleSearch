import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";
import { Header } from "./Header";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <Box p={2} display="flex" flexDirection="column">
      <Header title={title} />
      <Box pt={2}>{children}</Box>
    </Box>
  );
}
