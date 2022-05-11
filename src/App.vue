
<template>
  <header>
    <div class="header-box">
      <img src="@/assets/logo.png" alt="LaPar" class="logo" />
      <h3 class="logo-text">Limassol property prices analytic</h3>
    </div>
  </header>
  <div class="main-content">
    <Dimentions />    
  </div>
</template>

<script lang="ts">
import { Dimentions } from "./components/Dimentions";
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600&display=swap");

@import "@/assets/style.css";
.logo {
  align: left;
  max-width: 100;
}
.header-box {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.logo-text {
  font-size: 22px;
  font-weight: 400;
  padding-left: 2pc;
}
.dimentions {
  list-style-type: none;
  max-width: 155px;
  display: flex;
  flex-direction: column;
  align-content: left;
}
.dimention-item {
  padding-top: 12px;
  max-width: 150px;
}

.item-disabled:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
