function Header() {
	return (
		<>
			<div className="header">
				<nav className="header-nav-bar container">
					<div className="start-bootstrap">Start Bootstrap</div>
					<ul className="header-nav-items">
						<li className="header-nav-item">
							<a className="header-nav-link active" href="#">
								Home
							</a>
						</li>
						<li className="header-nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="header-nav-item">
							<a className="header-nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Header;
