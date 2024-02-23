import { ErrorMessageProps }from "../interfaces/ErrorMessageProps";

export default function ErrorMessage({ error}: ErrorMessageProps ) {
    if (!error || error.trim().length === 0) {
        return null;
    }

    return (
        <div className="flex items-center p-4 mt-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
            <div>
              <span className="font-medium">Error!</span> {error}
            </div>
        </div>
    )
}