import { FC, MouseEventHandler } from "react";

type ButtonPropsType = {
  title: string;
  onClickHandler?: MouseEventHandler;
};
export const Button: FC<ButtonPropsType> = ({ onClickHandler, title }) => {
  return <button onClick={onClickHandler}>{title}</button>;
};
