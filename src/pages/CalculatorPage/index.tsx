import { Calculator } from "../../components/Calculator";
import { Image } from "../../components/Image";
import { Container } from "./styles";

import img1Bob from "../../assets/BobEsponja/1.jpg";
import img2Bob from "../../assets/BobEsponja/2.jpg";
import img3Bob from "../../assets/BobEsponja/3.jpg";
import img4Bob from "../../assets/BobEsponja/4.jpg";

import img1League from "../../assets/LigaDaJustica/1.jpg";
import img2League from "../../assets/LigaDaJustica/2.jpg";
import img3League from "../../assets/LigaDaJustica/3.jpg";
import img4League from "../../assets/LigaDaJustica/4.jpg";

import img1Vingadores from "../../assets/Vingadores/1.jpg";
import img2Vingadores from "../../assets/Vingadores/2.jpg";
import img3Vingadores from "../../assets/Vingadores/3.jpg";
import img4Vingadores from "../../assets/Vingadores/4.jpg";

import img1G from "../../assets/GalinhaPintadinha1/1.jpg";
import img2G from "../../assets/GalinhaPintadinha1/2.jpg";
import img3G from "../../assets/GalinhaPintadinha1/3.jpg";
import img4G from "../../assets/GalinhaPintadinha1/4.jpg";

import img1G2 from "../../assets/GalinhaPintadinha2/1.jpg";
import img2G2 from "../../assets/GalinhaPintadinha2/2.jpg";
import img3G2 from "../../assets/GalinhaPintadinha2/3.jpg";
import img4G2 from "../../assets/GalinhaPintadinha2/4.jpg";

import img1J from "../../assets/JovensTitas/1.jpg";
import img2J from "../../assets/JovensTitas/2.jpg";
import img3J from "../../assets/JovensTitas/3.jpg";
import img4J from "../../assets/JovensTitas/4.jpg";
import { ResultRandom } from "../../components/ResultRandom";
import { useParams } from "react-router-dom";
import { useResult } from "../../Providers/Result";
import { MusicBackground } from "../../components/MusicBackground";
import { PopUp } from "../../components/PopUp";
import { toast } from "react-toastify";

export const CalculatorPage = () => {
  const { foto } = useParams();
  const {
    box1,
    box2,
    box3,
    box4,
    SetBox1,
    SetBox2,
    SetBox3,
    SetBox4,
    openPopup,
  } = useResult();
  const { countResult, errorResult } = useResult();
  switch (countResult) {
    case 1:
      SetBox1(true);
      break;
    case 2:
      SetBox2(true);
      break;
    case 3:
      SetBox3(true);
      break;
    case 4:
      SetBox4(true);
      break;
  }
  return (
    <Container>
      <MusicBackground isCalculator={true}/>
      <div className="div1">
        <Image
          box1={box1}
          box2={box2}
          box3={box3}
          box4={box4}
          img1={
            foto === "foto1"
              ? img1League
              : foto === "foto2"
              ? img1Bob
              : foto === "foto3"
              ? img1Vingadores
              : foto === "foto4"
              ? img1J
              : foto === "foto5"
              ? img1G
              : foto === "foto6"
              ? img1G2
              : ""
          }
          img2={
            foto === "foto1"
              ? img2League
              : foto === "foto2"
              ? img2Bob
              : foto === "foto3"
              ? img2Vingadores
              : foto === "foto4"
              ? img2J
              : foto === "foto5"
              ? img2G
              : foto === "foto6"
              ? img2G2
              : ""
          }
          img3={
            foto === "foto1"
              ? img3League
              : foto === "foto2"
              ? img3Bob
              : foto === "foto3"
              ? img3Vingadores
              : foto === "foto4"
              ? img3J
              : foto === "foto5"
              ? img3G
              : foto === "foto6"
              ? img3G2
              : ""
          }
          img4={
            foto === "foto1"
              ? img4League
              : foto === "foto2"
              ? img4Bob
              : foto === "foto3"
              ? img4Vingadores
              : foto === "foto4"
              ? img4J
              : foto === "foto5"
              ? img4G
              : foto === "foto6"
              ? img4G2
              : ""
          }
        />
      </div>
      <PopUp openModal={openPopup} success={!errorResult} />
      <div className="div2">
        <Calculator />
      </div>
    </Container>
  );
};
