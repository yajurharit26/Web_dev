// Node.js Crypto Module: Examples of Methods and Properties
// Run with: node scriptCrypto.js

const crypto = require("crypto");

// 1. crypto.checkPrime(candidate[, options], callback)
crypto.checkPrime(Buffer.from([5]), (err, result) => {
  console.log("checkPrime:", result); // true for prime
});

// 2. crypto.checkPrimeSync(candidate[, options])
console.log("checkPrimeSync:", crypto.checkPrimeSync(Buffer.from([5])));

// 3. crypto.constants
console.log("constants:", crypto.constants);

// 4. crypto.createCipheriv(algorithm, key, iv[, options])
const cipher = crypto.createCipheriv(
  "aes-128-cbc",
  crypto.randomBytes(16),
  crypto.randomBytes(16)
);
let encrypted = cipher.update("hello", "utf8", "hex");
encrypted += cipher.final("hex");
console.log("createCipheriv:", encrypted);

// 5. crypto.createDecipheriv(algorithm, key, iv[, options])
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher2 = crypto.createCipheriv("aes-256-cbc", key, iv);
let enc = cipher2.update("world", "utf8", "hex");
enc += cipher2.final("hex");
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let dec = decipher.update(enc, "hex", "utf8");
dec += decipher.final("utf8");  

console.log("createDecipheriv:", dec);

// 6. crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])
const dh = crypto.createDiffieHellman(2048);
dh.generateKeys();
console.log("createDiffieHellman publicKey:", dh.getPublicKey("hex"));

// 7. crypto.createDiffieHellman(primeLength[, generator])
const dh2 = crypto.createDiffieHellman(2048);
dh2.generateKeys();
console.log(
  "createDiffieHellman (primeLength) publicKey:",
  dh2.getPublicKey("hex")
);

// 8. crypto.createDiffieHellmanGroup(name)
// Only certain group names are supported, e.g., 'modp14'
const dhGroup = crypto.getDiffieHellman("modp14");
dhGroup.generateKeys();
console.log("createDiffieHellmanGroup publicKey:", dhGroup.getPublicKey("hex"));

// 9. crypto.createECDH(curveName)
const ecdh = crypto.createECDH("secp256k1");
ecdh.generateKeys();
console.log("createECDH publicKey:", ecdh.getPublicKey("hex"));

// 10. crypto.createHash(algorithm[, options])
const hash = crypto.createHash("sha256").update("data").digest("hex");
console.log("createHash:", hash);

// 11. crypto.createHmac(algorithm, key[, options])
const hmac = crypto.createHmac("sha256", "secret").update("data").digest("hex");
console.log("createHmac:", hmac);

// 12. crypto.createPrivateKey(key)
const { generateKeyPairSync } = require("crypto");
const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
const privKeyObj = crypto.createPrivateKey(
  privateKey.export({ type: "pkcs1", format: "pem" })
);
console.log("createPrivateKey:", privKeyObj.asymmetricKeyType);

// 13. crypto.createPublicKey(key)
const pubKeyObj = crypto.createPublicKey(
  publicKey.export({ type: "pkcs1", format: "pem" })
);
console.log("createPublicKey:", pubKeyObj.asymmetricKeyType);

// 14. crypto.createSecretKey(key[, encoding])
const secretKey = crypto.createSecretKey(Buffer.from("a".repeat(32)));
console.log("createSecretKey:", secretKey.type);

// 15. crypto.createSign(algorithm[, options])
const sign = crypto.createSign("SHA256");
sign.update("message");
const signature = sign.sign(privateKey, "hex");
console.log("createSign:", signature);

// 16. crypto.createVerify(algorithm[, options])
const verify = crypto.createVerify("SHA256");
verify.update("message");
console.log("createVerify:", verify.verify(publicKey, signature, "hex"));

// 17. crypto.diffieHellman(options[, callback])
// (Advanced usage, see docs. Skipping for brevity)
// crypto.diffieHellman({ ... })

// 18. crypto.fips
console.log("fips:", crypto.fips);

// 19. crypto.generateKey(type, options, callback)
crypto.generateKey("hmac", { length: 256 }, (err, key) => {
  if (!err) console.log("generateKey:", key.type);
});

// 20. crypto.generateKeyPair(type, options, callback)
crypto.generateKeyPair("rsa", { modulusLength: 2048 }, (err, pub, priv) => {
  if (!err) console.log("generateKeyPair:", pub.type, priv.type);
});

// 21. crypto.generateKeyPairSync(type, options)
const { publicKey: pk, privateKey: sk } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
console.log("generateKeyPairSync:", pk.type, sk.type);

// 22. crypto.generateKeySync(type, options)
const hmacKey = crypto.generateKeySync("hmac", { length: 256 });
console.log("generateKeySync:", hmacKey.type);

// 23. crypto.generatePrime(size[, options], callback)
crypto.generatePrime(32, (err, prime) => {
  if (!err) console.log("generatePrime:", prime.toString("hex"));
});

// 24. crypto.generatePrimeSync(size[, options])
const primeSync = crypto.generatePrimeSync(32);
console.log("generatePrimeSync:", primeSync.toString("hex"));

// 25. crypto.getCipherInfo(nameOrNid[, options])
console.log("getCipherInfo:", crypto.getCipherInfo("aes-256-cbc"));

// 26. crypto.getCiphers()
console.log("getCiphers:", crypto.getCiphers().slice(0, 5), "...");

// 27. crypto.getCurves()
console.log("getCurves:", crypto.getCurves().slice(0, 5), "...");

// 28. crypto.getDiffieHellman(groupName)
const dhm = crypto.getDiffieHellman("modp14");
dhm.generateKeys();
console.log("getDiffieHellman:", dhm.getPublicKey("hex"));

// 29. crypto.getFips()
console.log("getFips:", crypto.getFips());

// 30. crypto.getHashes()
console.log("getHashes:", crypto.getHashes().slice(0, 5), "...");

// 31. crypto.getRandomValues(typedArray)
// Only available in WebCrypto (not Node.js core). Skipping.

// 32. crypto.hash(algorithm, data[, options])
// Experimental, Node.js 16+. Skipping for compatibility.

// 33. crypto.hkdf(digest, ikm, salt, info, keylen, callback)
crypto.hkdf(
  "sha256",
  Buffer.from("ikm"),
  Buffer.from("salt"),
  Buffer.from("info"),
  32,
  (err, derivedKey) => {
    if (!err) console.log("hkdf:", derivedKey.toString("hex"));
  }
);

// 34. crypto.hkdfSync(digest, ikm, salt, info, keylen)
const hkdfKey = crypto.hkdfSync(
  "sha256",
  Buffer.from("ikm"),
  Buffer.from("salt"),
  Buffer.from("info"),
  32
);
console.log("hkdfSync:", hkdfKey.toString("hex"));

// 35. crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
crypto.pbkdf2("password", "salt", 1000, 32, "sha256", (err, derivedKey) => {
  if (!err) console.log("pbkdf2:", derivedKey.toString("hex"));
});

// 36. crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
const pbkdf2Key = crypto.pbkdf2Sync("password", "salt", 1000, 32, "sha256");
console.log("pbkdf2Sync:", pbkdf2Key.toString("hex"));

// 37. crypto.privateDecrypt(privateKey, buffer)
// 38. crypto.privateEncrypt(privateKey, buffer)
// 39. crypto.publicDecrypt(key, buffer)
// 40. crypto.publicEncrypt(key, buffer)
// (These require key pairs and are advanced. See docs for full usage.)

// 41. crypto.randomBytes(size[, callback])
crypto.randomBytes(16, (err, buf) => {
  if (!err) console.log("randomBytes:", buf.toString("hex"));
});

// 42. crypto.randomFill(buffer[, offset][, size], callback)
const buf = Buffer.alloc(10);
crypto.randomFill(buf, (err, buf) => {
  if (!err) console.log("randomFill:", buf);
});

// 43. crypto.randomFillSync(buffer[, offset][, size])
const buf2 = Buffer.alloc(10);
crypto.randomFillSync(buf2);
console.log("randomFillSync:", buf2);

// 44. crypto.randomInt([min, ]max[, callback])
crypto.randomInt(1, 100, (err, n) => {
  if (!err) console.log("randomInt:", n);
});

// 45. crypto.randomUUID([options])
console.log("randomUUID:", crypto.randomUUID());

// 46. crypto.scrypt(password, salt, keylen[, options], callback)
crypto.scrypt("password", "salt", 32, (err, derivedKey) => {
  if (!err) console.log("scrypt:", derivedKey.toString("hex"));
});

// 47. crypto.scryptSync(password, salt, keylen[, options])
const scryptKey = crypto.scryptSync("password", "salt", 32);
console.log("scryptSync:", scryptKey.toString("hex"));

// 48. crypto.secureHeapUsed()
// Only available if Node.js built with secure heap. Skipping.

// 49. crypto.setEngine(engine[, flags])
// OpenSSL engines, rarely used. Skipping.

// 50. crypto.setFips(bool)
// Only if Node.js built with FIPS. Skipping.

// 51. crypto.sign(algorithm, data, key[, callback])
// Modern usage prefers createSign. Skipping direct sign().

// 52. crypto.subtle
// WebCrypto API, available as crypto.webcrypto.subtle in Node.js 15+
if (crypto.webcrypto) {
  console.log("subtle:", typeof crypto.webcrypto.subtle);
}

// 53. crypto.timingSafeEqual(a, b)
const a = Buffer.from("1234");
const b = Buffer.from("1234");
console.log("timingSafeEqual:", crypto.timingSafeEqual(a, b));

// 54. crypto.verify(algorithm, data, key, signature[, callback])
// Modern usage prefers createVerify. Skipping direct verify().

// 55. crypto.webcrypto
if (crypto.webcrypto) {
  console.log("webcrypto:", typeof crypto.webcrypto);
}

// End of examples
