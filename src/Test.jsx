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
//Menu হলো Parent component, কারণ সে <Pizza /> কে নিজের JSX-এর ভেতরে ব্যবহার করছে। Pizza হলো Child component, কারণ সে parent (Menu) থেকে data props আকারে পাচ্ছে।
const Menu = function () {
  const pizzas = pizzaData; //[];
  const pizzasLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {/* conditional rendering with ternary */}
      {pizzasLength > 0 ? (
        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu please come back later. ☺️</p>
      )}
      {/* conditional rendering with and 
      {pizzasLength > 0 && (
        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}*/}
      {/*<ul className="pizzas">
        {pizzas.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          // <Pizza
          //   name={pizza.name}
          //   ingredients={pizza.ingredients}
          //   price={pizza.price}
          //   photoName={pizza.photoName}
          // />
        ))}
        {/* <Pizza //passing the props which is information about the pizza which will be like an object in props React এই props গুলো bundle করে child Pizza component এ পাঠায় একটা object আকারে: এটাকে বলে Unidirectional data flow — মানে data শুধু parent → child এ যায়। Child চাইলে props এর ভেতর data change করতে পারে না (props read-only)।
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6} //whenever we want to pass anything that is not string we pass it in js mode {} inside it 6 will be number
          photoName="pizzas/focaccia.jpg"
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozzarella"
          price={10}
          photoName="pizzas/margherita.jpg"
        /> }
      </ul>*/}
    </main>
  );
};
//importing all images focaccia এখন একটা variable, যার ভ্যালু হলো ওই ইমেজের path
import focaccia from './assets/focaccia.jpg';
import margherita from './assets/margherita.jpg';
import spinaci from './assets/spinaci.jpg';
import funghi from './assets/funghi.jpg';
import salamino from './assets/salamino.jpg';
import prosciutto from './assets/prosciutto.jpg';

//making an image object এটা basically একটা lookup table বানানো হয়েছে — যাতে photoName (string) আর import করা variable (value) এর মধ্যে mapping থাকে:
const images = {
  'pizzas/focaccia.jpg': focaccia,
  'pizzas/margherita.jpg': margherita,
  'pizzas/spinaci.jpg': spinaci,
  'pizzas/funghi.jpg': funghi,
  'pizzas/salamino.jpg': salamino,
  'pizzas/prosciutto.jpg': prosciutto,
};

//giving the parameter props which will take the values passed in the pizzas
const Pizza = function (props) {
  //console.log(props); //like an object
  return (
    <li className="pizza">
      <img src={images[props.pizzaObj.photoName]} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>Price: ${props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
};

const Footer = function () {
  const restaurantOpen = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen =
      hour >= openHour && hour <= closeHour
        ? `We are currently open until ${closeHour}:00. Come visit us or order online.`
        : `Sorry! We are closed now. We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`;
    return isOpen;
  };
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;

  // const anotherStyle = { color: 'red', fontSize: '20px' };
  return (
    <footer className="footer">
      <div className="order">
        {/* {isOpen && (
        <div className="order">
          <p>Open</p>
          <button className="btn">Order</button>
        </div>
      )} */}
        <p>{restaurantOpen()}</p>
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
