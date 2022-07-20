import React, { useState, useEffect } from "react";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
} from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";
import * as backend from "../main/index.main.mjs";
import { Container, Button } from "../Components/Components";
import styled from "styled-components";
import { GiGreatPyramid } from "react-icons/gi";
import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";
import FormDialog, { Message } from "../Components/formDialogue";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const deadline = reach.connector === "CFX" ? 500 : 250;
const ctcInfo = `{
  "type": "BigNumber",
  "hex": "0x05898349"
}`;

const Home = () => {
  const { dispatch, state, message, account, ctc, handlePopup } =
    useGlobalContext();
  const [isMyAlgo, setMyAlgo] = useState(true);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState(Data);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setOpen(false);
    await register(await account.getAddress());
  };
  const updateData = async (name: string, address: string, parentAddress) => {
    const newData = data.map((item) => {
      const { address, availableSlots } = item;
      if (address === parentAddress) {
        return { ...item, availableSlots: availableSlots - 1 };
      }
      return item;
    });
    const final = [
      ...newData,
      { name, address, availableSlots: 2, price: "20" },
    ];
    window.localStorage.setItem("userData", JSON.stringify(final));
    setData(final);
    return final;
  };
  const register = async (address: string) => {
    try {
      const obj = data.filter((item) => item.address == address);
      if (obj[0]?.availableSlots == 0) {
        handlePopup("Parent has no empty slots");
        throw 43;
      }
      const accc = await ctc.apis.Schemers.joinPyramid(address);
      console.log("Registration of ", reach.formatAddress(account), accc);
      return setTimeout(async () => {
        updateData(name, await account.getAddress(), address);
      }, 4000);
    } catch (error) {
      console.error(error);
      handlePopup("Unable to register for scheme\n"  + error.toString().slice(0, 200));
     
    }
  };

  // const deploy = async () => {
  //   // const { networkAccount } = state;
  //   const acc = account.contract(backend);
  //   try {
  //     await acc.p.Deployer({
  //       price: reach.parseCurrency(1),
  //       ready: () => {
  //         console.log("The contract is ready to interact");
  //         throw 42;
  //       },
  //       deadline: deadline,
  //     });
  //   } catch (e) {
  //     if (e !== 42) throw e;
  //   }
  //   dispatch({ type: "SET_ACCOUNT", payload: account });
  //   const info = await acc.getInfo();
  //   console.log(JSON.stringify(info, null, 2));
  // };

  useEffect(() => {
    if (isMyAlgo) {
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: "TestNet",
          MyAlgoConnect,
        })
      );
      console.log("My Algo");
    } else {
      reach.setWalletFallback(
        reach.walletFallback({
          providerEnv: "TestNet",
          WalletConnect,
        })
      );
      console.log("Wallet connect");
    }
  }, [isMyAlgo]);

  useEffect(() => {
    const userData: Array<{
      name: string;
      price: string;
      availableSlots: number;
      address: string;
    }> = JSON.parse(window.localStorage.getItem("userData"));
    if (userData) {
      setData(userData);
    }
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <Container className={styles.container}>
      <Message message={message.message} open={message.isOpen} className={``} />

      <div>
        <section className={styles.section}>
          <h1>Invest, refer & grow your income.</h1>
          <div>
            <img src={"/BTC.png"} />
            <img src={"/Eth.png"} />
          </div>
        </section>
        <section className={styles.section2}>
          <span id="register">Join Ranks</span>
          <div>
            {data?.map(({ name, price, availableSlots, address }) => {
              return (
                <div key={name}>
                  <p>{name}</p>
                  <p>${price}</p>
                  <p>
                    {availableSlots} slot{!(availableSlots === 1) && "s"}{" "}
                    available
                  </p>
                  <Button
                    onClick={async () => {
                      try {
                        if (account) {
                          handleClickOpen();
                          setAddress(address);
                        } else {
                          handlePopup("Please connect  Account First");
                        }
                      } catch (error) {
                        setOpen(false);
                        console.error("there is an error");
                      }
                    }}
                  >
                    <Link href={"/"}>Join Chain</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <FormDialog
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
      />
    </Container>
  );
};

const Header = styled.div``;
export const Head = () => {
  const {
    isConnected,
    setConnected,
    account,
    setAccount,
    ctc,
    setContract,
    handlePopup,
  } = useGlobalContext();
  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      setConnected(true);
      const ctc = newAccount.contract(backend, JSON.parse(ctcInfo));
      setContract(ctc);
      setAccount(newAccount);
    } catch (error) {
      // setLoading(!loading);
      console.log(error);
    }
  };
  const withdraw = async () => {
    try {
      const ctc = account.contract(backend, JSON.parse(ctcInfo));
      const withdrawn = await ctc.apis.Schemers.withdraw();
      console.log("Successfully withdrawn", withdrawn);
    } catch (error) {
      console.log(error);
      handlePopup(`${error}`.substring(0, 160) + "...");
    }
  };

  const pop = () => {
    if (!isConnected) {
      handlePopup("Cannot Withdraw!!! \n You need to register first ");
    } else {
      withdraw();
    }
  };
  return (
    <Header className={styles.header}>
      <p>
        <GiGreatPyramid />
      </p>
      <div>
        <a href="#register">register</a>
        <a href="#balance" onClick={pop}>
          balance
        </a>
      </div>
      <Button style={{}} onClick={connectAcct}>
        {!isConnected ? "connect" : "Connected"}
      </Button>
    </Header>
  );
};

const Data = [
  {
    name: "Prince Charles",
    price: "20",
    availableSlots: 1,
    address: "IAWNDP5OXXP7BD7I7QUMUOF35SM3IZWUW755HHDJK2VK25D7TLJY2UZGUE",
  },
];
export default Home;
