
import { TextField } from "@mui/material";
import React from "react";
import { forwardRef, ReactElement, Ref } from "react";

interface IAppInputProps<IForm> {
  name: string;
  label: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  setValue: (name: keyof IForm, value: any, options: any) => void;
  getValues: (name: keyof IForm) => any;
  maxLength?: number | undefined;
}

type CompRef = Ref<HTMLSelectElement>;

const AppInput = function <IForm>(
  { setValue, getValues, ...props }: IAppInputProps<IForm>,
) {
  return (
    <TextField
      {...props}
      data-testid={props.name}
      value={getValues(props.name as keyof IForm)}
      onChange={(event: any) =>
        setValue(props.name as keyof IForm, event.target.value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        })
      }
    />
  );
};

export default forwardRef(AppInput) as <IForm>(
  p: IAppInputProps<IForm> & { ref?: CompRef }
) => ReactElement;
