<script setup>
import logo from "@/assets/brand.png";
// import LineChart from "@/components/LineChart.vue";
</script>

<template>
  <div class="bg-light">
    <nav class="navbar">
      <div class="navbar-container">
        <a class="navbar-brand" href="#"
          ><img :src="logo" alt="SmartGrow Logo" class="logo-img"
        /></a>
        <div class="navigation">
          <strong><router-link class="home" to="/">Home</router-link></strong>
          <router-link class="chart" to="/chart"
            >Soil Moisture Chart</router-link
          >
          <router-link class="logs" to="/logs">Watering Log</router-link>
          <router-link class="sched" to="/sched">Watering Schedule</router-link>
        </div>
        <button class="login-button">Login</button>
      </div>
    </nav>
    <!-- -->

    <div class="container">
      <div class="row">
        <div class="col" v-for="(card, index) in overviewCards" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text" v-html="card.content"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row1">
        <div class="card">
          <div class="card-body">
            <p class="card-title">
              <strong>Moisture Threshold</strong> Trigger watering below
              <strong>{{ moistureThreshold }}%</strong>
            </p>
            <input type="range" min="0" max="100" v-model="moistureThreshold" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Manual Control</h5>
              <label>
                <input type="checkbox" v-model="manualControl" /> Solenoid Valve
              </label>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Auto Mode</h5>
              <label>
                <input type="checkbox" v-model="autoMode" /> Enable Automation
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-large">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Soil Moisture Chart</h5>
              <LineChart />
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column gap-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Watering Schedule</h5>
              <p>Set schedule for automatic watering:</p>
              <input type="time" v-model="schedule1" class="time-input" />
              <input type="time" v-model="schedule2" class="time-input" />
            </div>
            <div class="row1">
              <div class="card-body">
                <h5 class="card-title"><strong>Last Watered</strong></h5>
                <p>May 18, 2025 - 8:42 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="card">
        <div class="card-body">
          <h5 class="card-title">Watering Logs</h5>
          <table class="log-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Moisture</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(log, index) in logs" :key="index">
                <td>{{ log.date }}</td>
                <td>{{ log.time }}</td>
                <td>{{ log.moisture }}</td>
                <td>{{ log.action }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      manualControl: true,
      autoMode: false,
      moistureThreshold: 40,
      schedule1: "",
      schedule2: "",
      overviewCards: [
        {
          title: "Moisture Level",
          content: '45% <span class="badge status-badge warning">Normal</span>',
        },
        {
          title: "Temperature",
          content: "28°C",
        },
        {
          title: "Humidity",
          content: "60%",
        },
        {
          title: "Solenoid Valve",
          content: '<span class="badge status-badge success">ON</span>',
        },
        // {
        //   title: "Last Watered",
        //   content: "May 18, 2025 - 8:42 AM",
        // },
      ],
      logs: [
        {
          date: "May 18, 2025",
          time: "08:42 AM",
          moisture: "39%",
          action: "Auto Watered",
        },
        {
          date: "May 17, 2025",
          time: "07:15 PM",
          moisture: "35%",
          action: "Manual Watered",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #b9ecaa;
  padding: 1rem;
}
.navbar {
  color: white;
  padding: 1rem;
  margin-bottom: 1%;
}
.navbar-container {
  display: flex;
  align-content: center;
  align-items: center;
}
.navbar-brand {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}
.login-button {
  background-color: #198754;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 2%;
}

.login-button:hover {
  background-color: #157347;
}

.container {
  max-width: 1000px;
  margin: auto;
}
.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.row1 {
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  max-width: auto;
}
.col {
  flex: 1 1 22%;
  min-width: 200px;
}
.col-large {
  flex: 2;
  min-width: 300px;
}
.col-small {
  flex: 1;
  min-width: 200px;
}
.card {
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.card-body {
  padding: 25px;
}
.card-title {
  font-size: 1.25rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.status-badge {
  font-size: 0.9rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  display: inline-block;
}
.badge.success {
  background-color: #198754;
  color: white;
}
.badge.warning {
  background-color: #ffc107;
  color: black;
}
.chart-placeholder {
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-style: italic;
}
.time-input {
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-family: poppins;
  font-weight: bold;
  font-size: 12.497px;
}
.log-table {
  width: 100%;
  border-collapse: collapse;
}
.log-table th,
.log-table td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}
.log-table thead {
  background-color: #e9ecef;
}
.home,
.chart,
.logs,
.sched {
  text-decoration: none;
  color: black;
  align-content: right;
  justify-content: space-between;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: right;
  gap: 5rem;
  font-size: larger;
  margin-left: 25%;
}

.logo-img {
  width: 300px;
  height: auto;
}
input[type="range"] {
  width: 100%;
  max-width: auto;
  display: block;
  margin-top: 0.5rem;
}
</style>
