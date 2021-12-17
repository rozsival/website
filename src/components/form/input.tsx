import { Controller, FieldPath } from 'react-hook-form';
import {
  FormControl,
  Input as MUIInput,
  InputLabel,
  FormHelperText,
} from '@mui/material';

import { MULTILINE_INPUT_ROWS, SINGLE_LINE_INPUT_ROWS } from './constants';
import { InputProps } from './types';

export const Input = <FieldValues, FieldName extends FieldPath<FieldValues>>({
  error,
  control,
  label,
  mode,
  multiLine,
  name,
  type = 'text',
}: InputProps<FieldValues, FieldName>) => {
  const errorId = `${name}-error`;
  const hasError = Boolean(error);
  return (
    <FormControl error={hasError} fullWidth>
      <InputLabel error={hasError} htmlFor={name}>
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <MUIInput
            aria-describedby={errorId}
            aria-invalid={hasError}
            id={name}
            inputMode={mode}
            inputRef={field.ref}
            multiline={multiLine}
            name={field.name}
            onBlur={field.onBlur}
            onChange={field.onChange}
            rows={multiLine ? MULTILINE_INPUT_ROWS : SINGLE_LINE_INPUT_ROWS}
            type={type}
            value={field.value}
          />
        )}
      />
      <FormHelperText error id={errorId}>
        {error}
      </FormHelperText>
    </FormControl>
  );
};
