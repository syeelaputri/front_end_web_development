const Footer = ({ boolean }) => {
  if (boolean) {
    return <h1>Footer</h1>;
  } else {
    return <p>Footer hilang. Ini adalah kondisi false.</p>;
  }
};

export default Footer;
