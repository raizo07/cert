/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import WalletConnector from "./WalletConnector";
import { useConnectWallet } from "../context/ConnectContext";

function Navbar({ mode }) {
  const { connection } = useConnectWallet();
  return (
    <nav
      className={`py-5 px-16 flex justify-between items-center bg-transparent font-satoshi ${mode === "light" ? "text-black" : "text-white"}`}
    >
      <Logo mode={mode} />
      {connection?.isConnected && (
        <ul className="text-[22px] font-normal flex items-center gap-x-7">
          <li>
            <NavLink to={"/app/files"}>Files</NavLink>
          </li>
          <li>
            <NavLink to={"/app/upload"}>Upload</NavLink>
          </li>
        </ul>
      )}
      <WalletConnector />
    </nav>
  );
}

export default Navbar;
