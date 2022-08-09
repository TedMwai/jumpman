import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Logos,
  Links,
  NavBar,
  Icons,
  Count,
} from "../styles/NavStyles";

const Nav = () => {
  return (
    <div>
      <Header>
        <Logos>
          <Image
            src="/images/adidas-logo.svg"
            alt="adidas"
            width={40}
            height={40}
          />
          <Image
            src="/images/New Balance.svg"
            alt="new balance"
            width={50}
            height={30}
          />
        </Logos>
        <div>
          <h1>MR. CARTER</h1>
        </div>
        <Links>
          <Link href="/">Join Us</Link>
          <Link href="/">Sign In</Link>
        </Links>
      </Header>
      <NavBar>
        <Image
          src="/images/jumpman_logo.svg"
          alt="jumpman logo"
          width={60}
          height={60}
        />
        <div>
          <Link href="/">Home</Link>
          <Link href="/">Popular</Link>
          <Link href="/">Nike</Link>
          <Link href="/">Adidas</Link>
          <Link href="/">Yeezy</Link>
          <Link href="/">Contact</Link>
        </div>
        <Icons>
          <form action="/">
            <input
              type="text"
              name="input-search"
              id="input-search"
              placeholder="Search"
            />
            <button type="submit" id="search-btn-submit">
              <Image
                src="/images/search.svg"
                alt="search"
                width={30}
                height={30}
              />
            </button>
          </form>
          <div>
            <div>
              <Image
                src="/images/heart.svg"
                alt="heart"
                height={30}
                width={30}
              />
            </div>
            <div>
              <Image src="/images/bag.svg" alt="bag" height={50} width={50} />
              <Count>0</Count>
            </div>
          </div>
        </Icons>
      </NavBar>
    </div>
  );
};

export default Nav;
