import React from "react";
import AddProductForm from "@/components/ecommerce/AddProductForm";

export default function AddProductPage() {
    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-title-md2 font-bold text-black dark:text-white">
                    Add New Product
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    <AddProductForm />
                </div>
            </div>
        </div>
    );
}
