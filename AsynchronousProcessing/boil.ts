export const boil = (...ingredient: string[]): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "を煮ます。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "が煮えた！");
        }, 3000);
    });
}