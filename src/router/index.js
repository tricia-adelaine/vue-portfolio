import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import ChartView from '@/views/ChartView.vue'
// import LogsView from '@/views/LogsView.vue'
// import ScheduleView from '@/views/ScheduleView.vue'
import ProfilePage from '@/views/portfolio/ProfilePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import PortfolioPage from '@/views/portfolio/PortfolioPage.vue'
import ContactPage from '@/views/portfolio/ContactPage.vue'
import CreativePage from '@/views/portfolio/CreativePage.vue'

const routes = [
  // { path: '/', name: 'Home', component: HomeView },
  // { path: '/chart', name: 'Chart', component: ChartView },
  // { path: '/logs', name: 'Logs', component: LogsView },
  // { path: '/sched', name: 'Schedule', component: ScheduleView },
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/portfolio/profile', name: 'Profile', component: ProfilePage },
  { path: '/portfolio/portFolio', name: 'Portfolio', component: PortfolioPage },
  { path: '/portfolio/contact', name: 'Contact', component: ContactPage },
  { path: '/portfolio/creative', name: 'Creative', component: CreativePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
