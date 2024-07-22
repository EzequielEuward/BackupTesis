import { useState } from "react";

export const useCalculatorICM = () => {
 

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);
  };

  return {
    weight,
    setWeight,
    height,
    setHeight,
    bmi,
    calculateBmi,
  };
};

export default useCalculatorICM;