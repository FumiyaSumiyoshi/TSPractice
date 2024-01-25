export const stay = (): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
};