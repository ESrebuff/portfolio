import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SendEmailAPI = ({ formData, onSuccess, onError, trigger }) => {
    useEffect(() => {
        if (trigger) {
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
                .then(() => {
                    onSuccess();
                })
                .catch((error) => {
                    onError(error);
                });
        }
    }, [trigger]);

    return null; // Pas de rendu
};

export default SendEmailAPI;
