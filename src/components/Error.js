import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      <h1>OOPS!! PAGE OPENS</h1>
      <h1> {error.status}: {error.data}</h1>
    </>
  );
};
export default Error;
