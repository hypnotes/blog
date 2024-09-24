"use client";

import { FlexContainer } from "@ds/containers/Container";
import Image from "next/image";
import LogoImage from "@assets/LOGO.svg";
import styled from "styled-components";
import { Button, IconButton, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { currentTheme } from "../_stores/theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import Link from "next/link";

export const MainHeader = () => {
  const [theme, setTheme] = useAtom(currentTheme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Container>
      <LeftHeader>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <LogoArea>
            <Image src={LogoImage} alt="logo" width={30} height={30} />
            <Typography variant="h5">HYPNOTES</Typography>
          </LogoArea>
        </Link>
        {/* <NavContainer>
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {link.name}
              </Link>
            );
          })}
        </NavContainer> */}
      </LeftHeader>
      <RightHeader>
        <IconButton onClick={toggleTheme}>
          {theme === "dark" ? <DarkMode /> : <LightMode />}
        </IconButton>
        <Button variant="outlined">Contact</Button>
      </RightHeader>
    </Container>
  );
};

const Container = styled(FlexContainer)`
  height: 60px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const LogoArea = styled(FlexContainer)`
  gap: 10px;
`;

const LeftHeader = styled(FlexContainer)`
  gap: 10px;
`;
const RightHeader = styled(FlexContainer)`
  gap: 10px;
`;

// const NavContainer = styled(FlexContainer)`
//   width: 360px;
//   gap: 40px;
//   margin: 0 60px;
// `;
