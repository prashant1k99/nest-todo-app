export function* generateId() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}
