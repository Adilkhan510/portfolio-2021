import { Header } from "./components/Header/header.elements";
import NavBar from "./components/Navbar";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <NavBar />
      </Header>
    </>
  );
}

export default App;
