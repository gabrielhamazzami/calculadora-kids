import { Container } from "./styles";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import foto1 from "../../assets/fotos/foto1.jpg";
import foto2 from "../../assets/fotos/foto2.jpg";
import foto3 from "../../assets/fotos/foto3.jpg";
import foto4 from "../../assets/fotos/foto4.jpg";
import foto5 from "../../assets/fotos/foto5.jpg";
import foto6 from "../../assets/fotos/foto6.jpg";
import { useNavigate } from "react-router-dom";
import { MusicBackground } from "../../components/MusicBackground";
export const SelectGame = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MusicBackground />
      <h4>Toque em uma imagem para começar o jogo!</h4>
      <section className="Games">
        <img
          src={foto1}
          alt="foto 1"
          onClick={() => (navigate("/calculadora/foto1"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
        <img
          src={foto2}
          alt="foto 2"
          onClick={() => (navigate("/calculadora/foto2"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
        <img
          src={foto3}
          alt="foto 3"
          onClick={() => (navigate("/calculadora/foto3"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
        <img
          src={foto4}
          alt="foto 4"
          onClick={() => (navigate("/calculadora/foto4"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
        <img
          src={foto5}
          alt="foto 5"
          onClick={() => (navigate("/calculadora/foto5"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
        <img
          src={foto6}
          alt="foto 6"
          onClick={() => (navigate("/calculadora/foto6"), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}
        />
      </section>
      <Button onClick={() => (navigate(`/calculadora/foto${Math.floor(Math.random() * (7 - 1)) + 1}`), toast('BOA SORTE !!! 🎮', {style: {fontWeight: 'bold'}}))}>COMEÇAR</Button>
    </Container>
  );
};
