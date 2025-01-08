function Footer() {
  return (
    <footer className="page-footer blue darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/DenisShagi"
            target="_blank"
          >
            DenisShagi
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
