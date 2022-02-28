document.addEventListener('DOMContentLoaded', (e) => {
	show_overview();
	
	document.getElementById("overview-menu-item").onclick = show_overview;
	document.getElementById("about-menu-item").onclick = show_about;
	document.getElementById("contact-menu-item").onclick = show_contact;
	
	function show_overview() {
		set_overview_visibility(true);
		set_about_visibility(false);
		set_contact_visibility(false);
		scroll_top();
	}
	
	function show_about() {
		set_overview_visibility(false);
		set_about_visibility(true);
		set_contact_visibility(false);
		scroll_top();
	}
	
	function show_contact() {
		set_overview_visibility(false);
		set_about_visibility(false);
		set_contact_visibility(true);
		scroll_top();
	}
	
	function set_overview_visibility(isVisible) {
	  document.getElementById("overview").style.display = isVisible ? "block" : "none";
	}
	
	function set_about_visibility(isVisible) {
	  document.getElementById("about").style.display = isVisible ? "block" : "none";
	}
	
	function set_contact_visibility(isVisible) {
	  document.getElementById("contact").style.display = isVisible ? "block" : "none";
	}
	
	function scroll_top() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
});
