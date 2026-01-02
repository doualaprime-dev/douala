import { PageProps } from "@/types";

export interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface IndexProps extends PageProps {
    contacts: Contact[];
}

export interface CreateProps extends PageProps {}

export interface EditProps extends PageProps {
    contact: Contact;
}

export interface ShowProps extends PageProps {
    contact: Contact;
}

export interface Props {
    contacts: Contact[];
}
