export const  validEmailFc = (email) => {
    const re = /^[^,\s@+]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }