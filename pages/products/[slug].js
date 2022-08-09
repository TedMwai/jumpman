import Image from "next/image";
import Link from "next/link";
import {
  DetailsStyle,
  ImageContainer,
  ProductInfo,
  ProductSizes,
  Buttons,
  FavouriteButton,
  BagBtn,
  SimilarContainer,
  SimilarCard,
} from "../../styles/ProductDetails";

const Product = ({ data }) => {
  const { image, product, similarProducts } = data;
  const ten = Array.from({ length: 10 }, (_, i) => i + 1);
  const sizes = Array.from({ length: 9 }, (_, i) => i + 37);
  return (
    <>
      <DetailsStyle>
        <ImageContainer>
          {image.map((image) => (
            <Image
              key={image}
              src={`/images/${image}`}
              alt={image}
              height={500}
              width={500}
              objectFit={"cover"}
            />
          ))}
        </ImageContainer>
        <ProductInfo>
          <div>
            <h3>{product.name}</h3>
            <h4>Streetwear</h4>
            <h4>{product.price}$</h4>
          </div>
          <h2>Select Size</h2>
          <ProductSizes>
            {sizes.map((size) => (
              <button key={size}>{size}</button>
            ))}
          </ProductSizes>
          <div>
            <label>Quantity </label>
            <select name="quantity" id="quantity">
              {ten.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <Buttons>
            <BagBtn>Add to Bag</BagBtn>
            <FavouriteButton>Favourite🖤</FavouriteButton>
          </Buttons>
          <p>{product.description}</p>
        </ProductInfo>
      </DetailsStyle>
      <h3 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>
        You might also like
      </h3>
      <SimilarContainer>
        {similarProducts.map((product) => (
          <SimilarCard key={product.products_id}>
            <Link href={`/products/${product.product_slug}`}>
              <div>
                <img src={`/images/${product.photo}`} alt={product.name} />
              </div>
            </Link>
            <h4>
              <Link href={`/products/${product.product_slug}`}>
                {product.name}
              </Link>
            </h4>
            <p>${product.price}</p>
          </SimilarCard>
        ))}
      </SimilarContainer>
    </>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/products/${context.params.slug}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
