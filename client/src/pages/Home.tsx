// Frontend: src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="container">
            <h1>Welcome to the Home Page</h1>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default Home;