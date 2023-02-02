export const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window !== "undefined") {
      const savedValue = sessionStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(savedValue);
      }
      onSet((newValue: any, _: any, isReset: boolean) => {
        !newValue
          ? sessionStorage.removeItem(key)
          : sessionStorage.setItem(key, JSON.stringify(newValue));
      });
    }
    return null;
  };
