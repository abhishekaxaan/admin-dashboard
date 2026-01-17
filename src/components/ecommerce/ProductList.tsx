"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PencilIcon, TrashBinIcon } from "../../icons";
import Badge from "../ui/badge/Badge";

const mockProducts = [
    {
        id: 1,
        name: "MacBook Pro 14",
        category: "Laptops",
        price: "$1,999.00",
        status: "In Stock",
        image: "/images/product/product-01.png",
    },
    {
        id: 2,
        name: "Apple Watch Series 7",
        category: "Accessories",
        price: "$299.00",
        status: "Out of Stock",
        image: "/images/product/product-02.png",
    },
    {
        id: 3,
        name: "iPhone 13 Pro",
        category: "Smartphones",
        price: "$999.00",
        status: "In Stock",
        image: "/images/product/product-03.png",
    },
];

export default function ProductList() {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-50 text-left dark:bg-gray-900/50">
                            <th className="min-w-[220px] px-4 py-4 font-medium text-gray-900 dark:text-white xl:pl-11">
                                Product Name
                            </th>
                            <th className="min-w-[150px] px-4 py-4 font-medium text-gray-900 dark:text-white">
                                Category
                            </th>
                            <th className="min-w-[120px] px-4 py-4 font-medium text-gray-900 dark:text-white">
                                Price
                            </th>
                            <th className="min-w-[120px] px-4 py-4 font-medium text-gray-900 dark:text-white">
                                Status
                            </th>
                            <th className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockProducts.map((product) => (
                            <tr key={product.id}>
                                <td className="border-b border-gray-100 p-4 dark:border-gray-800 xl:pl-11">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            <div className="h-12.5 w-15 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                {/* Placeholder for image if not found */}
                                                <span className="text-xs text-gray-500">Img</span>
                                            </div>
                                        </div>
                                        <p className="font-medium text-gray-800 dark:text-white/90">
                                            {product.name}
                                        </p>
                                    </div>
                                </td>
                                <td className="border-b border-gray-100 p-4 dark:border-gray-800">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {product.category}
                                    </p>
                                </td>
                                <td className="border-b border-gray-100 p-4 dark:border-gray-800">
                                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                        {product.price}
                                    </p>
                                </td>
                                <td className="border-b border-gray-100 p-4 dark:border-gray-800">
                                    <Badge
                                        color={product.status === "In Stock" ? "success" : "error"}
                                    >
                                        {product.status}
                                    </Badge>
                                </td>
                                <td className="border-b border-gray-100 p-4 dark:border-gray-800">
                                    <div className="flex items-center space-x-3.5">
                                        <span className="hover:text-primary">
                                            <PencilIcon className="w-5 h-5 fill-current" />
                                        </span>
                                        <span className="hover:text-red-500">
                                            <TrashBinIcon className="w-5 h-5 fill-current" />
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
