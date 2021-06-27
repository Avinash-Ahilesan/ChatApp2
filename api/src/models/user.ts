import { Schema, model, Document } from 'mongoose'
import { compare, hash } from 'bcrypt'
import { createHash } from 'crypto'
import { BCRYPT_WORK_FACTOR } from '../config'
interface UserDocument extends Document {
    email: string
    name: string,
    password: string,
    matchesPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema<UserDocument>({
    email: String,
    name: String,
    password: String
}, {
    timestamps: true
})

userSchema.pre<UserDocument>('save', async function() {
    if (this.isModified('password')) {
        const hashedPassword = createHash('sha256').update(this.password).digest('base64')
        this.password = await hash(hashedPassword, BCRYPT_WORK_FACTOR)
    }
})

userSchema.methods.matchesPassword = function (password: string) {
    const hashedPassword = createHash('sha256').update(password).digest('base64')
    return compare(hashedPassword, this.password)
}

userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest}, options) => rest
})
export const User = model<UserDocument>('User', userSchema)