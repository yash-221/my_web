import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const publicSearch = async () => {
        try {
            console.log("Searching for user with email:", email);
            const response = await fetch("https://testapi.arbsindia.com/public/api/public-search-users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                })
            });

            const resp = await response.json();
            console.log("Search response:", resp);
            if (response.ok) {
                setShowPassword(resp.users && resp.users.length > 0);
            } else {
                throw new Error("Public Search request failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while searching for the user.");
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await publicSearch();
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        // Implement sign-in logic here
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>

            <div>
                <h3>Search</h3>
                <form onSubmit={handleSearch} style={{ display: 'inline-block' }}>
                    <label htmlFor="emailSearch" style={{ fontSize: '20px' }}>Email:</label><br />
                    <input type="email" id="emailSearch" name="emailSearch" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                    <button type="submit" disabled={loading}>{loading ? "Searching..." : "Search"}</button>
                </form>
            </div>

            {showPassword ? (
                <div>
                    <h3>Sign In</h3>
                    <form onSubmit={handleSignIn} style={{ display: 'inline-block' }}>
                        <label htmlFor="emailSignIn" style={{ fontSize: '20px' }}>Email:</label><br />
                        <input type="email" id="emailSignIn" name="emailSignIn" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br />
                        <label htmlFor="passwordSignIn" style={{ fontSize: '20px' }}>Password:</label><br />
                        <input type="password" id="passwordSignIn" name="passwordSignIn" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '200px', height: '30px' }} required /><br /><br />
                        <button type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
                    </form>
                </div>
            ) : null}

            <div>{message}</div>
        </div>
    );
};

export default Login;
