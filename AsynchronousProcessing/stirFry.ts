export const stirFry = (...ingredient: string[]): Promise<number> => {
    return new Promise((resolve) => {
        console.log(ingredient + "を炒めます。");
        setTimeout(() => {
            resolve(1);
            console.log(ingredient + "が炒め終わった！");
        }, 3000);
    });
}