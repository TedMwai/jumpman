import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <Divider />
      <Socials>
        <Image
          src="/images/social-spotify.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
        <Image
          src="/images/social-facebook.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
        <Image
          src="/images/social-pinterest.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
        <Image
          src="/images/social-instagram.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
        <Image
          src="/images/social-youtube.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
        <Image
          src="/images/social-twitter.svg"
          alt="Spotify"
          width={40}
          height={40}
          onClick={() => router.push("https://twitter.com")}
        />
      </Socials>
      <p>© 2022 MR. CARTER Shoe Company. All rights reserved.</p>
    </Container>
  );
};

export default Footer;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  img {
    cursor: pointer;
  }
`;
const Divider = styled.div`
  margin-top: 1rem;
  height: 1.1px;
  background-color: black;
`;
const Container = styled.div`
  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
