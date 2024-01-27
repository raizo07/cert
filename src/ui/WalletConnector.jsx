import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { connect, disconnect } from "get-starknet";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";
import argent from "../assets/argentLogo.svg";

function WalletConnector() {
  const { dispatch, address, connection, loading } = useConnectWallet();
  const [displayAddress, setDisplayAddress] = useState(true);
  const navigate = useNavigate();

  async function onConnect() {
    const response = await connectWallet(dispatch, connect);
    if (response) {
      navigate("app");
    }
    return;
  }

  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
  }

  return (
    <>
      {!connection?.isConnected ? (
        <button
          className="round-[8px] flex w-[240px] items-center justify-center rounded-lg bg-primaryColor py-[16px] text-center text-lg font-medium uppercase text-white disabled:cursor-not-allowed"
          onClick={onConnect}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      ) : (
        <button
          className="flex  items-center gap-x-3 rounded-lg border-[1px] border-solid border-[#8E44AD] bg-white px-8 py-4 font-satoshi text-[22px] font-normal text-black"
          onMouseEnter={() => setDisplayAddress(false)}
          onMouseLeave={() => setDisplayAddress(true)}
          onClick={onDisconnect}
        >
          {!displayAddress ? (
            loading ? (
              <SpinnerMini />
            ) : (
              "Disconnect Wallet"
            )
          ) : (
            <>
              <img src={argent} className="h-[32px] w-[32px]" alt="" />
              <span>{address.slice(0, 10).concat("...")}</span>
            </>
          )}
        </button>
      )}
    </>
  );
}

export default WalletConnector;
