function dicoding(){
  window.open('https://www.dicoding.com/users/225096/', '_blank');
}

function biodata(){
	document.getElementById("biodata").style.display = 'block';
	document.getElementById("riwayat").style.display = 'none';
	document.getElementById("sosmed").style.display = 'none';
}

function riwayat(){
	document.getElementById("biodata").style.display = 'none';
	document.getElementById("riwayat").style.display = 'block';
	document.getElementById("sosmed").style.display = 'none';
}

function sosmed(){
	document.getElementById("biodata").style.display = 'none';
	document.getElementById("riwayat").style.display = 'none';
	document.getElementById("sosmed").style.display = 'block';
}

function tampilan(){
	document.getElementById("riwayat").style.display = 'none';
	document.getElementById("sosmed").style.display = 'none';	
	document.getElementById("pg").checked=true;
	document.getElementById("es").checked=true;
	document.getElementById("sltp").checked=true;
	document.getElementById("slta").checked=true;
	document.getElementById("pt").checked=true;
}

function cekriwayat() {
	if (document.getElementById("pg").checked==true) {
		document.getElementById("tk").style.display = 'block';
	}
	else {
		document.getElementById("tk").style.display = 'none';	
	}

	if (document.getElementById("es").checked==true) {
		document.getElementById("sd").style.display = 'block';
	}
	else {
		document.getElementById("sd").style.display = 'none';	
	}

	if (document.getElementById("sltp").checked==true) {
		document.getElementById("smp").style.display = 'block';
	}
	else {
		document.getElementById("smp").style.display = 'none';	
	}

	if (document.getElementById("slta").checked==true) {
		document.getElementById("sma").style.display = 'block';
	}
	else {
		document.getElementById("sma").style.display = 'none';	
	}

	if (document.getElementById("pt").checked==true) {
		document.getElementById("kuliah").style.display = 'block';
	}
	else {
		document.getElementById("kuliah").style.display = 'none';	
	}
}