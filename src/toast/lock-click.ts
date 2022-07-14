let lockCount = 0;
const classname = 'mx-toast--unclickable';
export function lockClick(lock: boolean) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add(classname);
    }
    lockCount++;
  } else if (lockCount) {
    lockCount--;
    if (!lockCount) {
      document.body.classList.remove(classname);
    }
  }
}
