import { Controller } from "react-hook-form";
import { Input } from "./input";

export const ControlledInput = ({ name, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          value={field.value}
          onBlur={field.onBlur}
          onChangeText={field.onChange}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
