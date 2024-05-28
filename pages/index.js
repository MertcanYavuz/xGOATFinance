import React from "react";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  //Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  //Team,
  RoadMap,
  Partner,
  //Tradepng,
  Vercel,
  //BTCUSDTPricing,
  Tier,
  TokenSale,
  TeamMember,
  Robot,
  ClaimVesting,
  Telegram,
  CommunityMembers,
  Karalama,
} from "../Components/index";

const Index = ({ address, setAddress, connectWallet, transferNativeToken }) => {
  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <Tier />
      <Distribution />
      <Vercel />
      <Telegram />
      <RoadMap />
      <Client />
      <Robot />
      <ClaimVesting />
      <MobileApp />
      <TeamMember />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
