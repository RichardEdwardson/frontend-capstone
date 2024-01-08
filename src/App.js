import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
    </header>
  )
}

function Nav() {
  return (
    <nav>
      <Logo/>
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
    </nav>
  )
}

function Main() {
  return (
    <main></main>
  )
}

function Footer() {
  return (
    <footer></footer>
  )
}

function Logo() {
  return (
    <img></img>
  )
}