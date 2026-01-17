import React from "react";
import ProductList from "@/components/ecommerce/ProductList";
import Link from "next/link";
import { PlusIcon } from "@/icons";

export default function ProductsPage() {
    return (
        <div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-md2 font-bold text-black dark:text-white">
                    Products
                </h2>
                <Link
                    href="/ecommerce/add-product"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    <span>
                        <PlusIcon color="none" />
                    </span>
                    Add Product
                </Link>
            </div>
            <div className="flex flex-col gap-10">
                <ProductList />
            </div>
        </div>
    );
}
