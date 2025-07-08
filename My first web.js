<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Creative Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      font-family: 'Segoe UI', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: #fff;
      padding: 40px 30px;
      border-radius: 16px;
      box-shadow: 0 12px 32px rgba(30,60,114,0.2);
      max-width: 400px;
      width: 90%;
      text-align: center;
      animation: fadeIn 1.6s;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(60px);}
      to { opacity: 1; transform: none;}
    }
    h1 {
      margin: 0 0 10px;
      color: #2a5298;
      font-size: 2.5em;
    }
    p {
      color: #444;
    }
    .portfolio-link {
      display: inline-block;
      margin-top: 30px;
      padding: 12px 28px;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      letter-spacing: 1px;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 16px rgba(42,82,152,0.12);
    }
    .portfolio-link:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 32px rgba(42,82,152,0.20);
    }
    .typing {
      border-right: 2px solid #2a5298;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      animation: typing 2.5s steps(30, end), blink-caret 0.7s step-end infinite;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #2a5298 }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1><span class="typing" id="intro"></span></h1>
    <p>Welcome to my portfolio website! <br>
    I am a passionate developer who loves creating interactive web experiences using JavaScript, CSS, and HTML.</p>
    <a class="portfolio-link" href="https://github.com/ujjawal233/js-web" target="_blank">View My Projects</a>
  </div>
  <script>
    // Typing effect
    const introText = "Hi, I'm Ujjawal!";
    let i = 0;
    function type() {
      if (i < introText.length) {
        document.getElementById('intro').innerHTML += introText.charAt(i);
        i++;
        setTimeout(type, 90);
      }
    }
    type();
  </script>
</body>
</html>