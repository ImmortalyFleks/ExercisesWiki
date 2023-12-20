<template>
  <div class="container mt-5">
    <h1>Olympic Weightlifting</h1>
    <h5 class="label-spacing1">Olympic weightlifting focuses on dynamic, full-body movements, emphasizing speed and technique to enhance power, coordination, and athletic performance.</h5>
    <label for="searchInput" class="label-spacing">Choose the muscle group:</label>
    <input ref="searchInput" type="text" id="searchInput" class="form-control mb-2" placeholder="Enter the parameters">
    <label class="label-spacing">
      Possible values are:
    </label>
    <p>
      <span @click="selectMuscle('abdominals')">abdominals</span> &nbsp;&nbsp;
      <span @click="selectMuscle('abductors')">abductors</span> &nbsp;&nbsp;
      <span @click="selectMuscle('adductors')">adductors</span> &nbsp;&nbsp;
      <span @click="selectMuscle('biceps')">biceps</span> &nbsp;&nbsp;
      <span @click="selectMuscle('calves')">calves</span>
    </p>
    <p>
      <span @click="selectMuscle('chest')">chest</span> &nbsp;&nbsp;
      <span @click="selectMuscle('forearms')">forearms</span> &nbsp;&nbsp;
      <span @click="selectMuscle('glutes')">glutes</span> &nbsp;&nbsp;
      <span @click="selectMuscle('hamstrings')">hamstrings</span> &nbsp;&nbsp;
      <span @click="selectMuscle('lats')">lats</span>
    </p>
    <p>
      <span @click="selectMuscle('lower_back')">lower_back</span> &nbsp;&nbsp;
      <span @click="selectMuscle('middle_back')">middle_back</span> &nbsp;&nbsp;
      <span @click="selectMuscle('neck')">neck</span> &nbsp;&nbsp;
      <span @click="selectMuscle('quadriceps')">quadriceps</span> &nbsp;&nbsp;
      <span @click="selectMuscle('triceps')">triceps</span>
    </p>
    <label for="difficultySelect" class="label-spacing">Choose the difficulty of the exercise:</label>
    <select id="difficultySelect" class="form-control mb-2">
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="expert">Expert</option>
    </select>
    <button class="btn btn-primary" @click="search">Search</button>
    <div id="results" class="mt-3"></div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    search() {
      var searchInput = this.$refs.searchInput.value;
      var difficultySelect = document.getElementById('difficultySelect');
      var selectedDifficulty = difficultySelect.options[difficultySelect.selectedIndex].value;

      var apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=' + searchInput + '&difficulty=' + selectedDifficulty + '&type=olympic_weightlifting'
      var apiKey = '68mIwAk6Ewc5CN9bVzgJaQ==hPgh3weSFQEBfrLc';

      $.ajax({
        method: 'GET',
        url: apiUrl,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: (result) => {
          this.displayResults(result);
        },
        error: (jqXHR) => {
          console.error('Error: ', jqXHR.responseText);
        }
      });
    },

    selectMuscle(muscle) {
      this.$refs.searchInput.value = muscle;
    },

    displayResults(data) {
      var resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';

      if (data.length === 0) {
        resultsContainer.innerHTML = 'Wrong muscle group';
        return;
      }

      data.forEach(item => {
        var resultItem = document.createElement('div');
        resultItem.className = 'card mt-3';

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var cardTitle = document.createElement('h4');
        cardTitle.className = 'card-title';
        cardTitle.textContent = item.name;

        var cardInfo = document.createElement('ul');
        cardInfo.className = 'list-unstyled';
        cardInfo.innerHTML = `
            <li><strong>Type:</strong> ${item.type}</li>
            <li><strong>Muscles:</strong> ${item.muscle}</li>
            <li><strong>Equipment:</strong> ${item.equipment}</li>
            <li><strong>Difficulty:</strong> ${item.difficulty}</li>
        `;

        var cardInstructions = document.createElement('i');
        cardInstructions.className = 'card-text';
        cardInstructions.textContent = item.instructions;

        switch (item.difficulty) {
          case 'beginner':
            resultItem.classList.add('bg-success');
            break;
          case 'intermediate':
            resultItem.classList.add('bg-warning');
            break;
          case 'expert':
            resultItem.classList.add('bg-danger');
            break;
          default:
            break;
        }

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardInfo);
        cardBody.appendChild(cardInstructions);

        resultItem.appendChild(cardBody);
        resultsContainer.appendChild(resultItem);
      });
    }
  },
};
</script>
<style src="@/assets/exercises-style.css"></style>



