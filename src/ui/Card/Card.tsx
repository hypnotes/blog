"use client";

import styled from "styled-components";
import Image from "next/image";
import { Typography } from "@mui/material";
import { PostDataProps } from "@/data/postList";
import Link from "next/link";

export const Card = ({ item }: { item: PostDataProps }) => {
  return (
    <Link
      href={`/posts/${item.index}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container>
        <ImageContainer>
          {item.image ? <Image src={item.image} alt={"thumbnail"} /> : <div />}
        </ImageContainer>
        <Typography variant="h5">{item.title}</Typography>
        <Typography color="secondary">{item.desc}</Typography>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  border-radius: 12px;
  border: 1px solid gray;
  padding: 24px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
