import Id from "./id";

export default interface QueryParams extends Id {
  [key: string]: unknown;
}
