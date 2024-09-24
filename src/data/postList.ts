import ReactImage from "@assets/posts/react.png";
import JotaiImage from "@assets/posts/jotai.png";
import Green from "@assets/posts/green.png";
import Library from "@assets/posts/library.png";
import Cafe from "@assets/posts/cafe.png";
import { StaticImageData } from "next/image";

export type PostDataProps = {
  title: string;
  desc: string;
  image?: StaticImageData;
  index: number;
  isDark: boolean;
};

export const tempData: Array<PostDataProps> = [
  {
    index: 0,
    isDark: true,
    title: "React",
    desc: "Showcasing the best part of react.\nA gentler reminder for developers who might\nhave forgotten these features.\nAndwhat should I add in this place",
    image: ReactImage,
  },
  {
    index: 1,
    isDark: true,
    title: "Starting this blog",
    desc: "Why did I start this?\nI wanted to make a playground for my new\ndev knowledeges.\nBut I wanted to make it real pretty\nI know I should be adding new nice features.",
  },
  {
    index: 2,
    isDark: true,
    title: "Developer Retrospect",
    desc: "Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  printer took a galley of type and sc",
  },
  {
    index: 3,
    isDark: true,
    title: "React",
    desc: "Showcasing the best part of react.\nA gentler reminder for developers who might\nhave forgotten these features.\nAndwhat should I add in this place",
  },
  {
    index: 4,
    isDark: true,
    title: "Jotai",
    desc: "An in depth learn into jotai atoms\nHow it was made, where it can be used\nNow take a look at its variants and cool features",
    image: JotaiImage,
  },
  {
    index: 5,
    isDark: true,
    title: "Starting this blog",
    desc: "Why did I start this?\nI wanted to make a playground for my new\ndev knowledeges.\nBut I wanted to make it real pretty\nI know I should be adding new nice features.",
  },
  {
    index: 6,
    isDark: false,
    title: "도서관!",
    desc: "Showcasing the best part of react.\nA gentler reminder for developers who might\nhave forgotten these features.\nAndwhat should I add in this place",
    image: Library,
  },
  {
    index: 7,
    isDark: false,
    title: "Starting this blog",
    desc: "Why did I start this?\nI wanted to make a playground for my new\ndev knowledeges.\nBut I wanted to make it real pretty\nI know I should be adding new nice features.",
  },
  {
    index: 8,
    isDark: false,
    title: "Developer Retrospect",
    desc: "Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc",
  },
  {
    index: 9,
    isDark: false,
    title: "Another Green Place ",
    desc: "Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  printer took a galley of type and sc",
    image: Green,
  },
  {
    index: 10,
    isDark: false,
    title: "Work from Cafe ",
    desc: "Showcasing the best part of react.\nA gentler reminder for developers who might\nhave forgotten these features.\nAndwhat should I add in this place",
    image: Cafe,
  },
  {
    index: 11,
    isDark: false,
    title: "Developer Retrospect",
    desc: "Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  printer took a galley of type and sc",
  },
];
