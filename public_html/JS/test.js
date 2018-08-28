var sports = new Array("football", "baseball", "rugby", "swimming");
delete sports[3];
if (3 in sports) {
	alert("foo");
} else {
	alert("bar");
}