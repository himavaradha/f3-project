const Child = (props) => {
  const { k } = props;
  console.log(k);
  return (
    <>
      <h1>Child</h1>
      <h1>{k[0]}</h1>
      <h1>{k[1]}</h1>
      <h1>{k[2]}</h1>
    </>
  );
};

export default Child;
