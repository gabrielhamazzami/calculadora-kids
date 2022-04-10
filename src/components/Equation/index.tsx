import { Container } from "./styles";
import { BsQuestion } from "react-icons/bs";
import { IEquation } from "../../@types";

export const Equation = ({ expretion, result }: IEquation) => {
  return (
    <Container>
      <p>
        {" "}
        {expretion} {result ?  "=": result === 0 && "="}{" "}
      </p>{" "}
      {result ?(
        <div className="result">
          <BsQuestion />
        </div>
      ): result === 0 && (
        <div className="result">
          <BsQuestion />
        </div>
      )}
    </Container>
  );
};
