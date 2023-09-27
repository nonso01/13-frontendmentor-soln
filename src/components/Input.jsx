function Input({
  type = "email",
  placeHolder = "@email",
  name = "email",
  handleInput,
  error,
}) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      required="required"
      className={error ? "error-input input" : "input"}
      name={name}
      autoComplete="your-email"
      onInput={handleInput}
    />
  );
}

export default Input;
