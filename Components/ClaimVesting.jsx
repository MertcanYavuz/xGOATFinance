// React ve diğer gerekli kütüphanelerin import edilmesi
import React, { useState, useEffect, useRef } from "react";
import { BigNumber, providers, utils } from "ethers";
import Head from "next/head";
import Web3Modal from "web3modal";
import styles from "../styles/VestingHome.module.css";

// Utils dosyalarından fonksiyonların import edilmesi
import { claimToken } from "../Utils/claimVesting";
import {
  getBeneficaryTotalBalance,
  getClaimedBalance,
  getAvailableBalance,
  getLockedAmount,
  getNextPeriodDate,
  getIsClaimingEnabled,
} from "../Utils/getters";

// Home komponenti
export default function Home() {
  // State tanımlamaları
  const [loading, setLoading] = useState(false);
  const zero = BigNumber.from(0);
  const [isClaimingEnabled, setIsClaimingEnabled] = useState(false);
  const [beneficaryTotalBalance, setBeneficaryTotalBalance] = useState(zero);
  const [claimedBalance, setClaimedBalance] = useState(zero);
  const [availableBalance, setAvailableBalance] = useState(zero);
  const [lockedAmount, setLockedAmount] = useState(zero);
  const [nextPeriodDate, setNextPeriodDate] = useState(zero);

  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);

  // Veri çekme fonksiyonu
  const fetchData = async () => {
    try {
      const provider = await getProviderOrSigner(false);
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();

      const _beneficaryTotalBalance = await getBeneficaryTotalBalance(signer, address);
      const _claimedBalance = await getClaimedBalance(signer, address);
      const _availableBalance = await getAvailableBalance(signer, address);
      const _lockedAmount = await getLockedAmount(signer, address);
      const _nextPeriodDate = await getNextPeriodDate(signer);
      const _isClaimingEnabled = await getIsClaimingEnabled(provider);

      setBeneficaryTotalBalance(_beneficaryTotalBalance);
      setClaimedBalance(_claimedBalance);
      setAvailableBalance(_availableBalance);
      setLockedAmount(_lockedAmount);
      setNextPeriodDate(_nextPeriodDate);
      setIsClaimingEnabled(_isClaimingEnabled);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Token talep etme fonksiyonu
    const claimTokens = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      setLoading(true);
      if (isClaimingEnabled) {
        const signer = await getProviderOrSigner(true);
        setLoading(true);
        await claimToken(
          signer
        );
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  /*const claimTokens = async () => {
    try {
      if (isClaimingEnabled) {
        const signer = await getProviderOrSigner(true);
        setLoading(true);

        await claimToken(
          signer
        );
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
*/
  // Provider veya Signer alma fonksiyonu
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      throw new Error("Change network to Sepolia");
    }

    return needSigner ? web3Provider.getSigner() : web3Provider;
  };

  // Component mount edildiğinde çalışacak fonksiyon
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "Sepolia",
      providerOptions: {},
      disableInjectedProvider: false,
    });
    if (!walletConnected) {
      connectWallet().then(fetchData);
    }
  }, [walletConnected]);

  // Cüzdan bağlantı fonksiyonu
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };

  // JSX yapısı
  return (
    <div className={styles.container}>
      <Head>
        <title>GOAT Finance</title>
        <meta name="description" content="GOAT Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>GOAT FINANCE</h1>
        <div className={styles.description}></div>
        {walletConnected ? (
          <div>
            <p>Total Balance: {utils.formatEther(beneficaryTotalBalance)} GOAT</p>
            <p>Claimed Balance: {utils.formatEther(claimedBalance)} GOAT</p>
            <p>Available for Claim: {utils.formatEther(availableBalance)} GOAT</p>
            <p>Locked Balance: {utils.formatEther(lockedAmount)} GOAT</p>
            <p>Next Vesting Date: {new Date(Date.now() + (nextPeriodDate || 0) * 1000).toDateString()}</p>
            <button onClick={claimTokens} disabled={loading}>
              {loading ? "Processing..." : "Claim Tokens"}
            </button>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
    </div>
  );
}



/*
import React, { useState, useEffect, useRef } from 'react';
import { BigNumber, providers, utils } from 'ethers';
import Web3Modal from 'web3modal';
import Head from 'next/head';
import styles from '../styles/VestingHome.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  getRole,
  getBeneficaryTotalBalance,
  getClaimedBalance,
  getRemainingBalance,
  getAvailableBalance,
  getLockedAmount,
  getNextPeriodDate,
  getGOATTokenBalance,
  getIsClaimingEnabled
} from '../Utils/getters';

export default function ClaimVesting() {
  const [loading, setLoading] = useState(false);
  const zero = BigNumber.from(0);

  const [role, setRole] = useState(zero);
  const [beneficaryTotalBalance, setBeneficaryTotalBalance] = useState(zero);
  const [claimedBalance, setClaimedBalance] = useState(zero);
  const [remainingBalance, setRemainingBalance] = useState(zero);
  const [availableBalance, setAvailableBalance] = useState(zero);
  const [lockedAmount, setLockedAmount] = useState(zero);
  const [nextPeriodDate, setNextPeriodDate] = useState(zero);
  const [goatTokenBalance, setGoatTokenBalance] = useState(zero);
  const [isClaimingEnabled, setIsClaimingEnabled] = useState(false);

  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);

  const notify = (message, type = 'error') => {
    if (type === 'error') {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const getAmounts = async () => {
    setLoading(true);
    try {
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();

      const _role = await getRole(signer, address);
      const _beneficaryTotalBalance = await getBeneficaryTotalBalance(signer, address);
      const _claimedBalance = await getClaimedBalance(signer, address);
      const _remainingBalance = await getRemainingBalance(signer, address);
      const _availableBalance = await getAvailableBalance(signer, address);
      const _lockedAmount = await getLockedAmount(signer, address);
      const _nextPeriodDate = await getNextPeriodDate(signer);
      const _goatTokenBalance = await getGOATTokenBalance(signer, address);
      const _isClaimingEnabled = await getIsClaimingEnabled(signer);

      setRole(_role);
      setBeneficaryTotalBalance(_beneficaryTotalBalance);
      setClaimedBalance(_claimedBalance);
      setRemainingBalance(_remainingBalance);
      setAvailableBalance(_availableBalance);
      setLockedAmount(_lockedAmount);
      setNextPeriodDate(_nextPeriodDate);
      setGoatTokenBalance(_goatTokenBalance);
      setIsClaimingEnabled(_isClaimingEnabled);
    } catch (err) {
      notify('Failed to fetch data. Check your connection and try again.');
      console.error(err);
    }
    setLoading(false);
  };

  const claimToken = async () => {
    if (isClaimingEnabled) {
      try {
        setLoading(true);
        const signer = await getProviderOrSigner(true);
        await claimToken(signer);
        notify('Tokens claimed successfully!', 'success');
      } catch (err) {
        notify('Failed to claim tokens.');
        console.error(err);
      }
      setLoading(false);
    } else {
      notify('Claiming not enabled.');
    }
  };

  const connectWallet = async () => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 11155111) {  // Assuming 11155111 is the Sepolia testnet chain ID
        notify("Please switch to the Sepolia network", 'error');
        throw new Error("Change network to Sepolia");
      }

      setWalletConnected(true);
    } catch (err) {
      notify('Failed to connect wallet.');
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "Sepolia",
        cacheProvider: true,  // Enable caching to reuse provider
        providerOptions: {}  // Specify any specific provider options here if needed
      });
      connectWallet();
    }
  }, [walletConnected]);

  useEffect(() => {
    if (walletConnected) {
      getAmounts();
    }
  }, [walletConnected]);

  const renderButton = () => {
    if (!walletConnected) {
      return <button onClick={connectWallet} className={styles.button}>Connect your wallet</button>;
    }

    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }

    return (
      <div>
        <ToastContainer />
        <div className={styles.description}>
          {`Total Balance: ${utils.formatEther(beneficaryTotalBalance)} GOAT`}
          {`Claimed Balance: ${utils.formatEther(claimedBalance)} GOAT`}
          {`Unclaimed Balance: ${utils.formatEther(remainingBalance)} GOAT`}
          {`Claimable Balance: ${utils.formatEther(availableBalance)} GOAT`}
          {`Locked Balance: ${utils.formatEther(lockedAmount)} GOAT`}
          {`Next Installment/Vesting Date: ${nextPeriodDate ? new Date(nextPeriodDate.toNumber() * 1000).toDateString() : 'Not available'}`}
          <button onClick={claimToken} className={styles.button}>Claim</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>GOAT Finance</title>
        <meta name="description" content="GOAT Project vesting page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.title}>GOAT FINANCE</h1>
        {renderButton()}
      </div>
    </div>
  );
},
*/
