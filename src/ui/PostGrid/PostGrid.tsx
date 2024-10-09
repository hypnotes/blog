"use client";

import { tempData } from "@data/postList";
import { Box, Grid2 as Grid } from "@mui/material";
import { Card } from "@ui/Card/Card";
import { useAtomValue } from "jotai";
import { currentTheme } from "../_stores/theme";

export const PostGrid = () => {
  const isDark = useAtomValue(currentTheme) === "dark";
  return (
    <Box maxWidth={"80%"}>
      <Grid container spacing={2}>
        {tempData
          .filter((data) => data.isDark === isDark)
          .map((data) => {
            return (
              <Grid key={data.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card item={data} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
