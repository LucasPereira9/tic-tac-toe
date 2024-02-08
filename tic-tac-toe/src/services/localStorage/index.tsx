const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
};

export { setLocalStorage, getLocalStorage };