"use strict";

const { get } = require("@adonisjs/lucid/src/Factory");
const Donasi = require("../app/Models/Donasi");
const DonasiController = require("../app/Controllers/Http/DonasiController");

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", async ({ view }) => {
  return view.render("pages/beranda", {
    title: "Beranda",
  });
});

Route.get("/tes", async ({ view, response }) => {
  const cards = await Donasi.all();

  return view.render("pages/donasi", {
    title: "Donasi",
    cards: cards.toJSON(),
  });
});

Route.get("/donasi", "DonasiController.index");

Route.get("/donasi/:slug", "DonasiController.showDetilDonasi");

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

