import './profile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile(props) {
	const [photographers, setPhotographers] = useState([]);

	async function getPhotographers() {
		try {
			const response = await axios.get(
				'http://localhost:8000/api/photographers'
			);
            setPhotographers(response.data)
		} catch (error) {
            console.log(error)
        }
	}

    useEffect(() => {
        getPhotographers()
    }, [])

	return <div className='profile-component'>
        {photographers ? (
        photographers.map((photographer, index) => { return(
            <div className='profile-container' key={index}>
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

        </div>)
        })
        ):<p>photographer is loading</p>}
    </div>;
}

export default Profile;
