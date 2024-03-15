import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
    const navigate = useNavigate();
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);

    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    const emailu = userData.email;

    const url = "http://localhost:4000/api/feedback/" + emailu;

    const handleSubmit = async () => {

        const feedback = { sender, message, rating };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(feedback),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });
        
        const json = await response.json();

        if (!response.ok) {
            console.log("Error:", json);
        } else {
            setSender("");
            setMessage("");
            setRating();
            setError(null);
            console.log("Feedback sent:", json);
        };
    };

    return (
        <div className="feedback-container">
            <h2>Send Feedback</h2>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text"
                        placeholder="Your name"
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                </label>
                <label>
                    <textarea
                        value={message}
                        placeholder="Your message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="Rating 1-5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </label>
                <button>Send</button>
            </form>
        </div>
    )
};

export default FeedbackForm;