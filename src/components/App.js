// create your App component here
import React, {useState, useEffect} from 'react';

function App() {
    const [retrievedDogImage, setRetrievedDogImage] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(image => setRetrievedDogImage(image.message))
    })

    if(!retrievedDogImage) {
        <p>Loading...</p>
    }

    return (
        <img src={retrievedDogImage} alt="A Random Dog" />
    )

}

export default App;