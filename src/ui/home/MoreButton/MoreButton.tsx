import { Button } from "@mui/material";
import Link from "next/link";

export const MoreButton = () => {
  return (
    <Link href="/posts">
      <Button style={{ margin: 40 }}>SEE MORE</Button>
    </Link>
  );
};
