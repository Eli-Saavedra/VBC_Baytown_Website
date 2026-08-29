// Checking where you are in the directory
const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
	<header>
		<div class="container nav-container">
			<a class="link_logo" href="/default.html"><h1 class="logo">Victory Baptist Church</h1></a>

			<nav>
				<div class="dropdown">
					<button class="dropbtn">About</button>
					<div class="dropdown-content">
						<a href="/sub_pages/about/purpose.html">Our Purpose</a>
						<a href="/sub_pages/about/team.html">Our Team</a>
						<a href="/sub_pages/about/beliefs.html">Our Beliefs</a>
						<a href="/sub_pages/about/eternal_life.html">Eternal Life</a>
					</div>
				</div>

				<div class="dropdown">
					<button class="dropbtn">Services</button>
					<div class="dropdown-content">
						<a href="/sub_pages/services/what_to_expect.html">What To Expect</a>
						<a href="/sub_pages/services/times_location.html">Times & Location</a>
					</div>
				</div>

				<div class="dropdown">
					<button class="dropbtn">Ministries</button>
					<div class="dropdown-content">
						<a href="/sub_pages/ministries/children.html">Children</a>
						<a href="/sub_pages/ministries/teens.html">Teens</a>
						<a href="/sub_pages/ministries/adults.html">Adults</a>
						<a href="/sub_pages/ministries/fbi.html">Faith Bible Institute</a>
					</div>
				</div>

				<div class="dropdown">
					<button class="dropbtn">Media</button>
					<div class="dropdown-content">
						<a href="/sub_pages/media/sermons.html">Sermons</a>
						<a href="/sub_pages/media/livestream.html">Livestreams</a>
						<a href="/sub_pages/media/resources.html">Resources</a>
					</div>
				</div>

				<a href="/default.html#give">Give</a>
			</nav>
		</div>
	</header>
	`;
document.body.appendChild(headerTemplate.content);
