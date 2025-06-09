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
  <!-- I shared my talent/hobbies in the creative page instead -->
  <div class="portfolio-page">
    <div class="portfolio-item">
      <div class="caption">
        <h2>Yes! I sing!</h2>
        <p>
          I use my talent from and for the Lord. In our Church, I am a Worship
          Leader in Hosea Bridal Church Internatiol Inc. - Main Music team. I am
          really blessed that I finally got to share my talent and tell people
          how God works in our lives through worship.
        </p>
      </div>
      <div class="image-wrapper" :class="{ slideIn: imageVisible }">
        <img :src="projectImg1" alt="me singing" />
      </div>
    </div>
    <div class="portfolio-item">
      <div class="caption">
        <h2>Yes! I dance!</h2>
        <p>
          Dancing is also been a part of my life. It brings me peace, joy and
          satisfaction. I really love music, once I heard that vibing song, I
          dance with it and immediately came up of a dance step even though it's
          not really good.
        </p>
      </div>
      <div class="image-wrapper" :class="{ slideIn: imageVisible }">
        <img :src="projectImg2" alt="me dancing" />
      </div>
    </div>
    <div class="portfolio-item">
      <div class="caption">
        <p>
          I am really blessed to be part of the Music Ministry. Singing has
          always been a passion of mine since I was a kid. I inheret this
          wonderful voice from my mother and my grandmother. I really love how I
          am maturing how to live life with Jesus, and how my voice enhances
          every week as I practice and lead the congregation through worship!
        </p>
      </div>
    </div>
    <div class="portfolio-grid">
      <div class="grid-item" v-for="(item, index) in projects" :key="index">
        <img :src="item.img" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/logo.png";
import projectImg1 from "@/assets/collection/sing1.png";
import projectImg2 from "@/assets/collection/dance.png";
import project1Img from "@/assets/collection/sing2.png";
import project2Img from "@/assets/collection/sing3.png";
import project3Img from "@/assets/collection/sing4.png";

const projects = [
  {
    img: project1Img,
  },
  {
    img: project2Img,
  },
  {
    img: project3Img,
  },
];
// for burger icon
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const logout = () => {
  router.push("/");
};

const imageVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    imageVisible.value = true;
  }, 100);
});
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

.portfolio-page {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.portfolio-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.caption {
  flex: 1;
}

.caption h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.caption p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.view-link {
  text-decoration: underline;
  color: black;
  font-weight: bold;
}

.image-wrapper {
  flex: 1;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease-out;
}

.image-wrapper.slideIn {
  opacity: 1;
  transform: translateX(0);
}

.image-wrapper img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-item {
  text-align: center;
}

.grid-item img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.grid-item img:hover {
  transform: scale(1.05);
}

.view-link {
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: underline;
  color: black;
  font-weight: bold;
}
</style>
