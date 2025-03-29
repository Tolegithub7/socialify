'use client';

import React, { useState } from 'react';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'You have a new follower!', read: false },
        { id: 2, message: 'Your post got 10 likes!', read: false },
        { id: 3, message: 'Someone commented on your post.', read: true },
    ]);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen p-6`}>
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            <button
                onClick={toggleDarkMode}
                className={`mb-4 px-4 py-2 rounded ${
                    isDarkMode
                        ? 'bg-purple-500 text-black hover:bg-purple-400'
                        : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
            >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            {notifications.length === 0 ? (
                <p>No notifications to show.</p>
            ) : (
                <ul className="space-y-4">
                    {notifications.map((notification) => (
                        <li
                            key={notification.id}
                            className={`p-4 border rounded ${
                                notification.read
                                    ? isDarkMode
                                        ? 'bg-gray-800 border-gray-700'
                                        : 'bg-gray-200 border-gray-300'
                                    : isDarkMode
                                    ? 'bg-gray-700 border-gray-600'
                                    : 'bg-blue-100 border-blue-300'
                            }`}
                        >
                            <span>{notification.message}</span>
                            {!notification.read && (
                                <button
                                    onClick={() => markAsRead(notification.id)}
                                    className={`ml-4 px-3 py-1 rounded ${
                                        isDarkMode
                                            ? 'bg-purple-500 text-black hover:bg-purple-400'
                                            : 'bg-blue-500 text-white hover:bg-blue-400'
                                    }`}
                                >
                                    Mark as Read
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            <button
                onClick={clearNotifications}
                className={`mt-4 px-4 py-2 rounded ${
                    isDarkMode
                        ? 'bg-red-500 text-black hover:bg-red-400'
                        : 'bg-red-500 text-white hover:bg-red-400'
                }`}
            >
                Clear All
            </button>
        </div>
    );
};

export default NotificationsPage;
