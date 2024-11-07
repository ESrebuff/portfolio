"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import SendEmailAPI from "../api/send";
import Link from "next/link";
import Linkedin from "./icons/Linkedin";
import GitHub from "./icons/GitHub";

interface FormData {
    email: string;
    subject: string;
    message: string;
}

interface Notification {
    show: boolean;
    message: string;
    type: "success" | "error";
}

const EmailSection = () => {
    const [form, setForm] = useState<FormData>({
        email: "",
        subject: "",
        message: "",
    });
    const [triggerSend, setTriggerSend] = useState(false);
    const [notification, setNotification] = useState<Notification>({
        show: false,
        message: "",
        type: "success",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTriggerSend(true);
    };

    const handleSuccess = () => {
        setNotification({ show: true, message: "Message envoyé avec succès!", type: "success" });
        setForm({ email: "", subject: "", message: "" });
        setTriggerSend(false);
    };

    const handleError = (error: any) => {
        setNotification({ show: true, message: "Une erreur s'est produite. Veuillez réessayer.", type: "error" });
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
        <section className="grid md:grid-cols-2 gap-4 relative" id="contact">
            {notification.show && (
                <div
                    className={`fixed top-10 right-4 z-50 p-4 rounded-lg ${notification.type === "success" ? "bg-green-500" : "bg-red-500"
                        } text-foreground`}
                >
                    {notification.message}
                </div>
            )}

            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h2 className="text-xl font-bold text-foreground my-2">Contactez-moi</h2>
                <p className="text-muted mb-4 max-w-md">
                    Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter pour toute question ou juste pour dire bonjour!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/ESrebuff" target="_blank">
                        <GitHub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/esteban-rebuff%C3%A9-mareau-aab8bb20a/" target="_blank">
                        <Linkedin />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="text-foreground block mb-2 text-sm font-medium" htmlFor="email">
                            Votre email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-darkBg border border-borderDark placeholder-muted text-foreground text-sm rounded-lg block w-full p-2.5"
                            placeholder="exemple@domaine.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-foreground block mb-2 text-sm font-medium" htmlFor="subject">
                            Objet
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="bg-darkBg border border-borderDark placeholder-muted text-foreground text-sm rounded-lg block w-full p-2.5"
                            placeholder="Sujets divers"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-foreground block mb-2 text-sm font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="bg-darkBg border border-borderDark placeholder-muted text-foreground text-sm rounded-lg block w-full p-2.5 min-h-[150px]"
                            placeholder="Votre message ici..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            <SendEmailAPI formData={form} onSuccess={handleSuccess} onError={handleError} trigger={triggerSend} />
        </section>
    );
};

export default EmailSection;
