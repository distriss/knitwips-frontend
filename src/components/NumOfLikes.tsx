import { LikesCount } from '../interfaces/LikeButtonProps';

export default function NumOfLikes({ likesCount }: LikesCount) {
    return <span className="mb-1 text-left" >{likesCount === 1 ? ` ${likesCount} Like` :  `${likesCount} Likes`} </span>
}