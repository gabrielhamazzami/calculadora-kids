import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
} from "react";
import { IProvider } from "../../@types";
import { generateExpretion } from "../../utils/utils";

interface IResultContext {
  errorResult: boolean;
  countResult: number;
  result: number;
  box1: boolean;
  box2: boolean;
  box3: boolean;
  box4: boolean;
  openPopup: boolean;
  setOpenPopup: Dispatch<boolean>;
  disable: boolean;
  SetDisable: (params: boolean) => void;
  SetErrorResult: (params: boolean) => void;
  setCountResult: (params: number) => void;
  SetResult: (params: number) => void;
  SetBox1: (params: boolean) => void;
  SetBox2: (params: boolean) => void;
  SetBox3: (params: boolean) => void;
  SetBox4: (params: boolean) => void;
  SetPopUp: (params: boolean) => void;
  reset: () => void
  SetExp: (params: string | number) => void
  exp: string | number
}

export const ResultContext = createContext<IResultContext>(
  {} as IResultContext
);

export const IResultProvider = ({ children }: IProvider) => {
  const [countResult, setCount] = useState(0);
  const [result, setResult] = useState<number>(0);
  const [errorResult, setErrorResult] = useState(false);
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [disable, setDisable] = useState<boolean>(false)
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [ exp, setExp] = useState<string | number>(generateExpretion())

  const SetDisable = (params: boolean) => {
    setDisable(params);
  }
  const setCountResult = (params: number) => {
    setCount(countResult + params);
  };
  const SetErrorResult = (params: boolean) => {
    setErrorResult(params);
  };
  const SetBox1 = (params: boolean) => {
    setBox1(params);
  };

  const SetBox2 = (params: boolean) => {
    setBox2(params);
  };

  const SetBox3 = (params: boolean) => {
    setBox3(params);
  };

  const SetBox4 = (params: boolean) => {
    setBox4(params);
  };

  const SetResult = (params: number) => {
    setResult(params);
  };

  const SetPopUp = (params: boolean) => {
    setOpenPopup(params);
  };

  const reset = () => {
    setBox1(false)
    setBox2(false)
    setBox3(false)
    setBox4(false)
    setCount(0)
    setResult(0)
  }
  const SetExp = (params: string | number) => {
    setExp(params)
  }

  return (
    <ResultContext.Provider
      value={{
        countResult,
        errorResult,
        setCountResult,
        SetErrorResult,
        box1,
        box2,
        box3,
        box4,
        SetBox1,
        SetBox2,
        SetBox3,
        SetBox4,
        result,
        SetResult,
        SetPopUp,
        openPopup,
        setOpenPopup,
        disable,
        SetDisable,
        reset,
        exp,
        SetExp
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResult = () => useContext(ResultContext);
