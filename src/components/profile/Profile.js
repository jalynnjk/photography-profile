import './profile.css'
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../dataContext'
import axios from 'axios';

function Profile(props) {
	const [photographer, setPhotographer] = useState([]);
    const {setPhotographerAlbums} = useContext(DataContext)

	async function getPhotographer() {
		try {
			const response = await axios.get(
				'https://photography-profile-api.herokuapp.com/api/photographers/1'
			);
            setPhotographer(response.data.data[0])
		} catch (error) {
            console.log(error)
        }
	}

    useEffect(() => {
        getPhotographer()
    }, [])

    useEffect(() => {
        if (photographer) {
            setPhotographerAlbums(photographer.albums)
        }
    }, [photographer])

	return <div className='profile-component'>
        {photographer ? (
            <div className='profile-container'>
            <img src={photographer.profile_picture} alt='profile picture' className='profile-picture'/>
            <div className='photographer-info'>
                <h1 className='photographer-name'>{photographer.name}</h1>
                <h4 className='bio-title'>Bio</h4>
                <p className='bio'>{photographer.bio}</p>
            </div>
            <div className='contact-info'>
                <h4 className='phone-title'>Phone</h4>
                <p className='phone'>{photographer.phone}</p>
                <h4 className='email-title'>Email</h4>
                <p className='email'>{photographer.email}</p>
            </div>
        </div>) :<p>photographer is loading</p>}
    </div>;
}

export default Profile;
