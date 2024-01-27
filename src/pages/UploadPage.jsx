import { useState, useRef } from "react";
import cloudUploadIcon from "../assets/cloudUploadIcon.svg";
import FormControl from "../ui/FormControl";
import trash from "../assets/deleteIcon.svg";
import fileIcon from "../assets/fileIcon.svg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    console.log(selectedFiles);
  };

  const handleDeleteFile = (event) => {
    event.preventDefault();
    setSelectedFiles([]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles(files);
  };
  return (
    <div>
      <div
        className=" flex w-full flex-col items-center rounded-[20px] border-[1px]  border-dashed border-dark132 pb-[90px] pt-[90px] text-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={cloudUploadIcon} className="mb-10" alt="" />
        <h2 className="mb-2  text-[22px] font-normal text-black">
          Choose a file or drag and drop it here
        </h2>
        <h3 className="mb-10 font-satoshi text-xl font-medium text-[#848484]">
          JPEG, PNG, PDF formats
        </h3>
        <input
          type="file"
          onChange={handleFileSelect}
          multiple
          style={{ display: "none" }}
          ref={fileInputRef}
        />

        <button
          onClick={() => fileInputRef.current.click()}
          className="rounded-lg border-[1px] border-solid border-dark132 px-[57px] py-[23px] font-satoshi text-lg font-medium text-black"
        >
          Browse File
        </button>
      </div>
      {selectedFiles.length !== 0 && (
        <div className="bg-dark238 mt-[60px] flex items-center justify-between rounded-[20px] py-[46px] pl-8 pr-[52px]">
          <div className="flex items-center">
            <div className="relative flex h-[96px] w-[118px] justify-end">
              <div className="absolute left-0 top-[40px] z-20 min-w-[70px] rounded-lg bg-[#2ECC71] px-[4.5px] py-[1.5px] text-center font-satoshi text-2xl font-medium text-white">
                {selectedFiles[0].name.split(".")[1].toUpperCase()}
              </div>
              <img src={fileIcon} alt="" className=" " />
            </div>
            <div>
              <h3 className="mb-2 text-[22px] font-medium text-black">
                {selectedFiles[0].name.split(".")[0]}
              </h3>
              <h5 className="font-satoshi text-xl font-medium text-[#848484]">
                5 MB of 5 MB
              </h5>
            </div>
          </div>
          <button onClick={handleDeleteFile}>
            <img src={trash} alt="" />
          </button>
        </div>
      )}
      <div className="mt-[60px] flex flex-col gap-y-10">
        <FormControl>
          <label htmlFor="title">Name of Certificate</label>
          <input
            type="text"
            id="title"
            placeholder="Type in certificate name"
          />
        </FormControl>
        <FormControl>
          <label htmlFor="issuer-name">Name of Issuer</label>
          <input
            type="text"
            placeholder="Type in name of issuer"
            id="issuer_name"
          />
        </FormControl>
        <div className="flex items-center gap-x-8">
          <FormControl>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />
          </FormControl>
          <FormControl>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option value="" defaultValue={true}>
                Input category
              </option>
            </select>
          </FormControl>
        </div>
      </div>
      <div className="flex justify-end gap-x-6 font-satoshi text-lg font-medium">
        <button
          className="rounded-lg border-[1px] border-solid border-black px-[40px] py-[16px]"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button className="rounded-lg bg-primaryColor px-[40px] py-[16px] text-white">
          Save
        </button>
      </div>
    </div>
  );
}

export default UploadPage;
