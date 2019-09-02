const Redis = require("ioredis");
const redis = new Redis(6379, "redis");

module.exports = redis
// redis.set("foo", "bar");
// redis.get("foo", function(err, result) {
//   console.log(result);
// });
// redis.del("foo");

// // Or using a promise if the last argument isn't a function
// redis.get("foo").then(function(result) {
//   console.log(result);
// });

// // Arguments to commands are flattened, so the following are the same:
// redis.sadd("set", 1, 3, 5, 7);
// redis.sadd("set", [1, 3, 5, 7]);

// // All arguments are passed directly to the redis server:
// redis.set("key", 100, "EX", 10);