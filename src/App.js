import Card from "./components/Card";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <Container className="text-center mt-4 p-4">
      {toggle ? (
        <Header toggle={toggle} setToggle={setToggle} />
      ) : (
        <>
          <Header toggle={toggle} setToggle={setToggle} />
          <Card />
        </>
      )}
    </Container>
  );
}

export default App;
