import styled from "styled-components";
import { ColumnContainer } from "../containers/ColumnContainer";
import { RowContainer } from "../containers/RowContainer";
import { memo, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Text } from "@/components/texts/Text";

export const Order = memo(function Order(props) {
  const { countUp, setIsComplete } = props;
  //   const userItems = [1, 3, 2, 5, 4];
  const userItems = [1, 8, 2, 3, 7, 5, 6, 4];
  /** 重複チェック用配列 */
  //   var userItems = [];
  /** 最小値と最大値 */
  var min = 1,
    max = 5;

  /** 重複チェックしながら乱数作成 */
  //   for (let i = min; i <= max; i++) {
  //     while (true) {
  //       let tmp = intRandom(min, max);
  //       if (!userItems.includes(tmp)) {
  //         userItems.push(tmp);
  //         break;
  //       }
  //     }
  //   }

  const [items, setItems] = useState(userItems);
  //   const [isOrdered, setIsOrdered] = useState(false);
  const onClickUp = (number) => {
    console.log(`up clicked ${number}`);
    let index = items.indexOf(number);
    console.log(`index is ${index}`);
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    console.log(items);
    setItems([...items]);
    if (IsOrdered(items.length, items)) {
      setIsComplete(true);
    }
    countUp();
  };
  const onClickDown = (number) => {
    console.log(`down clicked ${number}`);
    let index = items.indexOf(number);
    console.log(`index is ${index}`);
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    console.log(items);
    setItems([...items]);
    if (IsOrdered(5, items)) {
      setIsComplete(true);
    }
    countUp();
  };
  return (
    <>
      {console.log("Order Rendered")}
      <ColumnContainer>
        {items.map((item) => {
          return (
            <SItemRowContainer key={item}>
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
          );
        })}
      </ColumnContainer>
    </>
  );
});

const IsOrdered = (until, items) => {
  for (let i = 0; i < until; i++) {
    if (items[i] != i + 1) {
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
