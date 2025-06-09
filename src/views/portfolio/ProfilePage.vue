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
        <router-link class="link" to="/portfolio/portFolio"
          >Portfolio</router-link
        >
        <router-link class="link" to="/portfolio/creative"
          >Creative</router-link
        >
        <router-link class="link" to="/portfolio/contact">Contact</router-link>

        <button class="link logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </nav>

  <div class="profile-container">
    <div class="text-section">
      <h1>Hi, I’m Tricia Adelaine!</h1>
      <p>
        A student, aspiring Frontend Developer & Creative Technologist. I build
        clean, functional, and user-friendly interfaces.
      </p>
      <p>
        Just so you know, Simplified UI improves focus, speed, and user
        engagement.
      </p>
      <router-link to="/portfolio/portfolio" class="view-work"
        >View my work!</router-link
      >
    </div>
    <div class="image-section">
      <img :src="profile" alt="Tricia smiling" />
    </div>
  </div>

  <div class="scroll-down" @click="scrollToAbout">⌵</div>

  <section id="about" class="about-section">
    <h2>About Me</h2>
    <p>
      I'm 23 year old Computer Engineering Student at Polytechnic University of
      the Phillipines.
    </p>
    <p>
      This is the first time I used Vue in creating responsive web pages, so far
      it's great! My goal is to create a meaningful digital experiences that
      feel intuitive and inspiring. When I'm not coding, I love to sing and
      dance.
      <br />
      <br />
      <router-link to="/portfolio/creative" class="view-work"
        >Check my Creative page!</router-link
      >
      <br />
      <br />
      And by the way! I love cats and dogs :> That's why the logo at the top has
      an orange cat in it.
    </p>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.jpg";
// for burger icon
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const logout = () => {
  router.push("/");
};
//scrolls smoothly to aboutMe section
const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
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

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 6rem;
  max-width: 900px;
  margin: 0 auto;
}

.profile-text {
  max-width: 500px;
  font-size: 1.3rem;
}

.profile-text h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.profile-text p {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.view-work {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.image-section img {
  width: 250px;
  height: auto;
  border-radius: 10px;
}

.scroll-down {
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 1.5s infinite;
  margin-top: 1rem;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}

.about-section {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
