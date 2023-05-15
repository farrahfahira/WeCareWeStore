"use strict";

const { get } = require("@adonisjs/lucid/src/Factory");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", async ({ view, response }) => {
  return view.render("pages/beranda", {
    title: "Beranda",
  });
});

Route.get("/donasi", async ({ view, response }) => {
  return view.render("pages/donasi", {
    title: "Donasi",
  });
});

Route.get("/gudangbarang", async ({ view, response }) => {
  return view.render("pages/gudangbarang", {
    title: "Gudang Barang",
  });
});

Route.get("/login", "AuthController.showLoginForm");
Route.post("/login", "AuthController.login").as("login");
Route.post("/logout", "AuthController.logout").as("logout");
Route.get("/register", "AuthController.showRegistrationForm");
Route.post("/register", "AuthController.register").as("register");
