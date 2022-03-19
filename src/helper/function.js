export const persentCalc = (min , max , now)=>{
    const difference = max - min;
    const difftoNow = now - min;
    const result = (difftoNow * 100)/ difference


    return result
}

export const calculator = (input , output , number) => {
    const result = (parseFloat(input) * parseFloat(number)) / parseFloat(output);
    return result.toFixed(5)
}