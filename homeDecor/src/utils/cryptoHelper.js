export const generateEncryptionKey = async (
  keySize = 256,
  algorithm = "AES-GCM"
) => {
  return await window.crypto.subtle.generateKey(
    {
      name: algorithm,
      length: keySize,
    },
    true,
    ["encrypt", "decrypt"]
  );
};

export const encryptData = async (
  data,
  encryptionKey,
  algorithm = "AES-GCM"
) => {
  const encodedData = new TextEncoder().encode(data);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: algorithm,
      iv: iv,
    },
    encryptionKey,
    encodedData
  );

  return {
    iv: iv,
    encryptedData: new Uint8Array(encryptedData),
  };
};

export const decryptData = async (
  encryptedData,
  encryptionKey,
  iv,
  algorithm = "AES-GCM"
) => {
  const decryptedData = await window.crypto.subtle.decrypt(
    {
      name: algorithm,
      iv: iv,
    },
    encryptionKey,
    encryptedData
  );

  return new TextDecoder().decode(decryptedData);
};
