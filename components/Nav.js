import Image from "next/image";
import Link from "next/link";
import {
  Header,
  Logos,
  Links,
  NavBar,
  Icons,
  Count,
  Profile,
} from "../styles/NavStyles";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const count = useSelector((state) => state.cart.quantity);
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
        {session ? (
          <Profile>
            <p>Hi, {session.user.name}</p>
            <Image
              src={"/images/user_icon.svg"}
              alt={"profile"}
              width={30}
              height={30}
              onClick={() => router.push(`/profile`)}
            />
            |<button onClick={() => signOut()}>Sign in</button>
          </Profile>
        ) : (
          <Links>
            <button onClick={() => signIn("google")}>Join Us</button>
            <button onClick={() => signIn("google")}>Sign in</button>
          </Links>
        )}
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
              <Count>{count}</Count>
            </div>
          </div>
        </Icons>
      </NavBar>
    </div>
  );
};

export default Nav;
