import '../App.css';
import ButtonProps from '../interfaces/ButtonProps';

export default function Button({type, onClick, value}:ButtonProps) {
    

    return (
        <button
            type={type}
            onClick={onClick}
            className="altfont text-2xl py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
            >
                {value}
        </button>
    )
}