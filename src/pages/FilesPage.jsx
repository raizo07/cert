import { useState } from "react";
import FilesControl from "../features/files/FilesControl";
import PageHeading from "../ui/PageHeading";
import NoFiles from "../features/files/NoFiles";
import AllFIles from "../features/files/AllFIles";

function FilesPage() {
  const [isFIles, setIsFiles] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div>
      <PageHeading pageTitle={"Certification Management"} />
      <div className="pt-10">
        <FilesControl isGrid={isGrid} setIsGrid={setIsGrid} />
        {isFIles ? <AllFIles isGrid={isGrid} /> : <NoFiles />}
      </div>
    </div>
  );
}

export default FilesPage;
