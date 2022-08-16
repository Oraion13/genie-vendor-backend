export interface updateAddress {
    address: string
}

export interface updateFollowers {
    followers: {
        connect: {
            id: string
        }
    }
}