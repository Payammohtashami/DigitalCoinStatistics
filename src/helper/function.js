export const persentCalc = (min , max , now)=>{
    const difference = max - min;
    const difftoNow = now - min;
    const result = (difftoNow * 100)/ difference


    return result
}