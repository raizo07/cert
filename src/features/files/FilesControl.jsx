/* eslint-disable react/prop-types */
import searchIcon from "../../assets/searchIcon.svg";

import { BsArrowDownUp, BsGrid } from "react-icons/bs";
import upload from "../../assets/uploadIcon.svg";
import { useNavigate } from "react-router-dom";

function FilesControl({ isGrid, setIsGrid }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between font-satoshi ">
      <div className="relative w-[800px] overflow-hidden rounded-lg  border-[1px] border-solid border-dark132">
        <img
          src={searchIcon}
          className="absolute right-5 top-[14px] h-6 w-6"
          alt="search-icon"
        />
        <input
          type="text"
          placeholder="Search for by name, category or issuer"
          className="bg-white p-[12px] pr-[60px] text-xl font-normal text-[#848484]"
        />
      </div>
      <div className="flex items-center gap-x-5">
        <button className="rounded-lg border-[1px] border-solid border-dark132 bg-white p-[12px] ">
          <BsArrowDownUp className="h-6 w-6" />
        </button>
        <button
          className={`rounded-lg  border-[1px] border-solid border-dark132 p-[15px] ${isGrid ? "bg-primaryColor" : "bg-white"}`}
          onClick={() => setIsGrid((prev) => !prev)}
        >
          <BsGrid className={`h-6 w-6 ${isGrid && "text-white"}`} />
        </button>
        <button
          className="flex items-center justify-center gap-x-3 rounded-lg bg-primaryColor px-[24px] py-[16px] text-lg font-medium text-white"
          onClick={() => navigate("/app/upload")}
        >
          <img src={upload} alt="" />
          Upload file
        </button>
      </div>
    </div>
  );
}

export default FilesControl;
