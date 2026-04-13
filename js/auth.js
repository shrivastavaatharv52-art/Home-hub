'use strict';

/**
 * Authenticates a user and stores the token in local storage.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 */
async function authenticateUser(username, password) {
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Authentication failed!');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data.token;
    } catch (error) {
        console.error('Error during authentication:', error);
    }
}

/**
 * Logs out the user by removing the token from local storage.
 */
function logoutUser() {
    localStorage.removeItem('token');
}

/**
 * Retrieves the current authentication token from local storage.
 * @return {string|null} - The current token or null if not logged in.
 */
function getAuthToken() {
    return localStorage.getItem('token');
}

/**
 * Checks if the user is authenticated based on the token's existence.
 * @return {boolean} - True if authenticated, false otherwise.
 */
function isAuthenticated() {
    return !!getAuthToken();
}

module.exports = {
    authenticateUser,
    logoutUser,
    getAuthToken,
    isAuthenticated
};