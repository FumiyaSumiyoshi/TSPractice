export const arrangement = (ingredient: string): Promise<number> => {
    return new Promise((resolve) => {
        console.log("盛り付けをします。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "の完成！");
        }, 5000);
    });
}