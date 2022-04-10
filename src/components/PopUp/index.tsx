import { Container } from "./styles";
import successAnimate from "../../assets/lottieAnimations/Success/starEmoji.json";
import errorAnimate from "../../assets/lottieAnimations/Error/error.json";
import Lottie from "lottie-react";
import { useResult } from "../../Providers/Result";
import { useNavigate } from "react-router-dom";
import lose from "../../assets/music/lose.mp3";
import youWins from "../../assets/music/you-wins.mp3";
import { toast } from "react-toastify";
import { useEffect } from "react";

export interface PopUpProps {
  success: boolean;
  openModal: boolean;
}

export const PopUp = ({ success }: PopUpProps) => {
  const navigate = useNavigate();
  const { setOpenPopup, openPopup } = useResult();
  const { reset } = useResult();
  const redirectSuccess = (url: string) => {
    navigate(url);
    setOpenPopup(false);
    reset();
    toast.success("VOCÊ É FERA! QUE TAL COMEÇAR OUTRO?", {
      style: { fontWeight: "bold" },
    });
  };

  useEffect(() => {
    if (openPopup) {
      if (success) {
        const x: any = document.getElementById("wins");
        x.play();
      } else {
        const x: any = document.getElementById("lose");
        x.play();
      }
    }
  }, [openPopup]);
  return (
    <Container success={success} openModal={openPopup}>
      {success ? (
        <audio id="wins" src={youWins} autoPlay={false} />
      ) : (
        <audio id="lose" src={lose} autoPlay={false} />
      )}
      <div className="Modal">
        {success ? (
          <div className="LottieAnimation">
            <Lottie animationData={successAnimate} loop={true}></Lottie>
          </div>
        ) : (
          <div className="LottieAnimation">
            <Lottie animationData={errorAnimate} loop={true}></Lottie>
          </div>
        )}
        {success ? "Você ganhou!!!" : "Você errou..."}
        <button
          onClick={() => {
            success ? redirectSuccess("/select-game") : setOpenPopup(false);
          }}
        >
          {success ? "Jogar de novo" : "Tente novamente"}
        </button>
      </div>
    </Container>
  );
};
