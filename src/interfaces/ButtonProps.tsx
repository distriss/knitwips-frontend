export default interface ButtonProps {
    type: "button" | "submit" | "reset";
    onClick: () => void;
    value: string;
}