import mongoose from 'mongoose'

const connection = async () => {
    try {
        const connet = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Database connected: ${connet.connection.host}`)
    } catch (error) {
        console.log(`Error${error.message} `)
        process.exit(1)
    }
}
export default connection