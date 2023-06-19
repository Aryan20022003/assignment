import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Under Construction</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">This page is currently under development.</p>
            <img
                src="https://via.placeholder.com/400"
                alt="Under Construction"
                className="w-64 h-auto rounded-md shadow-lg"
            />
        </div>
    );
};

export default UnderConstruction;
