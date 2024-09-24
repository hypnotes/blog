import { tempData } from "@/data/postList";
import { Box, Button } from "@mui/material";
import Link from "next/link";

const PostsPage = () => {
  return (
    <div>
      <h1>All Posts</h1>
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
    </div>
  );
};

export default PostsPage;
