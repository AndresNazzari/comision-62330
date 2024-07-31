import spinner from "./pika.gif";

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
      <p>Loading....</p>
    </div>
  );
};
