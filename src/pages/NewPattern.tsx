import NavBar from '../components/NavBar';
import PatternForm from '../components/PatternForm';

export default function NewPattern() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <section className="flex justify-center items-center bg-main2 px-40 py-10">
            <PatternForm />
        </section>
        </>
    )}