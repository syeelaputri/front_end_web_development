import Logo from "./Logo.js";
import Generations from "./Generations.js";

const Header = ({ handleClick }) => {
  return (
    <>
      <h1>Header</h1>
      <Logo handleClick={handleClick} />
      <Generations />
    </>
  );
};

export default Header;
