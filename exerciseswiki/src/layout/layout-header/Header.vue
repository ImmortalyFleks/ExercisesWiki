<script setup>
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <router-link to="/" class="navbar-brand">Exercises Wiki</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/cardio" class="nav-link">Сardio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/powerlifting" class="nav-link">Powerlifting</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/strength" class="nav-link">Strength</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stretching" class="nav-link">Stretching</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/plyometrics" class="nav-link">Plyometrics</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/olympicweightlifting" class="nav-link">Olympic Weightlifting</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.navbar.fixed-top {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  margin-left: 10px;
}
</style>
