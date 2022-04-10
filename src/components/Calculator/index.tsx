import { useResult } from "../../Providers/Result";
import { shuffleArray } from "../../utils/utils";
import { Equation } from "../Equation";
import { ResultRandom } from "../ResultRandom";
import { Container, ContentResult } from "./styles";

export const Calculator = () => {

  const { result, SetResult, disable, exp } = useResult()
  SetResult(eval(exp as any))
  
  return (
    <>
      <Equation expretion={exp} result={Number.isInteger(result) ? result : Math.round(result)}/>

      <ContentResult>
          { result ? <ResultRandom resultParams={Number.isInteger(result) ? result : Math.round(result)} arr={shuffleArray(3, Number.isInteger(result) ? result : Math.round(result)) as any}/> : result === 0 && <ResultRandom resultParams={Number.isInteger(result) ? result : Math.round(result)} arr={shuffleArray(3, Number.isInteger(result) ? result : Math.round(result)) as any}/>}
      </ContentResult>

      <Container>
        {disable?<button className="disable">0</button>:<button >0</button>}
        {disable?<button className="disable">1</button>:<button >1</button>}
        {disable?<button className="disable">2</button>:<button >2</button>}
        {disable?<button className="disable">3</button>:<button >3</button>}
        {disable?<button className="disable">4</button>:<button >4</button>}
        {disable?<button className="disable">5</button>:<button >5</button>}
        {disable?<button className="disable">6</button>:<button >6</button>}
        {disable?<button className="disable">7</button>:<button >7</button>}
        {disable?<button className="disable">8</button>:<button >8</button>}
        {disable?<button className="disable">9</button>:<button >9</button>}

        {disable?<button className="disable">+</button>:<button >+</button>}
        {disable?<button className="disable">-</button>:<button >-</button>}
        {disable?<button className="disable">*</button>:<button >*</button>}
        {disable?<button className="disable">/</button>:<button >/</button>}
        {disable?<button className="disable">=</button>:<button>=</button>}
      </Container>
    </>
  );
};
