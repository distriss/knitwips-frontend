export default interface LikeButtonProps {
    id: string;
    likesCount: number;
    authUserLiked: boolean;
    
    onLike: (newLikesCount: number, likeStatus: boolean) => void;
}

export type LikesCount = Pick<LikeButtonProps, 'likesCount' >;