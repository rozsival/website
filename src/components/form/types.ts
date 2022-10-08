import type { HTMLAttributes } from 'react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';

export type InputProps<
  InputValues extends FieldValues,
  InputName extends FieldPath<InputValues>,
> = {
  error?: string;
  control: Control<InputValues>;
  label: string;
  maxLength?: number;
  mode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  multiLine?: boolean;
  name: InputName;
  noMargin?: boolean;
  type?: string;
};
