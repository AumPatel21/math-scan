// Upload image through file input
document.getElementById('upload').addEventListener('click', function() {
    document.getElementById('file').click();
});

// Display the uploaded image
document.getElementById('file').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('display-img').src = e.target.result;
    }
    reader.readAsDataURL(this.files[0]);
});

// Clear the file input value
document.getElementById('file').addEventListener('click', function() {
     this.value = null;
});

// Delete the uploaded image
document.getElementById('delete').addEventListener('click', function() {
    // Remove the src attribute from the image
    document.getElementById('display-img').src = 'https://picsum.photos/500/300';
});



// functions to connect with api gateway

// Function to upload image to backend
async function uploadImage(imageData) {
    const response = await fetch('https://dayam7a7u9.execute-api.us-east-1.amazonaws.com/testmathscan/images', {
      method: 'POST',
      body: imageData,
    });
    const data = await response.json();
    // Handle the response from the backend (e.g., display results)
    document.getElementById('result').value = data.message; // Assuming backend returns a message
}

// Upload image button click handler
document.getElementById('upload').addEventListener('click', async function() {
    const file = document.getElementById('file').files[0];
    if (!file) {
      return; // Handle no file selected case
    }
  
    const reader = new FileReader();
    reader.onload = async function(e) {
      const imageData = e.target.result; // Image data as base64 string
      await uploadImage(imageData);
      console.log('Image uploaded successfully');
    };
    reader.readAsDataURL(file);
});