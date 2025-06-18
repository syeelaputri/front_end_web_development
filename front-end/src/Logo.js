const Logo = ({ handleClick }) => {
  return (
    <>
      <h1>Logo</h1>
      {/* click event */}
      <button onClick={handleClick}>Click me</button>
      {/* button ini hanya sampai logo di header, bukan card-info */}
    </>
  );
};

export default Logo;
