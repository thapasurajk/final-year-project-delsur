import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 85vh;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.image}) no-repeat center;
  background-color: ${(props) => props.bg_color};
  background-size: contain;
  color: white;
  display: grid;
  justify-items: center;
  align-content: end;
  ${mobile({ height: "400px" })}
`;

const Title = styled.h1`
  font-size: 75px;
  ${mobile({ fontSize: "45px" })}
`;

const Desc = styled.p`
  margin: 20px 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-bottom: 2rem;
  ${mobile({ fontSize: "10px" })}
`;

const Slider = ({ slider }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    const slides = slider.length - 1;
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides);
    } else {
      setSlideIndex(slideIndex < slides ? slideIndex + 1 : 0);
    }
  };
  console.log(slider);
  return (
    <>
      {slider === null ? (
        "loading"
      ) : (
        <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {slider.map((item) => (
              <Slide bg_color={item.bg_color} key={item.id} image={item.image}>
                <Title>{item.title}</Title>
                <Desc>{item.description}</Desc>
                <Button>SHOW NOW</Button>
              </Slide>
            ))}
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </Container>
      )}
    </>
  );
};

export default Slider;
