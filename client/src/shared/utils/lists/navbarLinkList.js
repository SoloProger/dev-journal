import generate from "../generatorUnikKeys";

export const navbarLinkList = [
  {
    key: generate(),
    path: "/",
    name: "Главная",
  },
  {
    key: generate(),
    path: "/blog",
    name: "Блог",
  },
];
