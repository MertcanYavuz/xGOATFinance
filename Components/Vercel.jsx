
import React, { useState, useEffect, useRef } from 'react';
import { BigNumber, providers, utils } from 'ethers';
import Web3Modal from 'web3modal';
import styles from '../styles/Home.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { buyToken } from '../Utils/buyToken';
import {
  getMinPurchase,
  getMaxPurchase,
  getTokenPriceRate,
  getUSDTTokenBalance,
  getTokenSold,
  getMaxSaleLimit,
  getBeneficaryTotalBalance,
  getUSDTAllowance,
} from '../Utils/getters';

function ICOComponent() {
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const zero = BigNumber.from(0);
  const web3ModalRef = useRef();

  const [minPurchase, setMinPurchase] = useState(BigNumber.from(0));
  const [maxPurchase, setMaxPurchase] = useState(BigNumber.from(0));
  const [tokenPriceRate, setTokenPriceRate] = useState(BigNumber.from(0));
  const [usdtTokenBalance, setUsdtTokenBalance] = useState(BigNumber.from(0));
  const [tokenSold, setTokenSold] = useState(BigNumber.from(0));
  const [maxSaleLimit, setMaxSaleLimit] = useState(BigNumber.from(0));
  const [buyAmount, setBuyAmount] = useState("");  // USDT miktarını temsil eden değer
  const [beneficaryTotalBalance, setBeneficaryTotalBalance] = useState(BigNumber.from(0));
  const [estimatedTokens, setEstimatedTokens] = useState(BigNumber.from(0)); // Tahmini GOAT token miktarını tutacak state
  const [usdtAllowance, setUsdtAlowance] = useState(BigNumber.from(0));
  
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "Sepolia",
      providerOptions: {},
      disableInjectedProvider: false,
    });
  }, []);

  useEffect(() => {
    if (tokenPriceRate.gt(0) && buyAmount) {
      const usdtAmount = BigNumber.from(utils.parseUnits(buyAmount, 6));
      const tokens = usdtAmount.mul(BigNumber.from(10).pow(12)).div(tokenPriceRate);
      setEstimatedTokens(tokens);
      process = 111.11; // 1 usdt karşılık gelen 
    }
  }, [buyAmount, tokenPriceRate]);

  const connectWallet = async () => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 11155111) {
        alert("Please switch to the Sepolia network in MetaMask.");
        await provider.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0xabc323'}]});
        throw new Error("Incorrect network");
      }
      setWalletConnected(true);
      const signer = web3Provider.getSigner();
      fetchDetails(signer);
        } catch (error) {
      if (error.code === 4001) {
     //   toast.success("Başarılı: Tokenlar başarıyla satın alındı!");  // Başarı mesajı
        console.error("Wallet connection denied:", error);
      } else {
    //    toast.error("Hata: Token alımı başarısız!");  // Hata mesajı
        console.error("Failed to connect wallet:", error);
      }
    }
  };

  const fetchDetails = async (signer) => {
    const provider = signer.provider;
    const address = await signer.getAddress();
    const _usdtAllowance = await getUSDTAllowance(provider, address);
    setUsdtAlowance(_usdtAllowance);
    setMinPurchase(await getMinPurchase(provider, address));
    setMaxPurchase(await getMaxPurchase(provider, address));
    setTokenPriceRate(await getTokenPriceRate(provider, address));
    setUsdtTokenBalance(await getUSDTTokenBalance(provider, address));
    setTokenSold(await getTokenSold(provider));
    setMaxSaleLimit(await getMaxSaleLimit(provider));
    setBeneficaryTotalBalance(await getBeneficaryTotalBalance(provider, address));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!value || Number(value) < 0 || Number(value) > 50000 ) {
      setBuyAmount("");  // Eğer değer negatifse veya boşsa, buyAmount'i boş string yap
    } else {
      setBuyAmount(value);
    }
  };

  const buyTokens = async () => {
    if (!buyAmount || Number(buyAmount) <= 0) return;  // Eğer buyAmount boşsa veya 0 veya negatifse fonksiyonu sonlandır
    setLoading(true);
    try {
      const signer = await getProviderOrSigner(true);
      const buyAmountDecimals = utils.parseUnits(buyAmount, 6);
      let allowanceAmount = usdtAllowance * 1;
      await buyToken(signer, buyAmountDecimals,allowanceAmount);
      fetchDetails(signer);
      toast.success("Başarılı: Tokenlar başarıyla satın alındı!");  // Başarı mesajı
    } catch (error) {
      console.error("Error buying tokens:", error);
      toast.error("Hata: Token alımı başarısız!");  // Hata mesajı
    }
    setLoading(false);
    setBuyAmount("");
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    return needSigner ? web3Provider.getSigner() : web3Provider;
  };

  // Calculate sale progress
  const saleProgress = maxSaleLimit.gt(BigNumber.from(0))
    ? tokenSold.mul(100).div(maxSaleLimit).toNumber()
    : 0;

    return (
      <div>
      <div id ="saless"
      className={styles.tokenSaleContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailColumn}>
                  <p>Min Purchase Limit: {utils.formatUnits(minPurchase, 6)} USDT</p>
                  <p>Max Purchase Limit: {utils.formatUnits(maxPurchase, 6)} USDT</p>
                  <p>Your USDT Balance: {utils.formatUnits(usdtTokenBalance, 6)} USDT</p>
          </div>
          <div className={styles.mainContent}>
          <h1 className={styles.mainContentt}></h1>
            {!walletConnected ? (
              <button onClick={connectWallet} className={styles.button}>
                Connect Your Wallet
              </button>

            ) : (
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  placeholder="Enter USDT amount"
                  value={buyAmount}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <button onClick={buyTokens} disabled={loading} className={styles.button}>
                  Buy Tokens →
                </button>
                <div className={styles.inputDiv}>
                  <p>1 GOAT = 0.009 USDT</p>
                  <p>SALES = {buyAmount * 111.11} GOAT</p>
                </div>
              </div>
            )}
            <div className={styles.progressContainer}>
              
              <div className={styles.progressBar} style={{ width: `${(tokenSold / maxSaleLimit) * 100}%` }}></div>
              <span className={styles.progressLabel}>{((tokenSold / maxSaleLimit) * 100).toFixed(2)}%</span>
              
            </div>
          </div>
          
          <div className={styles.detailColumn}>
          <p>Sale Raised: {utils.formatUnits(tokenSold, 18)} GOAT</p>
                  <p>You have tokens: {utils.formatEther(beneficaryTotalBalance)} GOAT</p>
                  <p>Soft Caps: {utils.formatUnits(maxSaleLimit, 18)} GOAT</p>
                  
          </div>
        </div>
      </div>
      </div>
    );
  }

export default ICOComponent;


/*
import React, { useState, useEffect, useRef } from 'react';
import { BigNumber, providers, utils } from 'ethers';
import Web3Modal from 'web3modal';
import styles from '../styles/Home.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { buyToken } from '../Utils/buyToken';
import {
  getMinPurchase,
  getMaxPurchase,
  getTokenPriceRate,
  getUSDTTokenBalance,
  getTokenSold,
  getMaxSaleLimit,
  getBeneficaryTotalBalance,
  getUSDTAllowance,
} from '../Utils/getters';

function ICOComponent() {
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const zero = BigNumber.from(0);
  const web3ModalRef = useRef();

  const [minPurchase, setMinPurchase] = useState(BigNumber.from(0));
  const [maxPurchase, setMaxPurchase] = useState(BigNumber.from(0));
  const [tokenPriceRate, setTokenPriceRate] = useState(BigNumber.from(0));
  const [usdtTokenBalance, setUsdtTokenBalance] = useState(BigNumber.from(0));
  const [tokenSold, setTokenSold] = useState(BigNumber.from(0));
  const [maxSaleLimit, setMaxSaleLimit] = useState(BigNumber.from(0));
  const [buyAmount, setBuyAmount] = useState("");  // USDT miktarını temsil eden değer
  const [beneficaryTotalBalance, setBeneficaryTotalBalance] = useState(BigNumber.from(0));
  const [estimatedTokens, setEstimatedTokens] = useState(BigNumber.from(0)); // Tahmini GOAT token miktarını tutacak state
  const [usdtAllowance, setUsdtAlowance] = useState(BigNumber.from(0));
  
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "Sepolia",
      providerOptions: {},
      disableInjectedProvider: false,
    });
  }, []);

  useEffect(() => {
    if (tokenPriceRate.gt(0) && buyAmount) {
      const usdtAmount = BigNumber.from(utils.parseUnits(buyAmount, 6));
      const tokens = usdtAmount.mul(BigNumber.from(10).pow(12)).div(tokenPriceRate);
      setEstimatedTokens(tokens);
      process = 111.11; // 1 usdt karşılık gelen 
    }
  }, [buyAmount, tokenPriceRate]);

  const connectWallet = async () => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 11155111) {
        alert("Please switch to the Sepolia network in MetaMask.");
        await provider.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0xabc323'}]});
        throw new Error("Incorrect network");
      }
      setWalletConnected(true);
      const signer = web3Provider.getSigner();
      fetchDetails(signer);
    } catch (error) {
      if (error.code === 4001) {
        console.error("Wallet connection denied:", error);
      } else {
        console.error("Failed to connect wallet:", error);
      }
    }
  };

  const fetchDetails = async (signer) => {
    const provider = signer.provider;
    const address = await signer.getAddress();
    const _usdtAllowance = await getUSDTAllowance(provider, address);
    setUsdtAlowance(_usdtAllowance);
    setMinPurchase(await getMinPurchase(provider, address));
    setMaxPurchase(await getMaxPurchase(provider, address));
    setTokenPriceRate(await getTokenPriceRate(provider, address));
    setUsdtTokenBalance(await getUSDTTokenBalance(provider, address));
    setTokenSold(await getTokenSold(provider));
    setMaxSaleLimit(await getMaxSaleLimit(provider));
    setBeneficaryTotalBalance(await getBeneficaryTotalBalance(provider, address));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!value || Number(value) < 0 || Number(value) > 500 ) {
      setBuyAmount("");  // Eğer değer negatifse veya boşsa, buyAmount'i boş string yap
    } else {
      setBuyAmount(value);
    }
  };

  const buyTokens = async () => {
    if (!buyAmount || Number(buyAmount) <= 0) return;  // Eğer buyAmount boşsa veya 0 veya negatifse fonksiyonu sonlandır
    setLoading(true);
    try {
      const signer = await getProviderOrSigner(true);
      const buyAmountDecimals = utils.parseUnits(buyAmount, 6);
      let allowanceAmount = usdtAllowance * 1;
      await buyToken(signer, buyAmountDecimals,allowanceAmount);
      fetchDetails(signer);
    } catch (error) {
      console.error("Error buying tokens:", error);
    }
    setLoading(false);
    setBuyAmount("");
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    return needSigner ? web3Provider.getSigner() : web3Provider;
  };

  // Calculate sale progress
  const saleProgress = maxSaleLimit.gt(BigNumber.from(0))
    ? tokenSold.mul(100).div(maxSaleLimit).toNumber()
    : 0;

    return (
      <div className={styles.tokenSaleContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailColumn}>
                  <p>Min Purchase Limit: {utils.formatUnits(minPurchase, 6)} USDT</p>
                  <p>Max Purchase Limit: {utils.formatUnits(maxPurchase, 6)} USDT</p>
                  <p>Your USDT Balance: {utils.formatUnits(usdtTokenBalance, 6)} USDT</p>
          </div>
          <div className={styles.mainContent}>
          <h1 className={styles.mainContentt}>Token Sale</h1>
            {!walletConnected ? (
              <button onClick={connectWallet} className={styles.button}>
                Connect Your Wallet
              </button>

            ) : (
              <div className={styles.inputGroup}>
                <input
                  type="number"
                  placeholder="Enter USDT amount"
                  value={buyAmount}
                  onChange={handleInputChange}
                  className={styles.input}
                />
                <button onClick={buyTokens} disabled={loading} className={styles.button}>
                  Buy Tokens →
                </button>
                <div className={styles.inputDiv}>
                  <p>1 GOAT = 0.09 USDT</p>
                  <p>SALES = {buyAmount * 111.11} GOAT</p>
                </div>
              </div>
            )}
            <div className={styles.progressContainer}>
              
              <div className={styles.progressBar} style={{ width: `${(tokenSold / maxSaleLimit) * 100}%` }}></div>
              <span className={styles.progressLabel}>{((tokenSold / maxSaleLimit) * 100).toFixed(2)}%</span>
              
            </div>
          </div>
          
          <div className={styles.detailColumn}>
          <p>Sale Raised: {utils.formatUnits(tokenSold, 18)} GOAT</p>
                  <p>You have tokens: {utils.formatEther(beneficaryTotalBalance)} GOAT</p>
                  <p>Soft Caps: {utils.formatUnits(maxSaleLimit, 18)} GOAT</p>
                  
          </div>
        </div>
      </div>
    );
  }

export default ICOComponent;




*/


/*


<p>Sold/Max Sale: {utils.formatEther(tokenSold)}/{utils.formatEther(maxSaleLimit)} GOAT Token</p>   tamamı satılan 


import React, { useState, useEffect, useRef } from "react";
import { BigNumber, providers, utils } from "ethers";
import Head from "next/head";
import Web3Modal from "web3modal";
import styles from "../styles/Home.module.css";

import { buyToken } from "../Utils/buyToken";
import { claimToken } from "../Utils/claimVesting";
import {
  getRole,
  getBeneficaryTotalBalance,
  getClaimedBalance,
  getMinPurchase,
  getMaxPurchase,
  getTokenSold,
  getRemainingBalance,
  getTokenPriceRate,
  getAvailableBalance,
  getLockedAmount,
  getNextPeriodDate,
  getUSDTAllowance,
  getGOATTokenBalance,
  getUSDTTokenBalance,
  getVestingScheduleMap,
  getIsClaimingEnabled,
  getMaxSaleLimit
} from "../Utils/getters";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [vestingTab, setVestingTab] = useState(true);
  const zero = BigNumber.from(0);

  const [role, setRole] = useState(zero);
  const [beneficaryTotalBalance, setBeneficaryTotalBalance] = useState(zero);
  const [claimedBalance, setClaimedBalance] = useState(zero);
  const [minPurchase, setMinPurchase] = useState(zero);
  const [maxPurchase, setMaxPurchase] = useState(zero);
  const [tokenSold, setTokenSold] = useState(zero);
  const [remainingBalance, setRemainingBalance] = useState(zero);
  const [tokenPriceRate, setTokenPriceRate] = useState(zero);
  const [availableBalance, setAvailableBalance] = useState(zero);
  const [lockedAmount, setLockedAmount] = useState(zero);
  const [nextPeriodDate, setNextPeriodDate] = useState(zero);
  const [usdtAllowance, setUsdtAllowance] = useState(zero);
  const [goatTokenBalance, setGoatTokenBalance] = useState(zero);
  const [usdtTokenBalance, setUsdtTokenBalance] = useState(zero);
  const [buyAmount, setBuyAmount] = useState("");
  const [goatTokenToBeReceived, setGoatTokenToBeReceived] = useState(zero);
  const [vestingScheduleMap, setVestingScheduleMap] = useState(zero);
  const [isClaimingEnabled, setIsClaimingEnabled] = useState(false);
  const [maxSaleLimit, setMaxSaleLimit] = useState(false);

  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);

  const getAmounts = async () => {
    try {
      const provider = await getProviderOrSigner(false);
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();

      const _role = await getRole(provider, address);
      const _beneficaryTotalBalance = await getBeneficaryTotalBalance(provider, address);
      const _claimedBalance = await getClaimedBalance(provider, address);
      const _minPurchase = await getMinPurchase(provider, address);
      const _maxPurchase = await getMaxPurchase(provider, address);
      const _tokenSold = await getTokenSold(provider);
      const _remainingBalance = await getRemainingBalance(provider, address);
      const _tokenPriceRate = await getTokenPriceRate(provider, address);
      const _availableBalance = await getAvailableBalance(provider, address);
      const _lockedAmount = await getLockedAmount(provider, address);
      const _nextPeriodDate = await getNextPeriodDate(provider);
      const _usdtAllowance = await getUSDTAllowance(provider, address);
      const _goatTokenBalance = await getGOATTokenBalance(provider, address);
      const _usdtTokenBalance = await getUSDTTokenBalance(provider, address);
      const _vestingScheduleMap = await getVestingScheduleMap(provider, address);
      const _isClaimingEnabled = await getIsClaimingEnabled(provider);
      const _maxSaleLimit = await getMaxSaleLimit(provider);

      setRole(_role);
      setBeneficaryTotalBalance(_beneficaryTotalBalance);
      setClaimedBalance(_claimedBalance);
      setMinPurchase(_minPurchase);
      setMaxPurchase(_maxPurchase);
      setTokenSold(_tokenSold);
      setRemainingBalance(_remainingBalance);
      setTokenPriceRate(_tokenPriceRate);
      setAvailableBalance(_availableBalance);
      setLockedAmount(_lockedAmount);
      setNextPeriodDate(_nextPeriodDate);
      setUsdtAllowance(_usdtAllowance);
      setGoatTokenBalance(_goatTokenBalance);
      setUsdtTokenBalance(_usdtTokenBalance);
      setVestingScheduleMap(_vestingScheduleMap);
      setIsClaimingEnabled(_isClaimingEnabled);
      setMaxSaleLimit(_maxSaleLimit);

    } catch (err) {
      console.error(err);
    }
  };
  

  const _buyTokens = async () => {
    try {
      const buyAmountDecimals = buyAmount * 10 ** 6;
      if (!buyAmountDecimals == 0) {
        const signer = await getProviderOrSigner(true);
        setLoading(true);
        let allowanceAmount = usdtAllowance * 1;
        await buyToken(
          signer,
          buyAmountDecimals,
          allowanceAmount
        );
        setLoading(false);

        setBuyAmount("");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setBuyAmount("");
    }
  };
  const _claimToken = async () => {
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

  const _getAmountOfGOATTokensReceived = async (_buyAmount) => {
    try {
      if (!_buyAmount == 0) {
        const amountOfTokens = _buyAmount * tokenPriceRate / 10 ** 12; // 10**18 / 10**6 = 10**12
        setGoatTokenToBeReceived(amountOfTokens);
      } else {
        setGoatTokenToBeReceived(zero);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      window.alert("Change the network to Sepolia");
      throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "Sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
      getAmounts();
    }
  }, [walletConnected]);

  const renderButton = () => {
    if (!walletConnected) {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }

    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }

   if (vestingTab) {
      return (
        <div>
          <div className={styles.description}>
            <div>
              <div className={styles.inputDiv}>
                <br />
                {`Total Balance: ${utils.formatEther(beneficaryTotalBalance)} GOAT`}
                <br />
                <br />
                {`Claimed Balance: ${utils.formatEther(claimedBalance)} GOAT`}
                <br />
                <br />
                {`Unclaimed Balance: ${(beneficaryTotalBalance - claimedBalance) / 10 ** 18} GOAT`}
                <br />
                <br />
                {`Claimable Balance: ${utils.formatEther(availableBalance)} GOAT`}
                <br />
                <br />
                {`Locked Balance: ${utils.formatEther(lockedAmount)} GOAT`}
                <br />
                <br />
                {`Next Installment/Vesting Date: ${new Date(Date.now() + (nextPeriodDate || 0) * 1000).toDateString()}`}
                <br />
              </div>
              <button className={styles.button1} onClick={_claimToken}>
                Claim
              </button>
            </div>
          </div>
        </div> 
      );
    } else {
      return (
        <div>
         <input
            type="number"
         placeholder="Amount"
         onChange={async (e) => {
         // Check if the entered value is a valid number or empty string
         if (!isNaN(e.target.value) || e.target.value === "") {
         // Check if the entered value is non-negative
         const inputValue = parseFloat(e.target.value);
         if (inputValue >= 0) {
         setBuyAmount(inputValue.toString()); // Convert back to string to preserve leading zeros
          await _getAmountOfGOATTokensReceived(inputValue.toString());
        }
          }
            }}
        className={styles.input}
        value={buyAmount}
        />

          <br />
          <div className={styles.inputDiv}>
            {`1GOAT = ${(1 / (utils.formatEther(tokenPriceRate) * 10 ** 6)).toFixed(3)}USDT`}
            <br />
            {`1USDT = ${(utils.formatEther(tokenPriceRate) * 10 ** 6)}GOAT`}
            <br />
            {`Your USDT Balance = ${usdtTokenBalance / 10 ** 6}USDT`}
            <br />
            <br />
            {`Min Purchase Limit: ${minPurchase / 10 ** 6}USDT`}
            <br />
            {`Max Purchase Limit: ${maxPurchase / 10 ** 6}USDT`}
            <br />
            <br />
            {`You have: ${utils.formatEther(beneficaryTotalBalance)} GOAT`}
            <br />
            <br />
            {`You will get: ${goatTokenToBeReceived} GOAT Token `}
            <br />
            <br />
            {`VESTING SCHEDULE => TGE:%${vestingScheduleMap[0]} Cliff:${vestingScheduleMap[1] / 86400}(Day) Period:${vestingScheduleMap[2] / 86400}(Day) Installments:${vestingScheduleMap[3]} `}
            <br />
            <br />
            {`Sold/Max Sale: ${utils.formatEther(tokenSold)}/${(maxSaleLimit / 10**18)} GOAT Token `}
          </div>
          
          <div className="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
            <div className="progress-bar progress-bar-striped gradient" role="progressbar" aria-valuenow={((tokenSold / maxSaleLimit) * 100).toFixed(2)} aria-valuemin="0" aria-valuemax="100" style={{ width: `${((tokenSold / maxSaleLimit) * 100).toFixed(2)}%` }}>
              {`${((tokenSold / maxSaleLimit) * 100).toFixed(2)}%`}
            </div>
            <span className="progress_label bg-white inline_style_1"><strong> {utils.formatEther(tokenSold)}</strong></span>
            <span className="progress_label bg-white inline_style_2"><strong> {utils.formatEther(maxSaleLimit)}</strong></span>
            <span className="progress_min_val">Sale Raised</span>
            <span className="progress_max_val">Soft Caps</span>
          </div>
          <button className={styles.button1} onClick={_buyTokens}>
            Buy
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>GOAT Finance</title>
        <meta name="description" content="GOAT Project" />
        <link rel="icon" href="" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>GOAT FINANCE</h1>
          <div className={styles.description}>
            Vesting & ICO test
          </div>
          <form action="#buy" method="post" className="field_form" name="enq"></form>
          <div>
            <button
              className={styles.button}
              onClick={() => {
                setVestingTab(true);
              }}
            >
              Vesting
            </button>
            <button
              className={styles.button}
              onClick={() => {
                setVestingTab(false);
              }}
            >
              ICO
            </button>
          </div>
          {renderButton()}
        </div>
      </div>
    </div>
  );
}
*/
