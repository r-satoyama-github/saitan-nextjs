import styled from "styled-components";

export const Ranker = (props) => {
  const { children } = props;
  const rank = "1";
  const name = "ゲスト1さんAAA";
  const count = "2回";
  const seconds = "10:00";
  return (
    <>
      <SP>
        <SRank>{rank}</SRank>
        <SNameSpan>{name}</SNameSpan>
        <SCountSpan>{count}</SCountSpan>
        <SSecondsSpan>{seconds}</SSecondsSpan>
      </SP>
    </>
  );
};

const SP = styled.p`
  width: 80%;
  text-align: center;
  white-space: nowrap;
  max-width: 100vw;
  text-decoration: underline;
  vertical-align: top;
  margin-top: 15px;
`;

const SRank = styled.span`
  width: 10%;
  display: inline-block;
  vertical-align: top;
`;

const SNameSpan = styled.span`
  width: 50%;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
`;
const SCountSpan = styled.span`
  width: 20%;
  display: inline-block;
  vertical-align: top;
`;
const SSecondsSpan = styled.span`
  width: 20%;
  display: inline-block;
  vertical-align: top;
`;
