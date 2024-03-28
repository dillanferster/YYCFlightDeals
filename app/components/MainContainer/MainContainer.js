import { MainContainerButton } from "./MainContainerButton";
import "./MainContainer.css";
import Link from "next/link";

export function MainContainer() {
  return (
    <div id="MainC" className="flex justify-center px-4 mt-4 w-[62rem] mx-auto">
      <Link href="pages/details">
        <div className="flex bg-[url('/Beach.jpeg')] bg-cover  bg-left justify-end items-end border-2 border-[#696565] border-solid w-[62rem] rounded-2xl h-48 hover:translate-y-[2px] drop-shadow-[_1px_8px_rgba(217,217,217,1)] ease-in-out transition-all hover:drop-shadow-[_1px_6px_rgba(217,217,217,1)] overflow-hidden cursor-pointer [&>*]:hover:backdrop-blur-sm ">
          <MainContainerButton></MainContainerButton>
        </div>
      </Link>
    </div>
  );
}
