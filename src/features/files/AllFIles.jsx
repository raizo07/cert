/* eslint-disable react/prop-types */
import CertificateCard from "./CertificateCard";

function AllFIles({ isGrid }) {
  const grid_class =
    "grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[72px] gap-y-[56px]";
  const flex_class = "flex flex-col items-center gap-y-[56px]";
  return (
    <div className="py-[24px]">
      <h1 className="text-[28px] font-medium text-black mb-6">All Files</h1>
      <div
        className={`${isGrid ? grid_class : flex_class} all-files-container`}
      >
        <CertificateCard
          title={"AI and Machine Learning Proficiency"}
          date_issued={"15/01/2023"}
          issuer={"FutureTech Innovations"}
          isGrid={isGrid}
        />
        <CertificateCard
          title={"AI and Machine Learning Proficiency"}
          date_issued={"15/01/2023"}
          issuer={"FutureTech Innovations"}
          isGrid={isGrid}
        />
        <CertificateCard
          title={"AI and Machine Learning Proficiency"}
          date_issued={"15/01/2023"}
          issuer={"FutureTech Innovations"}
          isGrid={isGrid}
        />
        <CertificateCard
          title={"AI and Machine Learning Proficiency"}
          date_issued={"15/01/2023"}
          issuer={"FutureTech Innovations"}
          isGrid={isGrid}
        />
        <CertificateCard
          title={"AI and Machine Learning Proficiency"}
          date_issued={"15/01/2023"}
          issuer={"FutureTech Innovations"}
          isGrid={isGrid}
        />
      </div>
    </div>
  );
}

export default AllFIles;
