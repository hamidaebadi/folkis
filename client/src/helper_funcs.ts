export const range = (size: number, startAt:number, reverse=false) => {
    const range_nums = [];
    let year = startAt;
    for(let i = 0; i <= size; i++){
        reverse ? year -= 1 : year += 1
        range_nums.push(year)
    }
    return range_nums;
}