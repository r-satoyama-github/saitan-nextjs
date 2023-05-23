import styled from "styled-components";
import { ColumnContainer } from "../containers/ColumnContainer";
import { RowContainer } from "../containers/RowContainer";
import { memo, useContext, useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Text } from "@/components/texts/Text";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "next/image";
import { CountStatusContext } from "../providers/CountStatusProvider";

export const Order = function Order(props) {
  const { orderItems } = props;
  const [items, setItems] = useState(orderItems);

  const context = useContext(CountStatusContext);
  const { count, setCount, isComplete, setIsComplete } = context;

  console.log("Order");
  const onClickUp = (number, index) => {
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    setItems([...items]);
    if (IsOrdered(items.length, items)) {
      setIsComplete(true);
    }
    setCount(count + 1);
  };
  const onClickDown = (number, index) => {
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    console.log(items);
    setItems([...items]);
    if (IsOrdered(items.length, items)) {
      setIsComplete(true);
    }
    setCount(count + 1);
  };

  return (
    <>
      {console.log("Order Rendered", items)}
      <ColumnContainer id="list">
        {items.map((item, index) => {
          return (
            <SItemRowContainer
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <Image
                src="/triangle.svg"
                onClick={() => onClickDown(item, index)}
                width={30}
                height={30}
                style={{ rotate: "180deg" }}
                alt="DOWN"
              />
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.id}
              </Text>
              <Image
                src="/triangle.svg"
                onClick={() => onClickUp(item, index)}
                width={30}
                height={30}
                alt="UP"
              />
            </SItemRowContainer>
          );
        })}
        {isComplete && <Text>Complete!</Text>}
      </ColumnContainer>
    </>
  );
};
const IsOrdered = (until, items) => {
  for (let i = 0; i < until; i++) {
    if (items[i].id != i + 1) {
      return false;
    }
  }
  return true;
};

const SItemRowContainer = styled(RowContainer)`
  background-color: var(--yellow-50);
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;
