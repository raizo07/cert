/* eslint-disable react/prop-types */
import certificate from "../../assets/certificate.png";
function CertificateCard({ title, date_issued, issuer, isGrid }) {
  return (
    <div
      className={`text-black border-[1px] border-solid border-[#f7f7f7] shadow-md  overflow-hidden rounded-lg ${!isGrid && "flex gap-x-2 items-center shadow-md"}`}
    >
      <img src={certificate} alt="" />
      <div className="p-3">
        <h3 className="text-[22px] font-medium">{title}</h3>
        <h4 className="font-satoshi my-2 text-xl font-medium text-[#848484]">
          {date_issued}
        </h4>
        <h6 className="font-satoshi  text-xl font-normal">{issuer}</h6>
      </div>
    </div>
  );
}

export default CertificateCard;
