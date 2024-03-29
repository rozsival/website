import {
  FormControl,
  Input as MUIInput,
  InputLabel,
  FormHelperText,
  Box,
} from '@mui/material';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  MULTILINE_INPUT_ROWS,
  SINGLE_LINE_INPUT_ROWS,
  SPACING,
} from './constants';
import type { InputProps } from './types';

export const Input = <
  InputValues extends FieldValues,
  InputName extends FieldPath<InputValues>,
>({
  error,
  control,
  label,
  mode,
  maxLength,
  multiLine,
  name,
  noMargin,
  type = 'text',
}: InputProps<InputValues, InputName>) => {
  const errorId = `${name}-error`;
  const hasError = Boolean(error);
  const inputProps = { maxLength };
  return (
    <Box mt={noMargin ? 0 : SPACING}>
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
              inputProps={inputProps}
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
    </Box>
  );
};
