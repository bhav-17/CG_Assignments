

## Question 1 — Fix the navigation bar 

[GitHub - LauraYaguezTonanes/Navigation-Bar: A navigation bar (or navigation system) is a section of a graphical user interface intended to aid visitors in accessing information. Navigation bars are implemented in file browsers, web browsers and as a design element of some web sites. · GitHub](https://images.openai.com/static-rsc-4/DHAaDgcrfVcGhi4JBwFPRacXg_An5JFyquZHhvQBc_pR5Xx6FRX_9zGbRTzhFzFaLKZ1KR0TMfbMD3xcGMkZJ-XbNHZj8MvEuwMeHHYtAFeJpJOPZJDzSEnXVNDIPqBPScl8H6QK7sBY5tj2pUFI4O6B_tHjlO0nCd51oDqLvyw?purpose=inline)


```
<header class="navbar">
  <div class="logo">CodeAcademy</div>

  <ul class="nav-links">
    <li>Home</li>
    <li>Courses</li>
    <li>Projects</li>
    <li>Contact</li>
  </ul>

  <div class="auth-buttons">
    <button>Login</button>
    <button>Signup</button>
  </div>
</header>
```

Broken CSS

```
* {
  box-sizing: border-box;
}

.navbar {
  display: block;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  background: #222;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  display: block;
  list-style: disc;
  padding: 0;
  margin: 0;
  gap: 25px;
}

.nav-links li {
  display: block;
}

.auth-buttons {
  display: block;
  gap: 10px;
}

button {
  padding: 10px 18px;
}
```

Your tasks

1. Position the logo on the left, navigation links in the middle area, and buttons on the right.
2. Vertically center all elements inside the 80px-high navbar.
3. Display the navigation links in a single horizontal row without bullets.
4. Add 25px spacing between menu items and 10px between buttons.
5. Make sure the menu items do not wrap onto another line.
6. Use Flexbox for the layout instead of floats or absolute positioning.

Expected result: A clean, single-row navigation bar with proper spacing and alignment.
