<template>
  <div id="app">
    <div class="card" v-if="cities.length || citizens.length">
      <ul class="card-list">
        <li
          class="card-item"
          v-for="city in cities"
          :key="city.id"
          @click="getDistricts(city.id)"
        >
          <label class="label">
            <input class="label-input" type="radio" name="city" />
            <span class="label-text">
              {{ city.name }}
            </span>
          </label>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="card" v-if="districts.length">
        <ul class="card-list">
          <li
            class="card-item"
            v-for="(district, $i) in districts"
            :key="$i"
            @click="getStreets(district)"
          >
            <label>
              <input class="label-input" type="radio" name="district" />
              <span class="label-text">
                {{ district }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="card" v-if="streets.length">
        <ul class="card-list">
          <li
            class="card-item"
            v-for="(street, $i) in streets"
            :key="$i"
            @click="getPeople(street)"
          >
            <label>
              <input class="label-input" type="radio" name="street" />
              <span class="label-text">
                {{ street }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="fade">
      <div class="card" v-if="people.length">
        <ul class="card-list">
          <li class="card-item" v-for="(person, $i) in people" :key="$i">
            <span class="card-text">
              {{ person }}
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      districts: [],
      streets: [],
      people: [],
    };
  },
  created() {
    this.fetchCities();
    this.fetchCitizens();
  },
  computed: {
    ...mapGetters(["cities", "citizens"]),
  },
  methods: {
    ...mapActions(["fetchCities", "fetchCitizens"]),
    getDistricts(id) {
      // filter citizens by city id
      const districtsArr = this.citizens
        .filter((citizen) => citizen.id === id)
        .map((item) => item.groups[1].name);
      this.districts = [...new Set(districtsArr)];
      this.streets = [];
      this.people = [];
    },
    getStreets(district) {
      this.streets = [];
      const streetsArr = this.citizens
        .filter((item) => item.groups[1].name === district)
        .map((item) => item.groups[2].name);
      this.streets = [...new Set(streetsArr)];
      this.people = [];
    },
    getPeople(street) {
      let peopleArr = this.citizens
        .filter((item) => item.groups[2].name === street)
        .map((item) => item.name);
      this.people = [...new Set(peopleArr)];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}
#app {
  display: flex;
  align-items: flex-start;
  padding: 20px;
}

.card {
  margin-right: 10px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 10px;
  width: 250px;
}

.card-list {
  padding: 0;
}

.label,
.label-text {
  display: block;
}

.label-input {
  display: none;
}

.label-text {
  border-radius: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
}

input[type="radio"]:checked ~ * {
  background-color: rgb(60, 175, 175);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
