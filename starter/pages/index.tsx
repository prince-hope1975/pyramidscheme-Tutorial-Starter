import React, { useState, useEffect } from "react";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import { useGlobalContext } from "../context";
import { Container, Button } from "../Components/Components";
import { GiGreatPyramid } from "react-icons/gi";
import styled from "styled-components";
import styles from "../styles/Home.module.scss";
import * as backend from "../main/index.main.mjs";
import { Message } from "../Components/formDialogue";
import Link from "../node_modules/next/link";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const deadline = reach.connector === "CFX" ? 500 : 250;
const ctcInfo = `YOUR CONTRACT ADDRESS`;

const Home = () => {
  const { state, message, account, ctc, handlePopup, isConnected } =
    useGlobalContext();
  const [isMyAlgo, setMyAlgo] = useState(true);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const deploy = async () => {
    const acc = account.contract(backend);
    try {
      await acc.p.Deployer({
        price: reach.parseCurrency(1),
        ready: () => {
          console.log("The contract is ready to interact");
          throw 42;
        },
        deadline: deadline,
      });
    } catch (e) {
      if (e !== 42) throw e;
    }
    const info = await acc.getInfo();
    console.log(JSON.stringify(info, null, 2));
  };

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
        <section className={styles.section2}></section>
      </div>
    </Container>
  );
};

export const Head = () => {
  const { isConnected, setConnected, setAccount, setContract, handlePopup } =
    useGlobalContext();
  const pop = () => {
    if (!isConnected) {
      handlePopup("Cannot check balance!!! \n You need to register first ");
    }
  };
  const connectAcct = async () => {
    try {
      const newAccount = await reach.getDefaultAccount();
      setConnected(true);
      console.log(newAccount);
      setAccount(newAccount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.header}>
      <p>
        <GiGreatPyramid />
      </p>
      <div>
        <a href="#register">register</a>
        <a href="#balance" onClick={pop}>
          balance
        </a>
      </div>
      <Button onClick={connectAcct}>
        {!isConnected ? "connect" : "Connected"}
      </Button>
    </div>
  );
};

export default Home;
