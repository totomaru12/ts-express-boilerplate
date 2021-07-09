import mongoose, { Schema, Document } from 'mongoose'

type Sex = '男' | '女'

export interface UserDoc extends Document {
  firstName: string
  lastName: string
  email: string
  age: number
  sex: Sex
}

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
      enum: ['男', '女'],
    },
  },
  {
    timestamps: true,
  }
)

userSchema.virtual('fullName').get(function (this: UserDoc) {
  return `${this.firstName} ${this.lastName}`
})

export default mongoose.model<UserDoc>('UserDoc', userSchema)
