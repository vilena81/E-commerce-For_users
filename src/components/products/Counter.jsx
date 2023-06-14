function Counter({ num, setCart, cart, id, removeCartItem, el }) {
    function quantity(type) {
      const existItem = cart.find((pr) => pr.id === id);
      if (type === "inc") {
        if (existItem) {
          const newItem = cart.map((el) =>
            el.id === id ? { ...existItem, quantity: existItem.quantity + 1 } : el
          );
          setCart(newItem);
        }
      } else if (type === "dec") {
        if (num <= 1) {
          removeCartItem(existItem.id);
          return;
        }
        if (existItem) {
          const newItem = cart.map((el) =>
            el.id === id ? { ...existItem, quantity: existItem.quantity - 1 } : el
          );
          setCart(newItem);
        }
      }
  
      fetch(`http://localhost:3002/cart/${id}`, {
        method: "put",
        body: JSON.stringify({
          product_id: id,
          image: el.image,
          name: el.name,
          price: el.price,
          description: el.description,
          quantity:
            type === "inc" ? existItem.quantity + 1 : existItem.quantity - 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    return (
      <div>
        <button
          onClick={() => quantity("dec")}
          style={{
            width: "22px",
            height: "22px",
            cursor: "pointer",
            textAlign: "center",
            background: "#C3D3F1",
            border: "none",
          }}
        >
          -
        </button>
        <span style={{ margin: "4px" }}>{num}</span>
        <button
          onClick={() => quantity("inc")}
          style={{
            width: "22px",
            height: "22px",
            textAlign: "center",
            cursor: "pointer",
            background: "#002877",
            color: "#fff",
            border: "none",
          }}
        >
          +
        </button>
      </div>
    );
  }
  
  export default Counter;