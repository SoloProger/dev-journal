export function useClearValue(...stateFunctions) {
  return stateFunctions.map((fn) => fn);
}
