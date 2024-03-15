import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedbacks = () => {
    const navigate = useNavigate();
    const [feedbacks, setFeedbacks] = useState([]);
    let update = false;
    const token = localStorage.getItem("token");
    const url = "http://localhost:4000/api/feedback/";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setFeedbacks(data);
            } else {
                console.log("Error:", response);
            }
            }
            fetchData();
        }, [token]);

        // method to delete feedback
        const handleDelete = async (id) => {
            const url = "http://localhost:4000/api/feedback/" + id;

            const response = await fetch(url, {
                method: "DELETE",
                headers: {Authorization: "Bearer " + localStorage.getItem("token")}
            });
        
        if (response.ok) {
            setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
        } else {
            console.log("Error:", response);
        }
    };

    const edit = () => {
        update = true;
    }

    const handleUpdate = async (id, updatedFeedback) => {
        try {
            const url = "http://localhost:4000/api/feedback/" + id;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedFeedback)
            });

            if (response.ok) {
                const updatedFeedback = feedbacks.map((feedback) => {
                    if (feedback.id === id) {
                        return { ...feedbacks, updatedFeedback };
                    }
                    return feedbacks;
                });
                setFeedbacks(updatedFeedback);
            } else {
                console.log("Error:", response);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    if (!update) {
    return (
        <div className="feedback">
            {feedbacks.map((feedback) => (
                <div key={feedback._id} className='single-feedback'>
                    <h2>Feedback from @{feedback.sender}</h2>
                    <p>{feedback.message}</p>
                    <p>Rating: {feedback.rating}</p>
                    <button onClick={() => edit(feedback._id)}>Update</button>
                    <button onClick={() => handleDelete(feedback._id)}>Delete</button>

                    {update && <EditForm id={feedback.id} initialText={feedback.text} onUpdate={handleUpdate} />}
                    
                </div>
            ))}
        </div>
    )} else {
        return (
            <div className="feedback">
            {feedbacks.map((feedback) => (
                <div key={feedback._id} className='single-feedback'>
                    <h2>Feedback from @{feedback.sender}</h2>
                    <p>{feedback.message}</p>
                    <p>Rating: {feedback.rating}</p>
                    <button onClick={() => edit(feedback._id)}>Update</button>
                    <button onClick={() => handleDelete(feedback._id)}>Delete</button>

                    <EditForm id={feedback.id} initialText={feedback.text} onUpdate={handleUpdate} />
                </div>

                ))};
            </div>
        )};
};

const EditForm = ({ id, initialText, onUpdate }) => {
    const [text, setText] = useState(initialText);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(id, text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    );
} ;

export default Feedbacks;