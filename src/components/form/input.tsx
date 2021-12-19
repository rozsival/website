import { Controller, FieldPath } from 'react-hook-form';
import {
  FormControl,
  Input as MUIInput,
  InputLabel,
  FormHelperText,
  Box,
} from '@mui/material';

import {
  MULTILINE_INPUT_ROWS,
  SINGLE_LINE_INPUT_ROWS,
  SPACING,
} from './constants';
import { InputProps } from './types';

export const Input = <FieldValues, FieldName extends FieldPath<FieldValues>>({
  error,
  control,
  label,
  mode,
  multiLine,
  name,
  noMargin,
  type = 'text',
}: InputProps<FieldValues, FieldName>) => {
  const errorId = `${name}-error`;
  const hasError = Boolean(error);
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
