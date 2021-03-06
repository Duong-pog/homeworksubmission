const components = {};
components.welcomeScreen = `
    <h1>This is my Screen</h1>
    <div>This is welcomeScreen to learn this web</div>
    <input type="text">
`;

// toan bộ code html sẽ ở trong components.js này
components.registerScreen = `
  <!-- code phan input -->
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="First name" />
      </div>
      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Last name" />
      </div>
    </div>

    <!-- code the email -->
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email..." />
      <div class="error" id="email-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="password"
        placeholder="Please input your password"
      />
      <div class="error" id="password-error"></div>
    </div>

    <div class="input-wrapper">
      <input
        type="password"
        name="confirmPassword"
        placeholder="Please input your password again"
      />
      <div class="error" id="confirm-password-error"></div>
    </div>

    <!-- da xong cac truong input -->
    <div class="form-action">
      <span class = "cursor-pointer" id="redirect-to-login"> Already have an account? Login </span>

      <button class="btn" type="submit">Register</button>
    </div>
  </form>
`;

components.loginScreen = `
        <form id="login-form">
          <!-- code the email -->
          <div class="input-wrapper">
            <input type="email" name="email" placeholder="Email..." />
            <div class="error" id="email-error"></div>
          </div>

          <div class="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Please input your password"
            />
            <div class="error" id="password-error"></div>
          </div>

          <!-- da xong cac truong input -->
          <div class="form-action">
            <span class="cursor-pointer" id="redirect-to-register">
              Don't have an account? register
            </span>
            <button class="btn" type="submit">Login</button>
          </div>
        </form>`;


  components.chatScreen = `
  <h1 id ="welcome-user"></h1>
  <button id="logOut">Log out</button>
  `