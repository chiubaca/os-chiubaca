import { dragmove } from "../libs/dragmove";

const snapThreshold = 1;

function onStart(el) {
  // On drag start, remove the fixed bottom style to prevent the bottom
  // from sticking on the screen.
  el.style.top = `${el.offsetTop}px`;
  el.style.bottom = "auto";
}
function onEnd(el) {
  // Automatically snap to corners.
  if (window.innerHeight - (el.offsetTop + el.offsetHeight) < snapThreshold) {
    el.style.top = "auto";
    el.style.bottom = "0px";
  }
  if (window.innerWidth - (el.offsetLeft + el.offsetWidth) < snapThreshold) {
    el.style.left = "auto";
    el.style.right = "0px";
  }
  if (el.offsetTop < snapThreshold) {
    el.style.top = "0px";
  }
  if (el.offsetLeft < snapThreshold) {
    el.style.left = "0px";
  }
}

export const makeElementDraggable = (
  appShellContainer: HTMLElement,
  dragHandle: HTMLElement
) => dragmove(appShellContainer, dragHandle, onStart, onEnd);
