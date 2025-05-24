function fileValidation() {
	var fileInput = document.getElementById('entry_value');
	var files = fileInput.files;
	
	// Allowing file type
	var allowedExtensions = /(\.csv|\.xlsx|\.parquet|\.json|\.geojson)$/i;
	
	for (var i = 0; i < files.length; i++) {
		var fileName = files[i].name;
		if (!allowedExtensions.exec(fileName)) {
			alert('Invalid file type. Please try again.');
			fileInput.value = '';
			return false;
		}
	}
	
	getFile();
}

function getFile() {
	const fileInput = document.getElementById('entry_value');
	const file = fileInput.files[0];  // Get the uploaded file
	
	if (file) {
		// Here, you can handle file preview or validation (if needed)
		// You could preview the file content or process it as needed.

		// For now, let's store the file data in localStorage or sessionStorage (to transfer data to the next page)
		const reader = new FileReader();
		reader.onload = function (e) {
			// Store the file content (in this case, just plain text) in localStorage
			localStorage.setItem('fileContent', e.target.result);
			// Redirect to test3.html
			window.location.href = 'Piyu-V_dashboard.html';
		};
		
		reader.readAsText(file);  // Assuming it's a text-based file (CSV, JSON, etc.)

		// If the file is in another format, you can modify how you read the file
		// Example: reader.readAsDataURL(file); for image files
	} else {
		alert('Please select a file.');
	}
}

function on_upload() {
	document.getElementById("overlay_upload").style.display = "block";
}

function off_upload() {
	document.getElementById("overlay_upload").style.display = "none";
}

function on_save() {
	document.getElementById("overlay_save").style.display = "block";
}

function off_save() {
	document.getElementById("overlay_save").style.display = "none";
}

