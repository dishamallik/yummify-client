import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false); // Popup state

    useEffect(() => {
        // Function to show popup every 10 minutes
        const interval = setInterval(() => {
            setShowPopup(true);
        }, 600000); // 10 minutes in milliseconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    };

    return (
        <div>
            {showPopup && (
                <div className="fixed inset-0 flex items-end justify-center z-50">
                    <div className="bg-red-400 px-60 py-5 rounded-t-lg shadow-lg text-center w-full animate-slide-up">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold mb-4">
                                You want our best recipe straight to your inbox?
                            </h2>
                            <div className="flex space-x-4">
                                <Link
                                to="/about"
                                >

                                <button
                                    className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-400"
                                    onClick={handleClose}
                                >
                                    Yes Please
                                </button>
                                </Link>
                                <button
                                    className="bg-gray-800 text-red-300 px-4 py-2 rounded hover:bg-gray-600"
                                    onClick={handleClose}
                                >
                                    No, Thank You
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
