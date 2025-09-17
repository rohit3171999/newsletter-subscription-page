/*
* Description: Small text reassuring users about privacy.
Purpose: Build trust and reduce hesitation in submitting email.
* */
export default function PrivacyNote(){
    return (
        <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                <svg className="inline-block w-4 h-4 mr-1 -mt-px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" />
                </svg>
                We respect your privacy. No spam, unsubscribe anytime.
            </p>
        </div>
    );
}