import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co. </h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasNum > 0 ? (
        <React.Fragment>
          <p>
            we are the best pizza resturant in syria we make the most delicious
            pizzas you will ever try
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaOb={pizza} key={pizza.name} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p> we are working on our menu. please come back later):</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = hour >= 10 && hour <= 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} openHour={open} />
      ) : (
        <p>
          sorry we're closed we're happy to welcome you between {open}:00 Am And{" "}
          {close}:00 Pm
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00 come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ pizzaOb }) {
  return (
    <li className={`pizza ${pizzaOb.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOb.photoName} alt={pizzaOb.name} />
      <div>
        <h3>{pizzaOb.name}</h3>
        <p>{pizzaOb.ingredients}</p>
        <span>{pizzaOb.soldOut ? "SOLD OUT" : +pizzaOb.price}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
