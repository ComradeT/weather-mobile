const onConvertCelsiusToFahrenheit = (valNum?: number) => {
  const newValue = valNum && valNum * 1.8 + 32;
  return newValue?.toFixed();
};

export default onConvertCelsiusToFahrenheit;
