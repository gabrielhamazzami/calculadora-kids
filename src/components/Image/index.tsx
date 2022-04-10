import { Box1, Box2, Box3, Box4, Content } from "./styles";

interface Iprops {
  box1: boolean;
  box2: boolean;
  box3: boolean;
  box4: boolean;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export const Image = ({
  box1,
  box2,
  box3,
  box4,
  img1,
  img2,
  img3,
  img4,
}: Iprops) => {
  return (
    <Content>
      {box1 ? (
        <Box1>
          {" "}
          <img src={img1} alt="img1" />
        </Box1>
      ) : (
        <Box1 className="disable">
          {" "}
          <img src={img1} alt="img1" />
        </Box1>
      )}
      {box2 ? (
        <Box2>
          {" "}
          <img src={img2} alt="img2" />
        </Box2>
      ) : (
        <Box2 className="disable">
          {" "}
          <img src={img2} alt="img1" />
        </Box2>
      )}
      {box3 ? (
        <Box3>
          {" "}
          <img src={img3} alt="img3" />
        </Box3>
      ) : (
        <Box3 className="disable">
          {" "}
          <img src={img3} alt="img1" />
        </Box3>
      )}
      {box4 ? (
        <Box4>
          {" "}
          <img src={img4} alt="img4" />
        </Box4>
      ) : (
        <Box4 className="disable">
          {" "}
          <img src={img4} alt="img1" />
        </Box4>
      )}
    </Content>
  );
};
