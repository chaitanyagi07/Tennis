const firebaseConfig = {
    apiKey: "AIzaSyCDBKDkemkAv5zu500sh7djz0b747P80oE",
    authDomain: "rsta-de997.firebaseapp.com",
    projectId: "rsta-de997",
    storageBucket: "rsta-de997.appspot.com",
    messagingSenderId: "95340766105",
    appId: "1:95340766105:web:6c4a3d6a9b90eb7e296908",
    measurementId: "G-V2XSEQY36M"
};

  const app = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const imagesRef = storage.ref().child('myimages');

  let count = 0;
//   imagesRef.listAll().then((res) => {
//     let count = 0;
//     try {
//         res.items.forEach((itemRef) => {
//             // count = count+1;
//             // if (count == 4) {
//             //     count =0;
//             //     throw new Error('BreakException'); // Throw an exception to break the loop
//             // }
//             itemRef.getDownloadURL().then((url) => {
//                 const img = document.createElement('img');
//                 img.src = url;
//                 img.id= `imgno${count}`
//                 img.alt = 'Achievement Image';
//                 img.classList.add('achievement-image'); // Optionally, add a class for styling
//                 document.getElementById('article').appendChild(img);
//                 img.style.width="500px";
//                 img.style.height="500px";
                
//             }).catch((error) => {
//                 console.log('Error getting download URL: ', error);
//             });
//         });
//     } catch (e) {
//         if (e.message !== 'BreakException') throw e; // Rethrow any exceptions other than 'BreakException'
//     }
// }).catch((error) => {
//     console.log('Error fetching images: ', error);
// });

const images = [];

imagesRef.listAll().then((res) => {
    res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
            images.push(url);
            // Check if this is the last image and then call the function to display images
            if (images.length === res.items.length) {
                displayImagesOneByOne(images, 0);
            }
        }).catch((error) => {
            console.log('Error getting download URL: ', error);
        });
    });
}).catch((error) => {
    console.log('Error fetching images: ', error);
});


console.log(images)

const delayBetweenImages = 1000; // Delay in milliseconds between each image


function displayImagesOneByOne(images, index) {
    if(index===images.length){
        index = 0;
    }
    if (index < images.length) {
    const img = new Image();
    img.src = images[index];
    img.onload = function() {
      document.getElementById('article').innerHTML = ''; // Clear previous image
      document.getElementById('article').appendChild(img); // Assuming your div has an id 'article'
      setTimeout(function() {
        displayImagesOneByOne(images, index + 1); // Call the function recursively for the next image
      }, delayBetweenImages);
    };
    img.onerror = function() {
      console.error('Error loading image:', img.src);
      displayImagesOneByOne(images, index + 1); // Skip to the next image on error
    };
  }
}

// Start displaying images
displayImagesOneByOne(images, 0);



// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls 
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsById("article");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
