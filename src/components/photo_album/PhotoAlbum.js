import './photo_album.css'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../dataContext'


function PhotoAlbum(props) {
    const {photographerAlbums, setPhotographerAlbums} = useContext
    (DataContext)

    return (
        <div>
            {photographerAlbums ? (
                photographerAlbums.map((album, index) => {
                return (
                    <div key={index}>
                        {album.photos.map((photo, index) => {
                            return (
                                <div key={index}>
                                    <img src={photo.img} alt="Landscape" className='landscape-image'/>
                                    <h2 className='photo-title'>{photo.title}</h2>
                                    <p className='photo-description'>{photo.description}</p>
                                    <p className='photo-date'>{photo.date}</p>
                                </div>
                            )
                        })}
                    </div>
                    )
                })
            ) : <p>Album loading</p>}
        </div>
    );
}

export default PhotoAlbum;