import { memo } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = memo(function PrimaryButton(props) {
  console.log("PrimaryButton Rendering");
  const { children, onClick, style } = props;
  return (
    <>
      <SButton onClick={onClick} style={style}>
        {children}
      </SButton>
    </>
  );
});

// export const PrimaryButton = function PrimaryButton(props) {
//   const { children, onClick, style } = props;
//   console.log("PrimaryButton Rendered");
//   return (
//     <>
//       <SButton onClick={onClick} style={style}>
//         {children}
//       </SButton>
//     </>
//   );
// };

const SButton = styled(BaseButton)`
  background-color: var(--yellow-50);
  width: 150px;
`;
