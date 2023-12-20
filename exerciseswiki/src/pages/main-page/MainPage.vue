<template>
  <div class="container mt-5">
    <h1>Exercises Wiki</h1>
    <h5 class="label-spacing">Choose any exercise type and start practicing! </h5>

    <div class="exercise-container row">
      <div class="exercise col-md-4">
        <router-link to="/cardio">
          <img src="../../images/card.jpg" alt="Cardio">
          <h3>Cardio</h3>
        </router-link>
      </div>

      <div class="exercise col-md-4">
        <router-link to="/powerlifting">
          <img src="../../images/power.jpg" alt="Powerlifting">
          <h3>Powerlifting</h3>
        </router-link>
      </div>

      <div class="exercise col-md-4">
        <router-link to="/stretching">
          <img src="../../images/stretch.jpg" alt="Stretching">
          <h3>Stretching</h3>
        </router-link>
      </div>

      <div class="exercise col-md-4">
        <router-link to="/strength">
          <img src="../../images/strength.jpg" alt="Strength">
          <h3>Strength</h3>
        </router-link>
      </div>

      <div class="exercise col-md-4">
        <router-link to="/plyometrics">
          <img src="../../images/ply.png" alt="Plyometrics">
          <h3>Plyometrics</h3>
        </router-link>
      </div>

      <div class="exercise col-md-4">
        <router-link to="/olympicweightlifting">
          <img src="../../images/olympic.jpg" alt="Olympic Weightlifting">
          <h3>Olympic Weightlifting</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("../../images/background.jpg");
}

body > .container {
  flex: 1;
}

.container {
  width: 100%;
}

.exercise-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.exercise {
  text-align: center;
  margin-bottom: 20px;
}

.exercise img {
  width: 100%;
  height: auto;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1em;
}

.label-spacing {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 20px;
}

h1 {
  text-align: center;
}

h3 {
  font-size: 30px;
  margin-top: 20px;
  color: #434242;
}

h5 {
  color: rgb(0, 0, 0);
  font-style: italic;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
}

.container {
  margin-top: 20px;
}

.exercise-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.exercise {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  margin: 1em;
  flex: 1 0 300px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.exercise a {
  text-decoration: none;
}

.exercise img {
  max-width: 100%;
  border-radius: 8px;
}

.exercise:hover {
  transform: scale(1.05);
}
</style>
