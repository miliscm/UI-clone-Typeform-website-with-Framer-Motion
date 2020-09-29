import React from "react";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Main, Section, Sticky } from "./styles";
import FirstAndSecound from "./components/FirstAndSecound";
function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecound />
        </Section>
        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>
        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

export default App;
