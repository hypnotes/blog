"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export const TriggerErrorButton = ({
  link,
  title,
}: {
  link: string;
  title: string;
}) => {
  return (
    <Link href={link}>
      <Button>{title}</Button>
    </Link>
  );
};
