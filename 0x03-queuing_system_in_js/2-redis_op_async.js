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

const setNewSchool = async(schoolName, value) => {
    await redis_client.SET(schoolName, value);
}

const displaySchoolValue = async (schoolName) => {
    const value = await redis_client.get(schoolName);
    //Should return the value of school
    console.log(`${value}`);
}


connect_redis();
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');