import styled from "styled-components";
import { ColumnContainer } from "../containers/ColumnContainer";
import { RowContainer } from "../containers/RowContainer";
import { memo, useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Text } from "@/components/texts/Text";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "next/image";

export const Order = memo(function Order(props) {
  const { countUp, setIsComplete } = props;
  /** 重複チェック用配列 */
  //   const userItems = [1, 3, 2, 5, 4];
  const userItems = [];

  useEffect(() => {
    /** 最小値と最大値 */
    var min = 1,
      max = 5;
    /** 重複チェックしながら乱数作成 */
    for (let i = min; i <= max; i++) {
      while (true) {
        let tmp = intRandom(min, max);
        if (
          !userItems.some((item) => {
            return item.id === tmp;
          })
        ) {
          userItems.push({
            id: tmp,
            color:
              "rgba(" +
              ~~(256 * Math.random()) +
              ", " +
              ~~(256 * Math.random()) +
              ", " +
              ~~(256 * Math.random()) +
              "0.5)",
          });
          break;
        }
      }
    }
  }, []);

  const [items, setItems] = useState(userItems);
  //   const onClickUp = (number) => {
  //     console.log(`up clicked ${number}`);
  //     let index = items.indexOf(number);
  //     console.log(`index is ${index}`);
  //     if (index != 0) {
  //       items.splice(index - 1, 2, items[index], items[index - 1]);
  //     }
  //     console.log(items);
  //     setItems([...items]);
  //     if (IsOrdered(items.length, items)) {
  //       setIsComplete(true);
  //     }
  //     countUp();
  //   };
  const onClickUp = (number, index) => {
    // let index = items.indexOf(number);
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    setItems([...items]);
    if (IsOrdered(items.length, items)) {
      setIsComplete(true);
    }
    countUp();
  };
  const onClickDown = (number, index) => {
    // let index = items.indexOf(number);
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    console.log(items);
    setItems([...items]);
    if (IsOrdered(items.length, items)) {
      setIsComplete(true);
    }
    countUp();
  };

  //   const dragStart = (index) => {
  //     setDragIndex(index);
  //   };
  //   const dragEnter = (index) => {
  //     if (index === dragIndex) return;
  //     setItems((prevState) => {
  //       let newItems = [...prevState];
  //       const deleteElement = newItems.splice(dragIndex, 1)[0];
  //       newItems.splice(index, 0, deleteElement);
  //       return newItems;
  //     });
  //     if (IsOrdered(5, items)) {
  //       setIsComplete(true);
  //     }
  //     countUp();
  //     setDragIndex(index);
  //   };

  //   const dragEnd = () => {
  //     setDragIndex(null);
  //   };

  //   const [dragIndex, setDragIndex] = useState(null);

  // react-beautiful-dnd
  //   const onDragEndTest = (result) => {
  //     setItems((prevState) => {
  //       let newItems = [...prevState];
  //       const deleteElement = newItems.splice(result.source.index, 1)[0];
  //       newItems.splice(result.destination.index, 0, deleteElement);
  //       if (IsOrdered(5, newItems)) {
  //         setIsComplete(true);
  //       }
  //       return newItems;
  //     });
  //     countUp();
  //   };

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
              {/* <PrimaryButton
                onClick={() => onClickDown(item, index)}
                style={{ backgroundColor: "var(--orange)" }}
              >
                下
              </PrimaryButton> */}
              <Image
                src="/triangle.svg"
                onClick={() => onClickDown(item, index)}
                width={30}
                height={30}
                style={{ rotate: "180deg" }}
              />
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.id}
              </Text>
              <Image
                src="/triangle.svg"
                onClick={() => onClickUp(item, index)}
                width={30}
                height={30}
              />
              {/* <PrimaryButton
                onClick={() => onClickUp(item, index)}
                style={{ backgroundColor: "var(--orange)" }}
              >
                上
              </PrimaryButton> */}
            </SItemRowContainer>
          );
        })}
      </ColumnContainer>

      {/* react-beautiful-dnd */}
      {/* <DragDropContext onDragEnd={onDragEndTest}>
        <Droppable droppableId="droppableId">
          {(provided) => (
            <ColumnContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => {
                return (
                  <Draggable
                    key={item}
                    draggableId={item.toString(10)}
                    index={index}
                  >
                    {(provided) => (
                      <SItemRowContainer
                        key={item}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PrimaryButton
                          onClick={() => onClickDown(item)}
                          style={{ backgroundColor: "var(--orange)" }}
                        >
                          下
                        </PrimaryButton>
                        <Text>{item}</Text>
                        <PrimaryButton
                          onClick={() => onClickUp(item)}
                          style={{ backgroundColor: "var(--orange)" }}
                        >
                          上
                        </PrimaryButton>
                      </SItemRowContainer>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ColumnContainer>
          )}
        </Droppable>
      </DragDropContext> */}
    </>
  );
});

const IsOrdered = (until, items) => {
  for (let i = 0; i < until; i++) {
    if (items[i].id != i + 1) {
      return false;
    }
  }
  return true;
};

/** min以上max以下の整数値の乱数を返す */
function intRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const SItemRowContainer = styled(RowContainer)`
  background-color: var(--yellow-50);
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;
