export  const shuffleArray = (valueBreak: number, result: number | string) => {
    let count = 0
    let arr = [result]
    while(count < 2){
        const value = Math.floor(Math.random() * valueBreak)
        if(!arr.includes(value)) {
            arr.push(value)
            count += 1   
      }
    }
    return arr.sort(()=> Math.random() - 0.5)
}


export const generateExpretion = () => {
    const signal = ['-', '+', '*', '/']
    const index = Math.floor(Math.random() * 4)
    const value1 = Math.floor(Math.random() * (11 - 1) + 1)
    const value2 = Math.floor(Math.random() * (11 - 1) + 1)
    const expretion = `${value1} ${signal[index]} ${value2}`
    return expretion;
}
