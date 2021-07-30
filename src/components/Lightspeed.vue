<template>
  <div id="lightspeed"></div>
</template>

<script>
export default {
  name: "Lightspeed",
  mounted() {
    const app = document.getElementById("lightspeed");
    function calcCenter() {
      let center = document.createElement("div");
      center.setAttribute("class", "center");
      center.style.top = scy + "px";
      center.style.left = scx + "px";
      app.appendChild(center);
    }

    function calcAngle(p1, p2) {
      var angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      return radToDegree(angle);
    }

    function radToDegree(rad) {
      return ((rad > 0 ? rad : 2 * Math.PI + rad) * 360) / (2 * Math.PI);
    }

    // Calculate window size
    let scw, sch, scx, scy, centerBounds;
    sch = window.innerHeight;
    scw = window.innerWidth;
    scx = scw / 2;
    scy = sch / 2;
    centerBounds = 40;

    // Place central point
    calcCenter();

    // Create stars
    for (let i = 0; i < 1000; i++) {
      let div = document.createElement("div");
      let top = Math.floor(Math.random() * sch);
      let left = Math.floor(Math.random() * scw);
      let angle = calcAngle({ x: left, y: top }, { x: scx, y: scy });
      div.setAttribute("class", "star");
      div.style.top = top + "px";
      div.style.left = left + "px";
      div.style.transform = "rotate(" + (angle + 180) + "deg)";
      if (
        // No star streaks on central path
        top >= scy - centerBounds &&
        top <= scy + centerBounds &&
        left >= scx - centerBounds &&
        left <= scx + centerBounds
      ) {
        div.style.maxWidth = "1px";
      }
      app.appendChild(div);
    }
  },
};
</script>

<style lang="scss">
@keyframes lightspeed {
  100% {
    width: 100vh;
  }
}

.center {
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: 99;
}

.star {
  border: 1px solid transparent;
  border-radius: 50%;
  border-top-color: #fff;
  margin: 0;
  position: absolute;
  transform-origin: left;
  width: 1px;
  z-index: 99;

  &:nth-child(2n) {
    animation-name: lightspeed;
    animation-direction: alternate;
    animation-duration: 2s;
    animation-delay: 0.2s;
    animation-timing-function: ease-in-out;
  }
}
</style>