const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
	<footer>
		<div class="container">
			<div class="cards" style="padding-bottom: 30px;">
				<div class="card">
					<h4 class="footerText">CONTACT US
					</h4>

					<h5 class="footerText">PHONE</h5>
					<a href="tel:2814214862">281-421-4862</a>
					<h5 class="footerText">EMAIL</h5>
					<a href="mailto:vbcbaytown@comcast.net">vbcbaytown@comcast.net</a>
				</div>
				<div class="card">
					<h4 class="footerText">JOIN US</h4>

					<h5 class="footerText">SERVICES</h5>
					<a href="/sub_pages/services/what_to_expect.html">What To Expect</a>
					<h5 class="footerText">LOCATION</h5>
					<a href="https://www.google.com/maps/place/Victory+Baptist+Church/@29.8008307,-94.9454904,12z/data=!4m6!3m5!1s0x863f5b87c62eec89:0x7452652b793bc6b0!8m2!3d29.7924028!4d-94.9442629!16s%2Fg%2F1tl_m2n3?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D"
						target="_blank">1800
						E Archer Road Baytown, TX 77521</a>
				</div>
				<div class="card">
					<h4 class="footerText" style="color:#D4AF37;">FOLLOW US</h4>

					<h5 class="footerText">SOCIAL</h5>
					<a href="https://www.facebook.com/VBCBaytown" target="_blank"><img
							src="/images/svg_logos/facebook_logo.svg"
							style="height: 2rem;"></a>
					<a href="https://www.instagram.com/vbcbaytown/" target="_blank"><img
							src="/images/svg_logos/instagram_logo.svg"
							style="height: 2rem;"></a>
					<a href="https://www.youtube.com/@vbcbaytown" target="_blank"><img
							src="/images/svg_logos/youtube_logo.svg" style="height: 2rem;">
					</a>

					<h5 class="footerText">PODCASTS</h5>
					<a href="https://open.spotify.com/show/0IlerkU3SmcWu0dR3bVtGQ?si=e95de42d9af24d9a"
						target="_blank"><img src="/images/svg_logos/spotify_logo.svg"
							style="height: 2rem;"></a>

				</div>
			</div>

			<p>© 2026 Victory Baptist Church. All Rights Reserved.</p>

	</footer>
	`;
document.body.appendChild(footerTemplate.content);
