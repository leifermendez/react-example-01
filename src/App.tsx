import { useState } from "react";
import { Card, Info, Label, ImgWrapper, Img } from "./components";

/**
 * 📄 Este objeto representa un MOCK de datos en este caso una lista de imagenes con id y nombre
 */
export const MOCK_JSON = [
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

export default function App() {
  console.log(`[🦊 App.component]: renderizando App`);
  return (
    <Card>
      <Info>⚛️ React (click sobre la imagen)</Info>
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

  const [imgValue, setImgValue] = useState(MOCK_JSON[0]);

  /**
   * 🤔 Mostrando ejemplo de separacion de funcion
   * React lo permite Qwik tambien pero con $
   */
  const logic = () => {
    const tkImg = MOCK_JSON.find((o) => o.id !== imgValue.id) as any;
    console.log(``);
    console.log(`[🐤 Image.click]: Evento click `);
    setImgValue(tkImg);
  };

  return (
    <ImgWrapper>
      <Img onClick={logic} src={imgValue.url}></Img>
      <Text label={imgValue.text} />
    </ImgWrapper>
  );
}
