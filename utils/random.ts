/**
 * Gerar de forma aleatória números inteiros
 */
 export function randomInt(length: number, characters?: string): string {
    let result = '';
    if (!characters) characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function randomDate(date1:  any, date2: any){
    function randomValueBetween(min: any, max: any) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

    }
}

/**
 * Gerar de forma aleatória uma String
 */
export function randomString(length: number, characters?: string): string {
    let result = '';
    if (!characters) characters = 'ABCDEGHILMNOPRSTUVabcdeghilmnoprstuv';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
