import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";
const Header = ({ toggle, setToggle }) => {
  const changeHandler = () => setToggle(!toggle);
  return (
    <Container onClick={changeHandler}>
      <Image
        fluid
        src={reactLogo}
        width="250px"
        className="image-header"
      ></Image>
      <p className="transform-p">{toggle ? "Click Me" : "Clicked!"}</p>
    </Container>
  );
};

export default Header;
