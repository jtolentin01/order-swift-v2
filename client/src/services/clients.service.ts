import { ClientInterface } from "../interfaces/clientInterface";

export const getAllClients = async (): Promise<ClientInterface[]> => {
    return [
        {
            clientId: "OE3552",
            clientName: "Outdoor Equipped",
            isActive: true,
            createdBy: "Yuri Rego",
            createdDate: new Date().toISOString(),
            description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        },
        {
            clientId: "HDWEB362",
            clientName: "HD Websoft",
            isActive: true,
            createdBy: "Dat Giang",
            createdDate: new Date().toISOString(),
            description: "fringilla vel, aliquet nec, vulputate eget, arcu. Nulla consequat massa quis enim. Donec pede justo",
        },
    ]
};

export const getClients = async (): Promise<ClientInterface[]> => {
    return [
        {
            clientId: "OE3552",
            clientName: "Outdoor Equipped",
            isActive: true,
            createdBy: "Yuri Rego",
            createdDate: new Date().toISOString(),
            description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        }
    ]
};
