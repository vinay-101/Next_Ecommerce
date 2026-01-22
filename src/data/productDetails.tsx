import { IProduct } from "@/types/product";

export const product:IProduct = {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
        red: "/products/5r.png",
        orange: "/products/5o.png",
        black: "/products/5bl.png",
    },
}

