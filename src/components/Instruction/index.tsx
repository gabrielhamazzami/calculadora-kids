import { ModalStyle } from "./styles";
import { props } from "../../@types";

export const Instruction = ({id = 'modal', onClose = () => {}, children}: props) => {
  const handleOutsidClick = (e: any) => {
    if (e.target.id === id) onClose();
  }
  return (
    <ModalStyle>
      <div id={id} className="modal" onClick={handleOutsidClick}>
        <div className="container">
          <button className ="close" onClick={onClose}></button>
          <div className ="content">
            { children }
          </div>
        </div>
      </div>
    </ModalStyle>
  );
};