import TextField from "@mui/material/TextField";
const CustomInput = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  customWidth,
  customHeight,
}) => {
  return (
    <div className={`w-full max-w-md mb-4 ${customWidth ? customWidth : ""}`}>
      <label className="block text-lg font-medium mb-2">{label}</label>
      <TextField
        fullWidth
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        className={`bg-red-50 ${customHeight ? customHeight : ""}`}
      />
    </div>
  );
};

export default CustomInput;
