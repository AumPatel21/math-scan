import axios from 'axios';

// Update API Endpoint URL
const uploadEndpoint = 'https://8i2tpthfkg.execute-api.us-east-1.amazonaws.com/prod/upload';
const solutionsEndpoint = 'https://8i2tpthfkg.execute-api.us-east-1.amazonaws.com/prod/solutions';


// Function to upload image to backend using Axios
async function uploadImage(imageData) {
  try {
    const response = await axios.post(uploadEndpoint, imageData, {
      headers: {
        'Content-Type': 'image/jpeg', // Assuming image format (adjust if needed)
      }
    });
    const data = response.data;
    // Handle successful response from backend (e.g., display results)
    document.getElementById('result').value = data.message; // Assuming backend returns a message
  } catch (error) {
    console.error('Error uploading image:', error);
    // Handle upload errors (e.g., display error message)
  }
}

// Function to get solutions from backend using Axios
async function getSolutions() {
  try {
    const response = await axios.get(solutionsEndpoint);
    const data = response.data;
    // Handle successful response from backend (e.g., display results)
    document.getElementById('result').value = data.message; // Assuming backend returns a message
    console.log('Solutions:', data);
  } catch (error) {
    console.error('Error getting solutions:', error);
    // Handle get solutions errors (e.g., display error message)
  }
}

// Upload image button click handler
// document.getElementById('upload').addEventListener('click', async function() {
//   const file = document.getElementById('file').files[0];
//   if (!file) {
//     return; // Handle no file selected case
//   }
//   const reader = new FileReader();
//   reader.onload = async function(e) {
//     const imageData = e.target.result; // Image data as base64 string
//     await uploadImage(imageData);
//     console.log('Image uploaded successfully');
//   };
//   reader.readAsDataURL(file);
// });

// Upload image button click handler
document.getElementById('upload-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission
  const file = document.getElementById('file').files[0];
  if (!file) {
      return; // Handle no file selected case
  }
  const reader = new FileReader();
  reader.onload = async function(e) {
      const imageData = e.target.result; // Image data as base64 string
      await uploadImage(imageData); // Upload the image to backend
      console.log('Image uploaded successfully');
  };
  reader.readAsDataURL(file);
});

document.getElementById('file').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const imageData = e.target.result; // Image data as base64 string
          displayUploadedImage(imageData); // Display the uploaded image
      };
      reader.readAsDataURL(file);
  }
});


// Update the src attribute of the display image
function displayUploadedImage(imageData) {
  document.getElementById('display-img').src = imageData;
}

// delete image
document.getElementById('delete').addEventListener('click', function() {
  document.getElementById('display-img').src = 'https://picsum.photos/500/300';
});














// Get solutions button click handler
// document.getElementById('result').addEventListener('click', async function() {
//   await getSolutions();
//   console.log('Solutions retrieved successfully');
// });

// // Upload image through file input (unchanged)
// document.getElementById('upload').addEventListener('click', function() {
//   document.getElementById('file').click();
// });

// // Display the uploaded image (unchanged)
// document.getElementById('file').addEventListener('change', function() {
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     document.getElementById('display-img').src = e.target.result;
//   }
//   reader.readAsDataURL(this.files[0]);
// });

// // Clear the file input value (unchanged)
// document.getElementById('file').addEventListener('click', function() {
//   this.value = null;
// });

// // Delete the uploaded image (unchanged)
// document.getElementById('delete').addEventListener('click', function() {
//   // Remove the src attribute from the image
//   document.getElementById('display-img').src = 'https://picsum.photos/500/300';
// });

// // Function to upload image to backend using Axios
// async function uploadImage(imageData) {
//   try {
//     const response = await axios.post('https://dayam7a7u9.execute-api.us-east-1.amazonaws.com/testmathscan/images', imageData, {
//       headers: {
//         'Content-Type': 'image/jpeg', // Assuming image format (adjust if needed)
//       }
//     });
//     const data = response.data;
//     // Handle successful response from backend (e.g., display results)
//     document.getElementById('result').value = data.message; // Assuming backend returns a message
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     // Handle upload errors (e.g., display error message)
//   }
// }


// // Upload image button click handler
// document.getElementById('upload').addEventListener('click', async function() {
//   const file = document.getElementById('file').files[0];
//   if (!file) {
//     return; // Handle no file selected case
//   }
//   const reader = new FileReader();
//   reader.onload = async function(e) {
//     const imageData = e.target.result; // Image data as base64 string
//     await uploadImage(imageData);
//     console.log('Image uploaded successfully');
//   };
//   reader.readAsDataURL(file);
// });