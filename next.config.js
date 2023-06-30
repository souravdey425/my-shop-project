/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_URI:"mongodb://0.0.0.0:27017/hello",
        NEXTAUTH_SECRET:"Codinggo",
        NEXTAUTH_URL:"/pages/api/auth/"
    },
}


module.exports = nextConfig
