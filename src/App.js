import { Header } from "./components/Header/header.elements";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import About from "./components/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <NavBar />
      </Header>
      <Hero />
      <About />
    </>
  );
}

export default App;
