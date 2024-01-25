export const steam = (ingredient: string): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "を蒸します。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "が蒸し上がった！");
        }, 30000);
    });
}
