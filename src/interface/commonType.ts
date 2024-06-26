import { FieldError } from "react-hook-form";

export interface ButtonPropsType {
  size: string;
  disabled?: boolean;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface DropDownType {
  $width: string;
  children: React.ReactNode;
}

export interface LikedNumberPropsType {
  number: string;
}

export interface PaginationPropsType {
  currentNumber: number;
}

export interface InputFeildPropsType {
  title: string;
  buttonName?: string;
  buttonName2?: string;
  error?: FieldError;
  disabled?: boolean;
  disabled1?: boolean;
  handleButtonClick?: () => void;
  [key: string]: unknown;
}
