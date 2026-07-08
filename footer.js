const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
	<footer>
		<div class="container">
			<p>© 2026 Victory Baptist Church. All Rights Reserved.</p>
		</div>
	</footer>
	`;
document.body.appendChild(footerTemplate.content);
