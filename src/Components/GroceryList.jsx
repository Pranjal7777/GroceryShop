export const AddToList = ({ item }) => {
  const removeItem = (item) => {
    console.log();
  };

  return (
    <div>
      <span>{item}</span>{" "}
      <button
        onClick={(item) => {
          removeItem();
        }}
      >
        Remove
      </button>
    </div>
  );
};
