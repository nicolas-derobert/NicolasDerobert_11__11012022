import React from 'react'
import Thumb from '../../components/Thumb/Thumb'
import "./Gallery.css";
import data from '../../Assets/Data/logements.json'

console.log(data)


function Gallery() {
 const listOfItems = data.map((logement) => <Thumb  key={logement.id} title={logement.title} cover={logement.cover}></Thumb>)
    return (
        <div className="gallery">
              {listOfItems}             
        </div>
    )
}

export default Gallery
