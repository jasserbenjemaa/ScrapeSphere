import "./App.css";
import CartItem from "./components/CartItem.jsx";

const fakeData = {
  title: "title",
  href: "#",
  text: "description about something ",
  image: "",
  author: "jasser",
};

function App() {
  const list = Array(12).fill(fakeData);
  return (
    <div className="App">
      <div class="container">
        {list.map((e) => {
          return <CartItem data={e} />;
        })}
      </div>
    </div>
  );
}

export default App;
