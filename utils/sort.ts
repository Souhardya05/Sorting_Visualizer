import { wait, swap } from "./helpers";

export async function bubbleSort(ele: NodeListOf<Element>, delay: number) {
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      const a = ele[j] as HTMLElement;
      const b = ele[j + 1] as HTMLElement;
      a.style.background = "blue";
      b.style.background = "blue";
      if (parseInt(a.style.height) > parseInt(b.style.height)) {
        await wait(delay);
        swap(a, b);
      }
      a.style.background = "cyan";
      b.style.background = "cyan";
    }
    (ele[ele.length - 1 - i] as HTMLElement).style.background = "green";
  }
  (ele[0] as HTMLElement).style.background = "green";
}

export async function insertionSort(ele: NodeListOf<Element>, delay: number) {
  const bars = ele as NodeListOf<HTMLElement>;
  bars[0].style.background = "green";
  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let key = bars[i].style.height;
    bars[i].style.background = "blue";
    await wait(delay);
    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
      bars[j].style.background = "blue";
      bars[j + 1].style.height = bars[j].style.height;
      j--;
      await wait(delay);
    }
    bars[j + 1].style.height = key;
    bars[i].style.background = "green";
  }
}

export async function selectionSort(ele: NodeListOf<Element>, delay: number) {
  const bars = ele as NodeListOf<HTMLElement>;
  for (let i = 0; i < bars.length; i++) {
    let min_index = i;
    bars[i].style.background = "blue";
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red";
      await wait(delay);
      if (parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)) {
        if (min_index !== i) bars[min_index].style.background = "cyan";
        min_index = j;
      } else {
        bars[j].style.background = "cyan";
      }
    }
    await wait(delay);
    swap(bars[min_index], bars[i]);
    bars[min_index].style.background = "cyan";
    bars[i].style.background = "green";
  }
}

export async function quickSort(ele: NodeListOf<Element>, l: number, r: number, delay: number) {
  if (l < r) {
    let pivot_index = await partition(ele, l, r, delay);
    await quickSort(ele, l, pivot_index - 1, delay);
    await quickSort(ele, pivot_index + 1, r, delay);
  } else if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
    (ele[r] as HTMLElement).style.background = "green";
    (ele[l] as HTMLElement).style.background = "green";
  }
}

async function partition(ele: NodeListOf<Element>, l: number, r: number, delay: number) {
  let i = l - 1;
  const pivot = ele[r] as HTMLElement;
  pivot.style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    const curr = ele[j] as HTMLElement;
    curr.style.background = "yellow";
    await wait(delay);
    if (parseInt(curr.style.height) < parseInt(pivot.style.height)) {
      i++;
      swap(ele[i] as HTMLElement, curr);
      (ele[i] as HTMLElement).style.background = "orange";
      if (i !== j) curr.style.background = "orange";
      await wait(delay);
    } else {
      curr.style.background = "pink";
    }
  }
  i++;
  await wait(delay);
  swap(ele[i] as HTMLElement, pivot);
  pivot.style.background = "pink";
  (ele[i] as HTMLElement).style.background = "green";
  await wait(delay);
  for (let k = 0; k < ele.length; k++) {
    if ((ele[k] as HTMLElement).style.background !== "green") {
      (ele[k] as HTMLElement).style.background = "cyan";
    }
  }
  return i;
}

export async function mergeSort(ele: NodeListOf<Element>, l: number, r: number, delay: number) {
  if (l >= r) return;
  const m = Math.floor((l + r) / 2);
  await mergeSort(ele, l, m, delay);
  await mergeSort(ele, m + 1, r, delay);
  await merge(ele, l, m, r, delay);
}

async function merge(ele: NodeListOf<Element>, low: number, mid: number, high: number, delay: number) {
  const bars = ele as NodeListOf<HTMLElement>;
  const left = [];
  const right = [];
  for (let i = low; i <= mid; i++) {
    await wait(delay);
    bars[i].style.background = "orange";
    left.push(bars[i].style.height);
  }
  for (let i = mid + 1; i <= high; i++) {
    await wait(delay);
    bars[i].style.background = "yellow";
    right.push(bars[i].style.height);
  }

  let i = 0, j = 0, k = low;
  while (i < left.length && j < right.length) {
    await wait(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      bars[k].style.height = left[i++];
    } else {
      bars[k].style.height = right[j++];
    }
    bars[k].style.background = (left.length + right.length === bars.length) ? "green" : "lightgreen";
    k++;
  }
  while (i < left.length) {
    await wait(delay);
    bars[k].style.height = left[i++];
    bars[k++].style.background = "lightgreen";
  }
  while (j < right.length) {
    await wait(delay);
    bars[k].style.height = right[j++];
    bars[k++].style.background = "lightgreen";
  }
}