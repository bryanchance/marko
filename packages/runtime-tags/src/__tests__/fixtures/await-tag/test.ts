export const skip_csr = true;

export const steps = [{}, click, click, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
