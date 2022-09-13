import React, { useState } from "react";
import PurchaseModel from "../models/PurchaseModel";
import PurchaseItem from "./PurchaseItem";

function PurchaseList(props) {
  const [items, setItems] = useState([
    new PurchaseModel(1, "Pizza"),
    new PurchaseModel(2, "Juice"),
    new PurchaseModel(3, "Coconat"),
    new PurchaseModel(4, "Soup"),
  ]);

  const onItemToggle = (item) => {
    setItems((prevItems) =>
      prevItems.map((o) => {
        if (o.id === item.id) {
          return { ...o, done: !o.done };
        }
        return o;
      })
    );
  };

  const onItemRemove = (item) => {
    setItems((prevItems) => prevItems.filter((o) => o.id !== item.id));
  };

  return (
    <ul>
      {items.map((o) => (
        <PurchaseItem
          key={o.id}
          item={o}
          onToggle={onItemToggle}
          onRemove={onItemRemove}
        />
      ))}
    </ul>
  );
}

export default PurchaseList;
