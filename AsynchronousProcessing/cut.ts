export const cut = (...ingredient: string[]): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "を切ります。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "が切れた！");
        }, 3000);
    });
}