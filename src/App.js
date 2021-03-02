import { Header } from "./components/Header/header.elements";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <NavBar />
      </Header>
      <Hero />
    </>
  );
}

export default App;
