import type { Route } from "~/shared/types/common/Route";

export const navbarRoutes: Route[] = [
  {
    path: "/",
    name: "Главная",
  },
  {
    path: "/blog",
    name: "Блог",
  },
  {
    path: "/author",
    name: "Автор",
  },
  {
    path: "/project",
    name: "О проекте",
  },
];
