import { Footer, NavBar } from "@/app/layouts";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from ".";

interface IProp {
  children: React.ReactNode;
}

function Provider({ children }: IProp) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default Provider;
