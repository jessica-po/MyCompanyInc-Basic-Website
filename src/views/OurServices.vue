<template>
  <div class="content-wrapper">
    <div class="services">
      <div class="page-header">
        <h1>Our Services</h1>
        <p class="subtitle"> IT solutions tailored to your needs</p>
      </div>

      <div class="services-grid">
        <div class="service-card">
          <h3>IT Consulting</h3>
          <p>Technology based planning and advisory services to help your business thrive in the digital age.</p>
        </div>

        <div class="service-card">
          <h3>Cybersecurity</h3>
          <p>Comprehensive security solutions to protect you from cyber threats.</p>
        </div>

        <div class="service-card">
          <h3>Cloud Solutions</h3>
          <p>Cloud migration and management services to enhance scalability and efficiency.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

.services {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header h1 {
  font-size: 2.5;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  text-align: center
}

.subtitle { font-size: 1.2rem;  text-align: center; color: var(--text-color); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px;
  transition: transform 0.3s ease;
}

.service-card h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

</style>