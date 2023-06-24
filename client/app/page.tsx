import Image from 'next/image';

export default function Home() {
  return (
    <header><Image src='/hero.png' alt='Hero img' width='1920' height='300' /></header>
  );
}
