import { tempData } from "@/data/postList";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { Suspense } from "react";

const PostsPage = () => {
  return (
    <div>
      <h1>All Posts</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default PostsPage;

const PostList = () => {
  return (
    <Box display={"block"}>
      {tempData.map((item) => (
        <Link key={item.index} href={`/posts/${item.index}`}>
          <Button fullWidth variant="outlined" style={{ margin: 10 }}>
            {item.title}
          </Button>
          <br />
        </Link>
      ))}
    </Box>
  );
};
