import '../App.css';
import ButtonProps from '../interfaces/ButtonProps';

export default function Button({type, onClick, value}:ButtonProps) {
    

    return (
        <button
            type={type}
            onClick={onClick}
            className="logo-font text-2xl py-2 px-4 mx-2 rounded-full bg-pink text-white text-shadow-sm hover:bg-darkpink align-center transition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
            >
                {value}
        </button>
    )
}