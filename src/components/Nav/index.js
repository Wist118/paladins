


function Nav() {
    return (
        <header>
        <h1>
          My Paladins Site
        </h1>
        <nav>
          <ul>
          <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Characters">Characters</a>
            </li>
            <li>
              <a href="/Maps">Modes/Maps</a>
            </li>
            <li>
              {/* change to symbol */}
              <a href="/Login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav;