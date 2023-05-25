"use strict";

const User = use("App/Models/User");

class AuthController {
  showRegistrationForm({ view }) {
    return view.render("auth/register");
  }

  async register({ request, response, auth }) {
    const { username, email, password } = request.all();

    await User.create({
      username,
      email,
      password,
    });

    return response.redirect("/gudangbarang");

    await auth.attempt(username, email, password);
  }

  showLoginForm({ view }) {
    return view.render("auth/login");
  }

  async login({ request, response, auth, session }) {
    const { email, password } = request.only(["email", "password"]);

    try {
      await auth.attempt(email, password);
      return response.redirect("/gudangbarang");
    } catch (error) {
      console.log("Login gagal:", error);
      session.flash({ error: "These credentials do not match our records." });
      return response.redirect("/donasi", error);
    }
  }

  async logout({ auth, response }) {
    await auth.logout();
    return response.redirect("/");
  }
}

module.exports = AuthController;
