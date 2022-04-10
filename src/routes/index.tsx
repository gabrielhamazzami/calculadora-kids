import { Route, Routes } from "react-router-dom";
import { CalculatorPage } from "../pages/CalculatorPage";
import { Home } from "../pages/Home";
import { SelectGame } from "../pages/SelectGame";
import { Instruction } from "../components/Instruction";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select-game" element={<SelectGame />} />
      <Route path="/calculadora/:foto" element={<CalculatorPage />} />
    </Routes>
  );
};
