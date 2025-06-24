export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateArray(size: number): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 250) + 1);
}

export function swap(el1: HTMLElement, el2: HTMLElement) {
  const temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}