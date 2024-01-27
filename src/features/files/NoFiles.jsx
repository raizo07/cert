import { useNavigate } from "react-router-dom";
import docIcon from "../../assets/docIcon.png";
import upload from "../../assets/uploadIcon.svg";

function NoFiles() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center pt-[80px] text-center">
      <img src={docIcon} alt="" />
      <div className="w-[588px]">
        <h2 className="mb-2 mt-5 text-[28px] font-normal text-black">
          You have no certificate saved yet
        </h2>
        <p className="font-satoshi text-xl font-medium text-[#848484]">
          Oops! It seems yout certificate depository is empty. Time to fill it
          up with your achievements by uploading your certificates.
        </p>
      </div>
      <button
        className="mt-10 flex items-center justify-center gap-x-3 rounded-lg bg-primaryColor px-10 py-[16px] text-lg font-medium text-white"
        onClick={() => navigate("/app/upload")}
      >
        <img src={upload} alt="" />
        Upload file
      </button>
    </div>
  );
}

export default NoFiles;
