export default interface UserData {
    _id: string;
    username: string;
    email: string;
    following: string[];
    followers: string[];
    likedPatterns: string[];
    savedPatterns: string[];
    isAdmin: boolean;
}

export interface UserDataProps {
    user: UserData;    
}