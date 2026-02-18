import emailjs from '@emailjs/browser';

// Initialize EmailJS with Public Key
export const initEmail = () => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendNotification = async (templateParams: Record<string, string>) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS keys are missing in .env");
        return;
    }

    try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log("Email Notification Sent!");
    } catch (error) {
        console.error("Failed to send email notification:", error);
    }
};
