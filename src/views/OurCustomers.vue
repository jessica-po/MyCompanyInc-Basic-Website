<template>
  <div class="content-wrapper">
    <div class="customers">
      <div class="page-header">
        <h1>Our Customers</h1>
        <p class="subtitle">Trusted by industry leaders across many divisions, these are only some of our current clients</p>
      </div>

      <div class="customers-grid">
        <div class="customer-card">
          <h3>Financial Services</h3>
          <p>Helping institutions like banks and private businesses modernize their systems and improve customer experience.</p>
        </div>


        <div class="customer-card">
          <h3>Healthcare</h3>
          <p>Transforming healthcare delivery through innovative IT solutions.</p>
        </div>

        <div class="customer-card">
          <h3>Government</h3>
          <p>Providing secure and efficient solutions for government agencies.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.customers {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center; margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}


.subtitle {
  fot-size: 1.2rem;
  color: var(--text-color);
  max-width: 800px;
  margin: 0 auto;
}

.customers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.customer-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px;
  transition: transform 0.3s ease;
}

.customer-card h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.customer-card p {
  color: var(--text-color);
  line-height: 1.6;
}



</style>