"use client";
import React, { useState, useEffect } from 'react';
import SendEmailAPI from '../api/send';
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const EmailSection = () => {
    const [form, setForm] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [triggerSend, setTriggerSend] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTriggerSend(true);
    };

    const handleSuccess = () => {
        setNotification({ show: true, message: 'Message envoyé avec succès!', type: 'success' });
        setForm({ email: '', subject: '', message: '' });
        setTriggerSend(false);
    };

    const handleError = (error) => {
        setNotification({ show: true, message: 'Une erreur s\'est produite. Veuillez réessayer.', type: 'error' });
        console.error(error);
        setTriggerSend(false);
    };

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ ...notification, show: false });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
            {notification.show && (
                <div
                    className={`fixed top-10 right-4 z-50 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        } text-white`}
                >
                    {notification.message}
                </div>
            )}

            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h2 className="text-xl font-bold text-white my-2">Contactez-moi</h2>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter pour toute question ou juste pour dire bonjour!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com" target="_blank">
                        <Image src={GithubIcon} alt="Icône GitHub" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Image src={LinkedinIcon} alt="Icône LinkedIn" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="email">
                            Votre email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}

                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="exemple@domaine.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="subject">
                            Objet
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Sujets divers"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 min-h-[150px]"
                            placeholder="Votre message ici..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Envoyer
                    </button>
                    {
                        notification.show && (
                            <p className="text-green-500 text-sm mt-2">Email sent successfully !</p>
                        )
                    }
                </form>
            </div>

            <SendEmailAPI
                formData={form}
                onSuccess={handleSuccess}
                onError={handleError}
                trigger={triggerSend}
            />
        </section>
    );
};

export default EmailSection;
