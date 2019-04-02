function runClock() {
  let now = new Date();

  let hour = now.getHours() % 12;
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let ms = now.getMilliseconds();

  let clock = document.querySelector("div.clock");
  let hourhand = clock.querySelector("div.hour");
  let minhand = clock.querySelector("div.minute");
  let sechand = clock.querySelector("div.second");

  let hourRotation = 30 * hour;
  let minRotation = 6 * min + 0.1 * sec;
  let secRotation = 6 * sec + 0.006 * ms;

  hourhand.style.transform = "rotate(" + hourRotation + "deg)";
  minhand.style.transform = "rotate(" + minRotation + "deg)";
  sechand.style.transform = "rotate(" + secRotation + "deg)";

  requestAnimationFrame(runClock);
}

runClock();
