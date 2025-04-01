<template>
  <div class="wrapper">
  <div class="content-wrapper">
    <div class="about">
      <div class="header">
        <h1>About Us</h1>
        <p class="subtitle">Leading the way in innovative IT solutions</p>
      </div>

      <div class="about-info">
        <div class="content-card mission">
          <h2>Our Mission</h2>
          <p>To provide state of the art IT consulting services that transform businesses and drive success in the digital age. We combine expertise, innovation, and dedication to deliver solutions that matter.</p>
        </div>

        <div class="about-sections">
          <div class="about-section">
            <h3>Who We Are</h3>
            <p>A 5 person team of passionate IT professionals dedicated to helping businesses thrive in the digital world. Each team member brings invaluable skills and expertise to the table that enhances our ability to help businesses thrive.</p>
          </div>

          <div class="about-section">
            <h3>Our Approach</h3>
            <p>By truly understanding and evaluating the needs of each indivdual client we tailor a business plans just for you. We combine each members experience and skills to drawn up a personalized and effect plan to push your business to its greatest potential.</p>
          </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header { text-align: center; margin-bottom: 3rem; color: var(--secondary-color); 

.header h1 {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}}

.about-info { display: grid; gap: 2rem;
}

.mission h2 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.mission p {
  color: var(--text-color);
}

.about-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-section h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

</style>