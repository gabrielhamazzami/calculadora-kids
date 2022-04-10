import { Container } from "./styles";
import Sound from "../../assets/icons/sound1.svg";
import DisableSound from "../../assets/icons/sound2.svg";
import Background from "../../assets/music/background.mp3";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/back-arrow.svg";
import { useResult } from "../../Providers/Result";

interface MusicBackgroundProps {
  back?: boolean;
  isCalculator?: boolean;
}

export const MusicBackground = ({
  back = true,
  isCalculator = false,
}: MusicBackgroundProps) => {
  const isActiveAudio = localStorage.getItem("isActive");
  const [active, setActive] = useState<boolean>(isActiveAudio ? false : true);
  const disableMusic = () => {
    localStorage.setItem("isActive", "Teste");
    setActive(false);
    const x: any = document.getElementById("music");
    x.pause();
  };

  const activeMusic = () => {
    localStorage.removeItem("isActive");
    setActive(true);
    const x: any = document.getElementById("music");
    x.play();
  };

  const { reset } = useResult()
  return (
    <Container>
      {back ? (
        <Link to={isCalculator ? "/select-game" : "/"} onClick={() => reset()}>
          <img src={BackArrow} alt="Seta para voltar" />
        </Link>
      ) : (
        <div></div>
      )}
      {active ? (
        <img src={Sound} onClick={disableMusic} />
      ) : (
        <img src={DisableSound} onClick={activeMusic} />
      )}
      <audio
        id="music"
        src={Background}
        autoPlay={true}
        loop={true}
        muted={active ? false : true}
      />
    </Container>
  );
};
