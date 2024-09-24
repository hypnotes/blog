import { MoreButton } from "@/ui/home/MoreButton/MoreButton";
import { PostGrid } from "@ui/PostGrid/PostGrid";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Showcases</h1>
      <PostGrid />
      <MoreButton />
    </div>
  );
}
