import { Dispatch, SetStateAction } from "react";

export interface MenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface GTSelectorProps {
  isDelete: boolean;
  checked: number[];
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  setChecked: Dispatch<SetStateAction<number[]>>;
}

export interface GTHeaderProps {
  children?: React.ReactChild | React.ReactChild[];
}

export interface MenuItemProps {
  title: string;
  onClick?: () => void;
  path?: string;
  children?: React.ReactChild;
}

export interface GridItemProps {
  das: number;
  id?: number;
  children?: React.ReactChild;
}

export interface ChangeBtn {
  [func: string]: Dispatch<any>;
}
