import PASSO1 from "../../assets/Instruction/PASSO1.png";
import PASSO2 from "../../assets/Instruction/PASSO2.png";
import { ContentStyle } from "./styles";

export const Content = () => {
  return (
    <ContentStyle>
      <div>
        <h1 id="Tit1">Vamos apreder a jogar?</h1>
          <h2 id="Tit2">PASSO 1</h2>
          <p id="Par">Para começar a jogar é muito simples! Basta selecionar uma das imagens disponíveis, assim como na imagem abaixo:
              <img id="Img1" src={PASSO1} alt="Passo 1"/>
            <p id="Obs">
              Obs: Caso não selecione a imagem e clique em "Começar", o jogo iniciará com uma imagem aleatória!
            </p>
          </p>
          <h2 id="Tit2">PASSO 2</h2>
          <p id="Par">Depois de selecionado a imagem, o jogo já começa! Agora você pode montar sua operação matemática e clicar no sinal de igual "=", assim como na imagem abaixo:
              <img id="Img2" src={PASSO2} alt="Passo 2"/>
            <p id="Obs">
              Obs: Aparecerá 3 possíveis resultados. Basta escolher o valor correto e uma parte da imagem é pintada. Siga este mesmo procedimento do "Passo 2" até todas as partes da imagem serem pintadas!
            </p>
          </p>
      </div>
    </ContentStyle>
  )
}