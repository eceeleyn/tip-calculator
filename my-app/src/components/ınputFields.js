export const InputFields = (type = "text", id, value, onChange, inputMode,className) => {


  return (
    <>
      <input
        type={type}
        className={className}
        id={id}
        onChange={onChange}
        value={value}
        inputMode={inputMode}
      />
    </>
  );
};
