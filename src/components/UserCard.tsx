import {useContext} from 'react';
import { AuthContext } from '../context/AuthProvider';
import Button from './Button'
import UserCardData from '../interfaces/UserCardData';


export default function UserCard({ user }:UserCardData ) {
    const { user: authUser } = useContext(AuthContext);

    const isFollowing = authUser?.following?.includes(user._id);

    function handleFollow() {
        if (isFollowing) {
            console.log('Unfollow')
        } else {
            console.log('Follow')
        }
    }
    return (
        <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl">Profile of {user.username}</h2>
            <p>about paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque consectetur.</p>
            <Button 
                type="submit"
                onClick={handleFollow}
                value={isFollowing ? "Unfollow" : "Follow" } />            
        </section>
    )
}