import Search from "./Search.js";
import CardInfo from "./Card-Info.js";

const Home = ({ text, number }) => {
  return (
    <>
      <h1>Home</h1>
      <p>{text}</p>
      <p>{number}</p>
      <Search />
      <CardInfo />
    </>
  );
};

export default Home;
