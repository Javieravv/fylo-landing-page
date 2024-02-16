export const  validEmailFc = (email: string) => {
    const re = /^[^,\s@+]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }