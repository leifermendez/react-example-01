import * as React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: solid 2px transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 400px;
  height: 400px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  transition: all ease 110ms;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  transition: all ease 110ms;
`;

const Img = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Info = styled.div`
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 0px;
  font-size: 0.85rem;
`;

export default function App() {
  console.log(`[🦊 App.component]: renderizando App`);
  return (
    <Card>
      <Info>⚛️ React</Info>
      <Image />
    </Card>
  );
}

function Text(props: { label: string }) {
  console.log(`[🤓 Text.component]: renderizando Text`);
  return <Label>{props.label}</Label>;
}

function Image() {
  console.log(`[🐴 Image.component]: renderizando Image`);
  const list = [
    {
      id: 1,
      text: "iPhone 14X",
      url: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      text: "iPhone 14",
      url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [imgValue, setImgValue] = React.useState(list[0]);
  return (
    <Img>
      <img
        onClick={() => {
          const tkImg = list.find((o) => o.id !== imgValue.id) as any;
          console.log(`[🐤 Image.click]: Evento click `);
          setImgValue(tkImg);
        }}
        src={imgValue.url}
      ></img>
      <Text label={imgValue.text} />
    </Img>
  );
}
