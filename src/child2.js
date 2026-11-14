const Child2 = (props) => {
  const {name,age,clg}=props.o
  return (
    <>
      <h1>child2</h1>
      <h1>{name}</h1>

      <h1>{age}</h1>
      <h1>{clg}</h1>
    </>
  );
};
export default Child2;
