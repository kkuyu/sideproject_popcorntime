import React from "react";
import style from "./Header.module.css";

export default () => (
	<>
		<header>
			<ul className={style.navList}>
				<li><a href="/">Movies</a></li>
				<li><a href="/tv">TV</a></li>
				<li><a href="/search">Search</a></li>
			</ul>
		</header>
	</>
)