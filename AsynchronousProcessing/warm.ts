export const warm = (ingredient: string): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "をチンします。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "が温まった！");
        }, 5000);
    });
}