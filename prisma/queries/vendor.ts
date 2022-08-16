import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { updateAddress, updateFollowers } from "./updateTypes";

// Get vendors
export const get = async (searchString: string, limit: Number) => {

    return await prisma.vendor.findMany({
        where: {
            name: { contains: searchString }
        },
        include: {
            followers: true,
            products: true
        },
        take: Number(limit)
    })

}

// get by id
export const getById = async (id: string) => {
    return await prisma.vendor.findUniqueOrThrow({
        where: {
            id
        },
        include: {
            followers: true,
            products: true
        },
    })
}

// get by email
export const getByEmail = async (email: string) => {
    return await prisma.vendor.findUniqueOrThrow({
        where: {
            email
        },
        include: {
            followers: true,
            products: true
        },
    })
}

// create
export const post = async (email: string, password: string) => {
    return await prisma.vendor.create({
        data: {
            email,
            password,
            address: ""
        },
        include: {
            followers: true,
            products: true
        },
    })
}

// set Address | Followers
export const setAddress = async (id: string, data: updateAddress | updateFollowers) => {
    return await prisma.vendor.update({
        where: {
            id
        },
        data: data,
        include: {
            followers: true,
            products: true
        },
    })
}
