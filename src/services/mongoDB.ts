import User from '../Model/users'

export const createUser = async (email: string, password: string) => {

    const hasUser = await User.findOne({email: email})
    if(!hasUser) {
        let newUser = await User.create({
            email: 'testename',
            password: 'testePassword'
        })
        await newUser.save()
        return "user has been created"
    }

    return "user already exists"

}