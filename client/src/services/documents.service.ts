import { DocumentInterface } from "../interfaces/documentInterface";

export const getAllDocuments = async (): Promise<DocumentInterface[]> => {
    return [
        {
            id: "documentation",
            navigation: "Documentation",
            documentTitle: "Documentation",
            secondaryTitle: "Secondary only",
            createdBy: "John Doe",
            updatedBy: "John Doe",
            updatedDate: "5 Days ago",
            createdDate: "5 Days ago",
            isProtected: true,
            sections: [
                { h3: "Vestibulum interdum", h4: "cursus justo, quis vestibulum", img: "https://placehold.co/150", p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ipsum rhoncus, condimentum sapien quis, ultricies nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ligula in diam molestie porttitor eu quis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque urna diam, interdum in diam ut, finibus posuere neque. Pellentesque neque enim, blandit eu dignissim ut, feugiat sed sapien. Maecenas dictum non nunc nec hendrerit. Nunc ut tristique orci, rutrum vehicula lorem. Aliquam nec felis at nisl vehicula euismod non eu ex. Nulla sagittis eros est, sed posuere eros mollis ut. Phasellus lacinia blandit nisi, vitae vehicula felis semper ac." },
                { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "https://placehold.co/150", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." },
                { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." }
            ]
        },
        {
            id: "tipsGuide",
            navigation: "Tips and Guide",
            documentTitle: "Tips and Guide here",
            secondaryTitle: "Secondary Guide",
            createdBy: "John Cena",
            updatedBy: "John Cena",
            updatedDate: "3 Days ago",
            createdDate: "3 Days ago",
            isProtected: true,
            sections: [
                { h3: "Vestibulum interdum", h4: "cursus justo, quis vestibulum", img: "https://placehold.co/150", p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ipsum rhoncus, condimentum sapien quis, ultricies nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ligula in diam molestie porttitor eu quis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque urna diam, interdum in diam ut, finibus posuere neque. Pellentesque neque enim, blandit eu dignissim ut, feugiat sed sapien. Maecenas dictum non nunc nec hendrerit. Nunc ut tristique orci, rutrum vehicula lorem. Aliquam nec felis at nisl vehicula euismod non eu ex. Nulla sagittis eros est, sed posuere eros mollis ut. Phasellus lacinia blandit nisi, vitae vehicula felis semper ac." },
                { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "https://placehold.co/150", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." },
                { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." }
            ]
        }
    ]
};

export const getDocuments = async (): Promise<DocumentInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: "documentation",
                    navigation: "Documentation",
                    documentTitle: "Documentation",
                    secondaryTitle: "Secondary only",
                    createdBy: "John Doe",
                    updatedBy: "John Doe",
                    updatedDate: "5 Days ago",
                    createdDate: "5 Days ago",
                    isProtected: true,
                    sections: [
                        { h3: "Vestibulum interdum", h4: "cursus justo, quis vestibulum", img: "https://placehold.co/150", p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ipsum rhoncus, condimentum sapien quis, ultricies nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ligula in diam molestie porttitor eu quis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque urna diam, interdum in diam ut, finibus posuere neque. Pellentesque neque enim, blandit eu dignissim ut, feugiat sed sapien. Maecenas dictum non nunc nec hendrerit. Nunc ut tristique orci, rutrum vehicula lorem. Aliquam nec felis at nisl vehicula euismod non eu ex. Nulla sagittis eros est, sed posuere eros mollis ut. Phasellus lacinia blandit nisi, vitae vehicula felis semper ac." },
                        { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "https://placehold.co/150", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." },
                        { h3: "Donec ultricies eget", h4: "euismod non eu ex", img: "", p1: "Vivamus eget malesuada justo. Vestibulum interdum pulvinar ex, in aliquet purus euismod nec. Sed luctus blandit libero, nec vulputate mi tempor at. Quisque suscipit dolor sed enim rhoncus, aliquet commodo augue pulvinar. Mauris tristique eget purus sed dapibus. Suspendisse velit tortor, luctus quis urna sed, semper iaculis enim. Phasellus pulvinar massa nec ante scelerisque faucibus. Curabitur consectetur pretium leo, in ullamcorper elit cursus vitae. Pellentesque placerat gravida arcu, quis ornare leo rutrum vitae." }
                    ]
                }
            ]);
        }, 3000);
    });
};
