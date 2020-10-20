import styled from "styled-components";

export const StyledTimeCard = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 2px solid #d3d3d3;
  background: #ffffff;
  border-radius: 20px;
  min-width: 300px;
  padding: 1rem;
  margin: 1rem;
  color: black;
  h2 {
    color: #525252;
  }

  .text-box {
    padding: 0 1rem;
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    min-width: 300px;

    h3 {
      color: gray;
      font-size: 14px;
      margin: 0;
    }
    p {
      font-size: 12px;
      margin: 0 0 0.5rem 0;
    }
  }
`;
