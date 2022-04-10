import { Container } from "./styles";
import LogoKids from "../../assets/logoKids.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { MusicBackground } from "../../components/MusicBackground";
import { BsTypeH1 } from "react-icons/bs";

import { Instruction } from "../../components/Instruction";
import { useState } from "react";
import { Content } from "../../components/Content";

export const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <MusicBackground back={false} />
        <div className="Logo">
          <img src={LogoKids} alt="Logotipo" />
        </div>
        <Button onClick={() => navigate("/select-game")}>Entrar</Button>

           <button className="btn" onClick={() => setIsModalVisible(true)}>Como jogar?</button>
            {isModalVisible ? 
              (
                <Instruction onClose={() => setIsModalVisible(false)}>
                  <Content/>
                </Instruction> 
              ) : null
            }
        <footer className="Ft">
         <p>ESTE JOGO FOI FEITO POR: <i className="Aut">Gabriel Correa, Thiago Morais, Jhonatas Cardoso, Paula Gabriele, Gustavo Saraiva, Rhaniel Lucas, Yasmin Kamilla, Clemildo Vieira.</i></p> 
        </footer>
    </Container>
  );
};
