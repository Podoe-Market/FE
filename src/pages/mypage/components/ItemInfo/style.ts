import COLOR from "@/styles/color";
import { FlexAlign, FlexBetween, FlexColumn } from "@/styles/flex";
import { FONT_LARGE } from "@/styles/font";
import { FONT_BOLD } from "@/styles/fontWeight";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumn};
  justify-content: center;
  gap: 1rem;

  .evaluation {
    font-size: 2rem;
    ${FONT_BOLD};
    color: ${COLOR.puple4};
  }
`;

export const Title = styled.div`
  ${FlexAlign};
  gap: 30px;
`;

export const Price = styled.div<{ $soldOut: boolean }>`
  ${FlexColumn};
  gap: 1rem;
  color: ${({ $soldOut }) => ($soldOut ? COLOR.grey5 : "black")};

  .info {
    flex-shrink: 0;
    ${FlexAlign};
    gap: 6px;
    ${FONT_LARGE};

    & > svg {
      width: 2.8rem;
      height: 2.8rem;
      color: ${({ $soldOut }) => ($soldOut ? COLOR.grey5 : COLOR.blue3)};
    }
  }

  .onSale {
    text-align: center;
    font-size: 2rem;
    ${FONT_BOLD};
    color: ${COLOR.puple4};
  }

  .soldOut {
    text-align: center;
    font-size: 2rem;
    ${FONT_BOLD};
    color: ${COLOR.grey5};
  }
`;

export const PriceBox = styled.div`
  ${FlexBetween};
  min-width: 25rem;
  max-width: 30rem;
`;
