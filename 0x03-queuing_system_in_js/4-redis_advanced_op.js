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

const hashSet = async() => {
    await redis_client.hSet('HolbertonSchools', {
        'Portland': 50,
        'Seattle': 80,
        'New York': 20,
        'Bogota' : 20,
        'Cali': 40,
        'Paris' : 2
    });
    const hgetall = await redis_client.hGetAll('HolbertonSchools');
    console.log(JSON.stringify(hgetall, null, 2));
}


connect_redis();
hashSet();