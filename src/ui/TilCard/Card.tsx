"use client";

import styled from "styled-components";
import { Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { PostDataProps } from "@/data/postList";

export const TilCard = ({ item }: { item: PostDataProps }) => {
  const { palette } = useTheme();

  return (
    <Link
      href={`/posts/${item.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Container>
        <Typography variant="h6">{item.title}</Typography>
        <Typography
          variant="caption"
          color="secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.desc}
        </Typography>
      </Container>
    </Link>
  );
};

const Container = styled("div")({
  border: "1px solid gray",
  padding: "24px",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.3s",
  height: "100px",
  width: "200px",
  "&:hover": {
    height: "120px",
    width: "220px",
  },
});
