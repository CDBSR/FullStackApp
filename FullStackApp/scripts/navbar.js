
/* Navbar and Footer Functionality */

// navbar
export function renderNavbar() {
    const navbar =`<div>
        <a href="index.html">Home</a>
        <a href="signup.html">Sign Up</a>
        <a href="login.html">Log In</a>
        <a href="todo.html">Todos</a>
      </div>`;

      document.getElementById('navbar').innerHTML = navbar;
  }
  
  // footer
  export function renderFooter() {
    const footer =  `<p>&copy; 2024 Todo App. All rights reserved.</p>`;

    document.getElementById('footer').innerHTML = footer;
  }
  

  