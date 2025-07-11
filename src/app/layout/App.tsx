import type { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Clients } from "../../components/Clients";
import { Community } from "../../components/Community";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="Body">
        <Banner />
        <Clients />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
