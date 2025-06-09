<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/portfolio/profile">
        <img :src="logo" alt="App logo" class="logo-img" />
      </router-link>

      <button class="burger" @click="toggleMenu">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>

      <div class="navigation" :class="{ open: menuOpen }">
        <router-link class="link" to="/portfolio/profile">Profile</router-link>
        <router-link class="link" to="/portfolio/portFolio">Portfolio</router-link>
        <router-link class="link" to="/portfolio/contact">Contact</router-link>
        <button class="link logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/logo.png';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const logout = () => {
  // You can also clear user data here if needed
  router.push('/');
};
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-img {
  width: 40px;
  height: 40px;
}

.navigation {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.link {
  text-decoration: none;
  color: black;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}

.logout-button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: black;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger-line {
  width: 25px;
  height: 3px;
  background-color: black;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
  .navigation.open {
    display: flex;
  }
  .burger {
    display: flex;
  }
}
</style>
