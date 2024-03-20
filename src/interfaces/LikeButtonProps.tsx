export default interface LikeButtonProps {
    id: string;
    likesCount: number;
    authUserLiked: boolean;
    
    onLike: (newLikesCount: number, likeState: boolean) => void;
}