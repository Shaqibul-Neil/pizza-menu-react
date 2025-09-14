//Data
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozzarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozzarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozzarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozzarella, ham, arugula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const Header = function () {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
const Menu = function () {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </ul>
    </main>
  );
};

import focaccia from './assets/focaccia.jpg';

const Pizza = function () {
  return (
    <li className="pizza">
      <img src={focaccia} alt="Focaccia" />
      <div>
        <h3>Focaccia</h3>
        <p>Bread with italian olive oil and rosemary</p>
        <span>Price: $6</span>
      </div>
    </li>
  );
};

const Footer = function () {
  const restaurantOpen = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    // const isOpen = hour >= openHour && hour <= closeHour;
    // console.log(isOpen);
    hour >= openHour && hour <= closeHour
      ? `We are currently open`
      : `We're open from 12:00 to 22:00. Come visit us or order online.`;
  };
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  // hour >= openHour && hour <= closeHour
  //   ? `We are currently open`
  //   : `We're open from 12:00 to 22:00. Come visit us or order online.`;

  // const anotherStyle = { color: 'red', fontSize: '20px' };
  return (
    <footer className="footer">
      <div className="order">
        <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
        {/* <p style={{ color: 'red', fontSize: '20px' }}>
          We're open from 12:00 to 22:00. Come visit us or order online.
        </p> */}
        {/* <p style={anotherStyle}>Lorem ipsum dolor sit amet.</p> */}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export { Header, Menu, Footer };
