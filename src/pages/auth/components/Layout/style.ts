import { MAX_WIDTH } from "@/constants/common";
import { FlexBetween, FlexColumn } from "@/styles/flex";
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${MAX_WIDTH};
  ${FlexBetween};

  & > img {
    width: 59.1rem;
  }

  .button-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.8rem;
  }
`;

export const Form = styled.form`
  width: 59.1rem;
  ${FlexColumn};
  gap: 3rem;

  & > h2 {
    text-align: center;
  }
`;
