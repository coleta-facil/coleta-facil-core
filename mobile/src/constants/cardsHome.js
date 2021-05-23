import React from "react";
import { Entypo, Feather, Ionicons, AntDesign } from "@expo/vector-icons";

export const Cards = [
  {
    icon: <Feather name="trash-2" size={24} color="white" />,
    text: "Dicas de separação do lixo",
    description:
      "Use sacolas bem resistentes para cada categoria de lixo.🛍" +
      "\n\nNão misture  sobras de alimentos com lixo seco como plásticos e papéis.🥙" +
      "\n\nLave e seque embalagens como latas, garrafas, vidros e plásticos.💧" +
      "\n\nEmbrulhe vidros quebrados e outros materiais que possam cortar em " +
      "\n\njornal ou coloque-os em caixas.⚡" +
      "\n\nSepare o óleo da cozinha em garrafas e ache locais de coleta ou reutilize-os.🧴",
    type: "TRASH",
  },
  {
    icon: <Ionicons name="skull-outline" size={24} color="white" />,
    text: "Cuidado com seu Lixo perigoso!",
    description:
      "Aquele que apresenta riscos à saúde pública e ao meio ambiente. " +
      "\n\nSão inflamáveis ou tóxicos e não podem ser colocados em sacolas normais e enviados " +
      "para a coleta normal." +
      "\n\nExemplos:" +
      "\t\n • Tintas " +
      "\t\n • Lixo hospitalar " +
      "\t\n • Medicamentos " +
      "\t\n • Eletrônicos ",
    type: "SKULL",
  },
  {
    icon: <AntDesign name="pushpino" size={24} color="white" />,
    text: "Dicas de reciclagem",
    description:
      "Vasinho de plantas 🌵" +
      "\n\nArtesanato 🎨 " +
      "\n\nJardim Verticalja 🎍 " +
      "\n\nRegadores 🚿" +
      "\n\nLixo eletrônico 🔋" +
      "\n\nBazar 💰",
    type: "KEYBOARD",
  },
];

export function getIconCards(size, type) {
  switch (type) {
    case "TRASH":
      return <Feather name="trash-2" size={size} color="black" />;
    case "SKULL":
      return <Ionicons name="skull-outline" size={size} color="black" />;
    case "KEYBOARD":
      return <AntDesign name="pushpino" size={size} color="black" />;
    default:
      break;
  }
}
