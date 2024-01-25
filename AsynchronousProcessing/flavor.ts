export const flavor = (ingredient: string): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "で味付けをします。");
        setTimeout(() => {
            resolve(1);
            console.log("美味しく仕上がった！");
        }, 5000);
    });
}