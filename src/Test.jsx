//Data
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: '/assets/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozzarella',
    price: 10,
    photoName: '/assets/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozzarella, spinach, and ricotta cheese',
    price: 12,
    photoName: '/assets/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozzarella, mushrooms, and onion',
    price: 12,
    photoName: '/assets/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozzarella, and pepperoni',
    price: 15,
    photoName: '/assets/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozzarella, ham, arugula, and burrata cheese',
    price: 18,
    photoName: '/assets/prosciutto.jpg',
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

      {/* conditional rendering with ternary */}
      {pizzasLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
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
//import focaccia from './assets/focaccia.jpg';
// import margherita from './assets/margherita.jpg';
// import spinaci from './assets/spinaci.jpg';
// import funghi from './assets/funghi.jpg';
// import salamino from './assets/salamino.jpg';
// import prosciutto from './assets/prosciutto.jpg';

//making an image object এটা basically একটা lookup table বানানো হয়েছে — যাতে photoName (string) আর import করা variable (value) এর মধ্যে mapping থাকে:
// const images = {
//   //'pizzas/focaccia.jpg': focaccia,
//   'pizzas/margherita.jpg': margherita,
//   'pizzas/spinaci.jpg': spinaci,
//   'pizzas/funghi.jpg': funghi,
//   'pizzas/salamino.jpg': salamino,
//   'pizzas/prosciutto.jpg': prosciutto,
// };

//ei vabe na kore sorasori tmr sob image gula ke public folder e transfer kore dao

//giving the parameter props which will take the values passed in the pizzas with destructure
const Pizza = function ({ pizzaObj }) {
  //console.log(pizzaObj); //like an object
  const isSoldOut = pizzaObj.soldOut
    ? `SOLD OUT`
    : `Price:  $${pizzaObj.price}`;

  return (
    <li className={`${pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{isSoldOut}</span>
      </div>
    </li>
  );
};

const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;

  // const anotherStyle = { color: 'red', fontSize: '20px' };
  return (
    <footer className="footer">
      {isOpen ? (
        <Open closeHour={closeHour} />
      ) : (
        <Close closeHour={closeHour} openHour={openHour} />
      )}
      {/*<div className="order">
         {isOpen && (
        <div className="order">
          <p>Open</p>
          <button className="btn">Order</button>
        </div>
      )} 
      <p>{restaurantOpen()}</p>
      {/* <p style={{ color: 'red', fontSize: '20px' }}>
          We're open from 12:00 to 22:00. Come visit us or order online.
        </p> */}
      {/* <p style={anotherStyle}>Lorem ipsum dolor sit amet.</p> 
        <button className="btn">Order</button>
      </div>*/}
      <button className="btn">Order</button>
    </footer>
  );
};

const Open = function ({ closeHour }) {
  // console.log(closeHour);
  return (
    <div className="order">
      <p>
        We are currently open until {closeHour}:00. Come visit us or order
        online.
      </p>
    </div>
  );
};
const Close = function ({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Sorry! We are closed now. We're open from {openHour}:00 to {closeHour}
        :00. Come visit us or order online.
      </p>
    </div>
  );
};
export { Header, Menu, Footer };
