<template>
  <main>
    <header class="header">
      <div class="bg-image__header"></div>
      <div class="header-wrapper">
        <div class="header-menu-bar">
          <img src="../assets/images/logo.png" class="logo-icon" />
        </div>
        <div class="hero-content">
          <h1>Vendre Productteam</h1>
          <h3>
            E-commerce is expanding rapidly. There are constantly new plugins,
            additional services and requirements. We who work with development
            monitor the industry and develop our customers' platforms so that
            they are always up to date.
          </h3>
          <div class="button">
            <a href="" class="hero-button">Let's talk!</a>
          </div>
        </div>
      </div>
    </header>
    <section class="main-content">
      <h3>We are the Vendre team</h3>

      <EmployeeList />
    </section>
  </main>
</template>

<script>
import EmployeeList from "../components/EmployeeList.vue";

export default {
  components: {
    EmployeeList,
  },
};
</script>

<style scoped>
.bg-image__header {
  position: relative;
  width: 100%;
  background-image: url("../assets/images/img1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 560px;
}

.bg-image__header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.6
  ); /* Adjust the opacity value to control the darkness */
}

.header-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header-menu-bar {
  display: flex;
  place-content: center;
}
.header-menu-bar img {
  width: 160px;
}

.header {
  position: relative;
  width: 100%;
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.hero-content h1 {
  font-size: 46px;
}
.hero-content h3 {
  font-weight: 400;
  line-height: 24px;
  font-size: 18px;
}
.button {
  margin-top: 30px;
}
.hero-button {
  padding: 16px 42px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #5332ed;
  cursor: pointer;
}
.hero-button:hover {
  background-color: #5d42d6;
}
.main-content {
  padding: 15px 9%;
}
.main-content {
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: 80px 0;
  width: 100%;
  padding: 0 30px;
  overflow: hidden;
}

.main-content h3 {
  display: flex;
  place-content: center;
  text-align: center;
  font-size: 40px;
  margin-bottom: 40px;
}
</style>
