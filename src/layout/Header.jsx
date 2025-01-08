function Header() {
  return (
    <nav className="blue-grey">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          React Movies
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="https://github.com/DenisShagi" target="_blank">DenisShagi</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
