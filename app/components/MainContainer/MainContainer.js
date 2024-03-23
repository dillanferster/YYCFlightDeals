import { MainContainerButton } from "./MainContainerButton";
import "./MainContainer.css";

export function MainContainer() {
  return (
    <div id="MainC" className="flex justify-center px-4 mt-4 w-[62rem] mx-auto">
      <div className="flex bg-[url('/Beach.jpeg')] bg-cover  bg-left justify-end items-end border-2 border-[#696565] border-solid w-[62rem] rounded-[70px] h-48 hover:translate-y-1 drop-shadow-[_1px_10px_rgba(217,217,217,1)] ease-in-out transition-all hover:drop-shadow-[_1px_8px_rgba(217,217,217,1)] overflow-hidden cursor-pointer [&>*]:hover:backdrop-blur-sm ">
        <MainContainerButton></MainContainerButton>
      </div>
    </div>
  );
}
