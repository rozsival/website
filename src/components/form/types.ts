import { HTMLAttributes } from 'react';
import { Control, FieldPath } from 'react-hook-form';

export type InputProps<
  FieldValues,
  FieldName extends FieldPath<FieldValues>,
> = {
  error?: string;
  control: Control<FieldValues>;
  label: string;
  maxLength?: number;
  mode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  multiLine?: boolean;
  name: FieldName;
  noMargin?: boolean;
  type?: string;
};
