<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">LOGIN</h1>
      <p class="login-subtitle">Hi there!</p>
      <p class="login-instruction">Enter your details to get signed in</p>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label> Enter Username</label>
          <input type="text" placeholder="Enter username" required />
        </div>

        <div class="input-group">
          <label>Enter password</label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <button type="submit" class="login-button">Sign in</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "tricia",
      password: "1234",
      errorMessage: "Incorrect username or password",
    };
  },
  //this handles the login only accepting the set username and password
  methods: {
    handleLogin() {
      const validUsername = "tricia";
      const validPassword = "1234";

      if (this.username === validUsername && this.password === validPassword) {
        this.$router.push("./portfolio/profile");
      } else {
        this.errorMessage = "Invalid username or password";
      }
      alert('Logging in...')
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
}

.login-card {
  position: relative;
  background: white;
  padding: 2rem;
  box-shadow: 8px 8px 0px #7e7d7d;
  border: 1px solid #ccc;
  width: 320px;
  text-align: center;
}

.login-title {
  font-size: 2rem;
  font-weight: bold;
}

.login-subtitle {
  margin: 0.5rem 0 0.2rem;
  font-weight: normal;
}

.login-instruction {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #444;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.input-group input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.login-button {
  background: black;
  color: white;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.register-text {
  margin-top: 1.5rem;
  font-size: 0.85rem;
}

.register-link {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
</style>

