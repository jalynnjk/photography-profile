import './photo_album.css'
import { useContext } from 'react'
import { DataContext } from '../../dataContext'
import featured from '../../assets/favoriteselected.png'


function PhotoAlbum(props) {
    const {photographerAlbums} = useContext
    (DataContext)

    return (
        <div className='photo-album-component'>
            {photographerAlbums ? (
                photographerAlbums.map((album, index) => {
                return (
									<div key={index} className='album'>
										{album.photos.map((photo, index) => {
											return (
												<div key={index} className='photo-container'>
													<article
														className='photo'
														style={{
															backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${photo.img})`,
														}}>
														<h2 className='photo-title'>{photo.title}</h2>
													</article>
													<div className='photo-details-background'>
														<div className='photo-details'>
															<p className='photo-description'>
																{photo.description}
															</p>
															{photo.featured ? (
																<img src={featured} className='featured'></img>
															) : null}
															<p className='photo-date'>{photo.date}</p>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								);
                })
            ) : <p>Album loading</p>}
        </div>
    );
}

export default PhotoAlbum;