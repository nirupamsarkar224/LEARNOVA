# LEARNOVA
LEARNOVA – A modern digital learning platform designed to make education accessible, interactive, and effective through online classes, study materials, practice tests, and smart learning tools.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Learnova | Learn Without Limits</title>

  <meta name="theme-color" content="#080d1b">

  <link rel="stylesheet" href="style.css">
  <link rel="manifest" href="manifest.json">

</head>

<body>

  <header class="navbar">
    <div class="logo">LEARNOVA<span>.</span></div>

    <button class="menu-btn" onclick="toggleMenu()">☰</button>

    <nav id="menu">
      <a href="#home">Home</a>
      <a href="#courses">Courses</a>
      <a href="#about">About</a>
      <a href="#login" class="login-btn">Login</a>
    </nav>
  </header>

  <main>

    <section class="hero" id="home">
      <div class="hero-content">

        <span class="badge">YOUR FUTURE STARTS HERE</span>

        <h1>Learn Today.<br>
        <span>Lead Tomorrow.</span></h1>

        <p>
          Discover knowledge, develop skills and build
          your future with Learnova.
        </p>

        <div class="hero-buttons">
          <a href="#courses" class="primary-btn">Explore Courses</a>
          <a href="#about" class="secondary-btn">Learn More</a>
        </div>

      </div>
    </section>

    <section class="courses" id="courses">

      <h2>Explore Learning</h2>
      <p class="section-subtitle">
        Choose your learning journey.
      </p>

      <div class="course-grid">

        <div class="course-card">
          <div class="course-icon">⚡</div>
          <h3>Electrical</h3>
          <p>Explore electrical engineering and technology.</p>
          <button onclick="selectCourse('Electrical')">Explore →</button>
        </div>

        <div class="course-card">
          <div class="course-icon">💻</div>
          <h3>Computer Science</h3>
          <p>Learn programming and digital technologies.</p>
          <button onclick="selectCourse('Computer Science')">Explore →</button>
        </div>

        <div class="course-card">
          <div class="course-icon">📡</div>
          <h3>Communication</h3>
          <p>Discover electronics and communication.</p>
          <button onclick="selectCourse('Communication')">Explore →</button>
        </div>

        <div class="course-card">
          <div class="course-icon">⚙️</div>
          <h3>Mechanical</h3>
          <p>Understand machines and engineering systems.</p>
          <button onclick="selectCourse('Mechanical')">Explore →</button>
        </div>

      </div>

    </section>

    <section class="about" id="about">
      <h2>About Learnova</h2>
      <p>
        Learnova is a learning platform designed to make
        education accessible, engaging and meaningful
        for every learner.
      </p>
    </section>

    <section class="login-section" id="login">
      <h2>Start Your Journey</h2>
      <p>Student registration and login coming soon.</p>
      <button class="primary-btn" onclick="showMessage()">
        Get Started
      </button>
    </section>

  </main>

  <footer>
    <div class="logo">LEARNOVA<span>.</span></div>
    <p>Learn Without Limits.</p>
    <p>© 2026 Learnova. All rights reserved.</p>
  </footer>

  <script src="app.js"></script>

</body>
</html>
