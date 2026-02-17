import { doc, getDoc, setDoc, collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

// Types
export interface PageContent {
    heroTitle: string;
    heroSubtitle: string;
    aboutStory: string;
    contactEmail: string;
    contactPhone: string;
}

export interface Project {
    id?: string;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
}

export interface Message {
    id?: string;
    name: string;
    email: string;
    mobile?: string;
    message: string;
    date: string;
}

// Default Content (Fallback)
const defaultContent: PageContent = {
    heroTitle: "Building Digital Experiences.",
    heroSubtitle: "A self-taught developer transforming ideas into scalable, high-performance web applications.",
    aboutStory: "I started my journey without a laptop...",
    contactEmail: "kp154437@gmail.com",
    contactPhone: "+91 9238191973"
};

// Functions

// Get Global Site Content
export const getSiteContent = async (): Promise<PageContent> => {
    try {
        const docRef = doc(db, "content", "main");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data() as PageContent;
        } else {
            // Initialize if not exists
            await setDoc(docRef, defaultContent);
            return defaultContent;
        }
    } catch (error) {
        console.error("Error fetching content:", error);
        return defaultContent;
    }
};

// Update Global Site Content
export const updateSiteContent = async (content: PageContent) => {
    const docRef = doc(db, "content", "main");
    await setDoc(docRef, content, { merge: true });
};

// Get All Projects
export const getProjects = async (): Promise<Project[]> => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
};

// Add Project
export const addProject = async (project: Project) => {
    try {
        await addDoc(collection(db, "projects"), project);
    } catch (e) {
        console.error("Firebase addDoc Error:", e);
        throw e;
    }
};

// Delete Project
export const deleteProject = async (id: string) => {
    await deleteDoc(doc(db, "projects", id));
};

// Add Message
export const addMessage = async (msg: Message) => {
    try {
        await addDoc(collection(db, "messages"), msg);
    } catch (e) {
        console.error("Error sending message:", e);
        throw e;
    }
};

// Get All Messages
export const getMessages = async (): Promise<Message[]> => {
    const querySnapshot = await getDocs(collection(db, "messages"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
};

// Delete Message
export const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, "messages", id));
};

// --- Testimonials ---

export interface Testimonial {
    id?: string;
    name: string;
    role: string;
    text: string;
    rating: number;
    date: string;
}

// Get Testimonials
export const getTestimonials = async (): Promise<Testimonial[]> => {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));
};

// Add Testimonial
export const addTestimonial = async (review: Testimonial) => {
    await addDoc(collection(db, "testimonials"), review);
};

// Delete Testimonial
export const deleteTestimonial = async (id: string) => {
    await deleteDoc(doc(db, "testimonials", id));
};
