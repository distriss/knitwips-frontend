export default interface SaveButtonProps {
    id: string;
    authUserSaved: boolean;
    
    onSave: (likeStatus: boolean) => void;
}