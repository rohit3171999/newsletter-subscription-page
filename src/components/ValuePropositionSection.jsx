/*
* Description: Highlights the key benefits of subscribing.
Purpose: Reinforce value and increase conversions.
* */
export default function ValuePropositionSection(){
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Why Subscribe?
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        We don't just send emails. We deliver value that helps you grow, learn, and stay ahead.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Curated Content</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Each issue is carefully crafted to bring you the most relevant and high-quality articles, saving you time.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 14.95a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM4 10a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM7.707 14.293a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM12.293 7.293a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM10 5a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zM10 15a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Actionable Insights</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Go beyond theory with practical tips and strategies you can implement in your work and life immediately.
                        </p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                            <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5v3a1 1 0 01-2 0v-3H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-2 0v1h2zm-1 4a1 1 0 10-2 0v3a1 1 0 102 0v-3z" clipRule="evenodd"></path><path d="M3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Free Forever</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Get access to all of this valuable content completely free. No hidden costs, no premium tiers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}