"use client";
import React from "react";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Button from "../ui/button/Button";

export default function AddProductForm() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
                Product Information
            </h3>
            <form action="#">
                <div className="mb-4">
                    <Label>Product Name</Label>
                    <Input type="text" placeholder="Enter product name" />
                </div>

                <div className="mb-4">
                    <Label>Category</Label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select className="relative z-20 w-full appearance-none rounded-lg border border-gray-200 bg-transparent py-3 px-5 outline-none transition focus:border-brand-500 active:border-brand-500 dark:border-gray-800 dark:bg-gray-800 dark:focus:border-brand-500">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <Label>Price</Label>
                    <Input type="text" placeholder="$$$" />
                </div>

                <div className="mb-6">
                    <Label>Description</Label>
                    <textarea
                        rows={4}
                        placeholder="Type your product description"
                        className="w-full rounded-lg border border-gray-200 bg-transparent py-3 px-5 font-medium outline-none transition focus:border-brand-500 active:border-brand-500 disabled:cursor-default disabled:bg-whiter dark:border-gray-800 dark:bg-gray-800 dark:focus:border-brand-500"
                    ></textarea>
                </div>

                <div className="flex justify-end gap-3">
                    <Button size="sm" variant="outline">
                        Cancel
                    </Button>
                    <Button size="sm">
                        Create Product
                    </Button>
                </div>
            </form>
        </div>
    );
}
