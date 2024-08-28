import { createClient } from "redis";

const redis_client = createClient();
const connect_redis = async () => {
    redis_client.on("error", err => console.log(`Redis client not connected to the server: ${err}`));
    try{
        await redis_client.connect();
        console.log("Redis client connected to the server")
    }catch{
        console.log(`Redis client not connected to the server`);
    }
}

connect_redis();