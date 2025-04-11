import { BrandInterface } from "../interfaces/brandInterface";

export const getAllBrands = async (): Promise<BrandInterface[]> => {
    return [
        {
            brandId: "eagle-creek",
            brandName: "Eagle Creek",
            logo: "https://order-swift.s3.ap-southeast-2.amazonaws.com/assets/images/eagle-creeks.png",
            isActive: true,
            createdBy: "DoubleSpring",
            createdDate: new Date().toDateString(),
            description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        },
        {
            brandId: "helly-hansen",
            brandName: "Helly Hansen",
            logo: "https://order-swift.s3.ap-southeast-2.amazonaws.com/assets/images/hellyhansen.png",
            isActive: true,
            createdBy: "DoubleSpring",
            createdDate: new Date().toDateString(),
            description: "vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus",
        },
    ]
};

export const getCompanyBrands = async (): Promise<BrandInterface[]> => {
    return [
        {
            brandId: "eagle-creek",
            brandName: "Eagle Creek",
            logo: "https://order-swift.s3.ap-southeast-2.amazonaws.com/assets/images/eagle-creeks.png",
            isActive: true,
            createdBy: "DoubleSpring",
            createdDate: new Date().toDateString(),
            description: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
        },
        {
            brandId: "helly-hansen",
            brandName: "Helly Hansen",
            logo: "https://order-swift.s3.ap-southeast-2.amazonaws.com/assets/images/hellyhansen.png",
            isActive: true,
            createdBy: "DoubleSpring",
            createdDate: new Date().toDateString(),
            description: "vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus",
        },
    ]
};
