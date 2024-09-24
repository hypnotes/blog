import { FlexContainer } from "@/ds/containers/Container";
import { MoreButton } from "@/ui/home/MoreButton/MoreButton";
import { TriggerErrorButton } from "@/ui/home/TriggerErrorButton/TriggerErrorButton";
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
      <FlexContainer>
        <MoreButton />
        <TriggerErrorButton title={"Not Found"} link={"/asdfasdf"} />
        <TriggerErrorButton title={"No Post"} link={"/post/asdfasdf"} />
      </FlexContainer>
    </div>
  );
}
