import { ProductInterface } from "../interfaces/productInterface";

export const getBrandProducts = async (): Promise<ProductInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "THE FORESTER",
                    code: "10513",
                    description: "FOREST NIGHT / MARMELADE / 489",
                    price: 75.0,
                    availableDate: "11/23/24",
                    imageUrl: "https://placehold.co/50",
                    units: 0,
                    totalUnits: 20,
                },
                {
                    id: 2,
                    name: "THE EXPLORER",
                    code: "20215",
                    description: "OCEAN BLUE / SUNSET / 123",
                    price: 85.0,
                    availableDate: "12/15/24",
                    imageUrl: "https://placehold.co/50",
                    units: 0,
                    totalUnits: 15,
                },
            ]);
        }, 3000);
    });
};

export const getAllCartProducts = async (): Promise<ProductInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "THE FORESTER",
                    code: "10513",
                    description: "FOREST NIGHT / MARMELADE / 489",
                    price: 75.0,
                    availableDate: "11/23/24",
                    imageUrl: "https://placehold.co/50",
                    units: 2,
                    totalUnits: 20,
                },
                {
                    id: 2,
                    name: "THE EXPLORER",
                    code: "20215",
                    description: "OCEAN BLUE / SUNSET / 123",
                    price: 85.0,
                    availableDate: "12/15/24",
                    imageUrl: "https://placehold.co/50",
                    units: 3,
                    totalUnits: 15,
                },
                {
                    id: 3,
                    name: "THE SPECTRUM",
                    code: "55234",
                    description: "SKY MAROON / BLUEWATER / 523",
                    price: 85.0,
                    availableDate: "12/15/24",
                    imageUrl: "https://placehold.co/50",
                    units: 5,
                    totalUnits: 20,
                },
            ]);
        }, 3000);
    });
};

export const getBrandCartProducts = async (brand:string): Promise<ProductInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 3,
                    name: "THE SPECTRUM",
                    code: "55234",
                    description: "SKY MAROON / BLUEWATER / 523",
                    price: 85.0,
                    availableDate: "12/15/24",
                    imageUrl: "https://placehold.co/50",
                    units: 0,
                    totalUnits: 20,
                }
            ]);
        }, 3000);
    });
};