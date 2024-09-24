"use client";
import { useParams } from "next/navigation";
import { tempData } from "@data/postList";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

const PostDetailPage = () => {
  const { id } = useParams();
  console.log(id);

  const item = tempData.find((data) => data.index === Number(id));

  return (
    <div>
      <Link
        href={"/posts"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ArrowBack />
      </Link>
      <h1>{item?.title}</h1>
      {item?.image && (
        <Image src={item?.image} alt={"thumbnail"} width={400} height={200} />
      )}
      <p>{item?.desc}</p>
    </div>
  );
};

export default PostDetailPage;
