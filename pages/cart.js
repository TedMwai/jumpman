import { useSelector } from "react-redux";
import Image from "next/dist/client/image";
import styled from "styled-components";

const cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  console.log(cartItems);
  return (
    <div>
      <Container>
        <CartCard>
          <h1>Bag</h1>
          {cartItems.map((product) => (
            <>
              <Card key={product.products_id}>
                <Image
                  src={`/images/${product.photo}`}
                  alt={product.name}
                  width={160}
                  height={160}
                  objectFit={"cover"}
                />
                <div>
                  <h3>{product.name}</h3>
                  <p>Size : {product.size}</p>
                  <p>Quantity : {product.quantity}</p>
                  <Image
                    src={`/images/favourite.svg`}
                    alt={"favourite"}
                    width={25}
                    height={25}
                  />
                  <Image
                    src={`/images/delete.svg`}
                    alt={"favourite"}
                    width={25}
                    height={25}
                  />
                </div>
                <p>${product.price}</p>
                <Divider />
              </Card>
              <Divider />
            </>
          ))}
        </CartCard>
        <Summary>
          <h2>Order Summary</h2>
          <div>
            <p>Subtotal</p>
            <p>{total}$</p>
          </div>
          <CheckoutButton>Checkout</CheckoutButton>
        </Summary>
      </Container>
    </div>
  );
};

export default cart;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  margin: 1rem 4rem;
`;

const CartCard = styled.div`
  flex-basis: 60%;
  margin: 1rem 3rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  img {
    border-radius: 10px;
    justify-self: start;
  }
  div {
    h3,
    p {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.2rem;
  }
`;

const Summary = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0rem;
    p {
      font-size: 1.2rem;
    }
  }
`;

const CheckoutButton = styled.button`
  padding: 1rem;
  color: white;
  background: black;
  margin-bottom: 1rem;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #585858;
  }
`;

const Divider = styled.div`
  border: 1px solid #f2f2f2;
`;
