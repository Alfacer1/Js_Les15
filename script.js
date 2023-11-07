function generateKey(length, characters) {
    const charactersArray = Array.from(characters);
    const randomChars = Array.from({ length }, () => charactersArray[Math.floor(Math.random() * charactersArray.length)]);
    return randomChars.join('');
  }
  
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const key = generateKey(16, characters);
  console.log(key);