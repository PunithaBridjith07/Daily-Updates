

export interface productAgenda {
    itemId: number
    price: number
    discount: number
}

export interface itemAdded {
    userId: number
    itemId: number
    price: number
    quantity: number
    discount: number
}

export interface user {
    userId: number
    email: string
    password: string
    status: 'in' | 'out'
}

export interface admin {
    adminId: number
    email: string
    password: string
    status: 'in' | 'out'
}
/* 
export function isEmailValid(userEmail: string, storedEmail: string) {
    return (control: AbstractControl) => {
        const userEmail = control.get('')
        if (userEmail != storedEmail) {
            return false
        }
        return ({ emailIdValid: true })
    }
} */