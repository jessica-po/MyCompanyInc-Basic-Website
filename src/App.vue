<template>
  <div class="whole-container">
    <nav class ="side-bar">
      <div class="nav-content">
      <div class="nav-bar-title">
        <h1> MyCompany Inc </h1>
      </div>
      <div class="links">
        <RouterLink to="/" class="links">
          <span>Home</span>
        </RouterLink>
        <RouterLink to="/about" class="links">
          <span>About Us</span>
        </RouterLink>
        <RouterLink to="/services" class="links">
          <span>Our Services</span>
        </RouterLink>
        <RouterLink to="/customers" class="links">
          <span>Our Customers</span>
        </RouterLink>
      </div>
      </div>
    </nav>
<main class="main-content">
      <RouterView />
    </main>
  </div>

</template>

<style> 
.router-link-active {
  background-color: rgba(76, 175, 80, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .nav-content {flex-direction: column;}
}

</style>