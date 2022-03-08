import { GroceryInput } from "./GroceryInput";

import { useState } from "react";
import { AddToList } from "./GroceryList";

export const Grocery = () => {
  const [item, addItem] = useState([]);

  const AddItem = (product) => {
    addItem([...item, product]);
  };

  return (
    <div>
      Welcome To Grocery Shop
      <GroceryInput AddItem={AddItem} />
      {item.map((e) => (
        <AddToList item={e} />
      ))}
    </div>
  );
};
