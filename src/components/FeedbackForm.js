import { useState } from 'react';

const FeedbackForm = () => {
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);

    const user = localStorage.getItem("user");
    const userData = JSON.parse(user);
    const email = userData.email;

    const url = "api/feedback/" + email;
    console.log("url", url);

    const handleSubmit = async () => {

        const feedback = { sender, message, rating };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(feedback),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        })
    };

    const json = await response.json();

    if (!response.ok) {
        console.log(json);
    }