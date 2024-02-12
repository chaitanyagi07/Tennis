const storage = firebase.storage();
const storageRef = storage.ref();

const imageRef = storageRef.child('myimages/6863Bandwidth product.png');

imageRef.getDownloadURL()
  .then((url) => {
    document.getElementById('firebase').src = url;
    const imageElement = document.getElementById('firebase');
    imageElement.setAttribute('srcset', `
      ${url} 479w,
      ${url} 480w
    `);
  })
  .catch((error) => {
    console.error('Error getting download URL:', error);
  });                                                    