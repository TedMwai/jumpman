import Link from "next/link";
import { ProductStyles } from "../styles/ProductStyles";

const Product = ({ product }) => {
  const { product_slug, price, photo, name } = product;
  return (
    <ProductStyles>
      <Link href={`/products/${product_slug}`}>
        <div>
          <img src={`/images/${photo}`} alt={name} />
        </div>
      </Link>
      <h4>
        <Link href={`/products/${product_slug}`}>{name}</Link>
      </h4>
      <p>${price}</p>
    </ProductStyles>
  );
};

export default Product;
