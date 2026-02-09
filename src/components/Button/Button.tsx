 import {  ReactNode } from 'react';
import './button.css';

interface Props {
  children: ReactNode;
  parentMethod(): void;
}

interface ChildrenButtonProps {
  children: ReactNode;
}

export const ColorRed = ({ children }: ChildrenButtonProps) => {
  return (<div className="color-red">{children}</div>);
};

export const Button = ({ children, parentMethod }: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  );
};
