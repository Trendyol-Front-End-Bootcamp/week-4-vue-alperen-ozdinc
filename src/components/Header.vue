<template>
  <header>
    <a href="/" class="header-logo">
      <img class="logo" src="../assets/logo.png" alt="" />
      <h1>Starships</h1>
    </a>
  </header>
  <div class="lightsaber">
    <div class="plasma"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.logo {
  transform: scale(0.65);
}
.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #ffe81f;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 6px;
  }
}
.lightsaber {
  position: relative;
  .plasma {
    height: 6px;
    border-radius: 12px;
    filter: blur(1px);
    background: -webkit-linear-gradient(
      top,
      rgba(229, 17, 21, 1) 0%,
      rgba(254, 254, 254, 1) 30%,
      rgba(254, 254, 254, 1) 47%,
      rgba(254, 254, 254, 1) 71%,
      rgba(229, 17, 21, 1) 100%
    );
    animation-name: vader;
    -moz-animation-name: vader;
    -webkit-animation-name: vader;
    -o-animation-name: vader;
    -ms-animation-name: vader;
    animation-duration: 2s;
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    -o-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
  }
}
@-moz-keyframes vader {
  from {
    box-shadow: 0 0 10px #e51115;
  }
  50% {
    box-shadow: 0 0 16px #e51115;
  }
  to {
    box-shadow: 0 0 10px #e51115;
  }
}
@-webkit-keyframes vader {
  from {
    box-shadow: 0 0 10px #e51115;
  }
  50% {
    box-shadow: 0 0 16px #e51115;
  }
  to {
    box-shadow: 0 0 10px #e51115;
  }
}
@-o-keyframes vader {
  from {
    box-shadow: 0 0 10px #e51115;
  }
  50% {
    box-shadow: 0 0 16px #e51115;
  }
  to {
    box-shadow: 0 0 10px #e51115;
  }
}
@-ms-keyframes vader {
  from {
    box-shadow: 0 0 10px #e51115;
  }
  50% {
    box-shadow: 0 0 16px #e51115;
  }
  to {
    box-shadow: 0 0 10px #e51115;
  }
}
</style>