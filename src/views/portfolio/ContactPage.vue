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
        <router-link class="link" to="/portfolio/creative">Creative</router-link>
        <router-link class="link" to="/portfolio/contact">Contact</router-link>
        <button class="link logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
  <div class="contact-page">
    <h1>Get in Touch</h1>
    <p>If you’d like to work together or just say hi, feel free to drop a message below.</p>

    <form @submit.prevent="submitForm" class="contact-form">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <!-- Sorry the Submit button doesn't work -->
    <div class="contact-info">
      <p>Or email me directly at <a href="mailto:romero.adelaine@gmail.com">romero.adeleine@gmail.com</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/logo.png';
// for burger icon
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const logout = () => {
  router.push('/');
};

const name = ref('')
const email = ref('')
const message = ref('')
//The submit form doesn't actually work, I believe i need to setup emailjs for this
const submitForm = () => {
  alert(`Message sent!\n\nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
  name.value = ''
  email.value = ''
  message.value = ''
}
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

.contact-page {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
}

.contact-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.contact-page p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
}

.contact-form button {
  padding: 0.75rem;
  max-width: 100%;
  font-size: 1rem;
  font-weight: bold;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background-color: #333;
}

.contact-info {
  margin-top: 2rem;
  font-size: 0.95rem;
}

.contact-info a {
  text-decoration: underline;
  color: black;
}
</style>
