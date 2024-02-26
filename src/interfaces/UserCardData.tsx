export default interface UserCardData {
    user: {
        _id: string;
        username: string;       
        following: [];
        followers: [];
    }
}