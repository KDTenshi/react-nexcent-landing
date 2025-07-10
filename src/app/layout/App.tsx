import type { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
