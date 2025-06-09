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
  <div class="portfolio-page">
    <div
      v-for="(item, index) in projects"
      :key="index"
      class="portfolio-item"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <div class="image-wrapper" :class="{ slideIn: visible }">
        <img :src="item.img" :alt="item.title" />
      </div>
      <div class="caption">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/logo.png";
// for burger icon
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const router = useRouter();
const logout = () => {
  router.push("/");
};

import project1Img from "@/assets/collection/uprint.png";
import project2Img from "@/assets/collection/inventory.png";
import project3Img from "@/assets/collection/portfolio1.png";
import project4Img from "@/assets/collection/HomeView.png";
import project5Img from "@/assets/collection/orijin.png";
import project6Img from "@/assets/collection/nail.png";
import project7Img from "@/assets/collection/pubmats.png";

// Slide-in animation trigger
const visible = ref(false);
onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, 100);
});

// Project data
const projects = [
  {
    title: "UPRINT Printing Kiosk - a self-print kiosk",
    description:
      "A simple UI for a self-print kiosk to be display on a screen and interacted by users",
    img: project1Img,
    link: "#",
  },
  {
    title: "Bakery Mobile App Inventory",
    description:
      "Responsive mobile app UI for Elyon Bakery staffs and owner. For an everyday inventory of the breads available for bread spoilage regulation",
    img: project2Img,
    link: "#",
  },
  {
    title: "SmartGrow Logo for web dashboard",
    description:
      "SmartGrow is an irrigation system that water plants remotely. This logo is made for both light mode and dark mode.",
    img: project3Img,
    link: "#",
  },
  {
    title: "SmartGrow Web Dashboard",
    description:
      "A simple web dashboard navigator for the SmartGrow irrigation system including informations about moisture and temoerature",
    img: project4Img,
    link: "#",
  },
  {
    title: "Orijin",
    description:
      "farming app that helps navigate resources, this design is for the workspaces section in mobile version",
    img: project5Img,
    link: "#",
  },
  {
    title: "Nail & Lash by Lhyn Logo",
    description:
      "A nail and lash extension service. Logo was made for branding purposes and social media pages profile photo of the business.",
    img: project6Img,
    link: "#",
  },
  {
    title: "MRJC Prints & Crafts",
    description:
      "Some of my created pubmat as a social media manager of MRJC prints & crafts. MRJC Offers printing services, tshirts, mugs, tote bags, jackets and many more",
    img: project7Img,
    link: "#",
  },
];
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
  margin-bottom: 4rem;
}

.portfolio-item.reverse {
  flex-direction: row-reverse;
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
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.image-wrapper.slideIn {
  opacity: 1;
  transform: translateY(0);
}

.image-wrapper img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
