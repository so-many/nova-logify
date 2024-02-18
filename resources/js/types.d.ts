export type LogLevel =
  | 'emergency'
  | 'alert'
  | 'critical'
  | 'error'
  | 'warning'
  | 'notice'
  | 'info'
  | 'debug';

export type DropdownItem = {
  value: string;
  color?: string;
  id: number;
  active?: boolean;
};
