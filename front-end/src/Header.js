import Logo from "./Logo.js";
import Generations from "./Generations.js";

const Header = ({ text, handleClick }) => {
  return (
    <>
      <h1>Header</h1>
      <p>{text}</p>
      <Logo handleClick={handleClick} />
      <Generations />
    </>
  );
};

export default Header;
