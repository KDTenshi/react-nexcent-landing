import type { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Clients } from "../../components/Clients";
import { Community } from "../../components/Community";
import { Unlock } from "../../components/Unlock";
import { Achievments } from "../../components/Achievments";
import { Calender } from "../../components/Calender";
import { Customers } from "../../components/Customers";
import { Updates } from "../../components/Updates";
import { Demo } from "../../components/Demo";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="Body">
        <Banner />
        <Clients />
        <Community />
        <Unlock />
        <Achievments />
        <Calender />
        <Customers />
        <Updates />
        <Demo />
      </main>
      <Footer />
    </div>
  );
};

export default App;
