
  export function GetDateBirth(age: number){
    const today = new Date();
    const todayYear = today.getFullYear();
    const birthdate = {
    day : Math.floor(Math.random() * 28) + 1,
    month : Math.floor(Math.random() * 12) +1,   
    year: todayYear - age ,
    }
    let birthdata = birthdate.day +'-'+ birthdate.month +'-'+ birthdate.year
    
    return {birthdata}

}


export function GetTodayDate(){
  const today = new Date();
    
    const todaydate = {
    day : today.getDate(),
    month : today.getMonth(),
    time: today.getTime(),
    year: today.getFullYear(),
    }
    let todayDateAndTime = todaydate.day +'-'+ todaydate.month +'-'+ todaydate.year +'-'+ todaydate.time
  return {todayDateAndTime}

}

export function DatumVanVandaag(){
  const today = new Date();
    
    const todaydate = {
    day : today.getDate(),
    month : today.getMonth(),
    time: today.getTime(),
    year: today.getFullYear(),
    }
    let datumVanVandaag = todaydate.day +'-'+ todaydate.month +1 +'-'+ todaydate.year
  return {datumVanVandaag}
}

export function Datum_in_het_verleden(){
  const today = new Date();
    
    const todaydate = {
    day : today.getDate(),
    month : today.getMonth(),
    time: today.getTime(),
    year: today.getFullYear(),
    }
    let datum_in_het_verleden = todaydate.day +'-'+ todaydate.month +'-'+ todaydate.year
  return {datum_in_het_verleden}

}

export function GetDateOfDeath(){
    const today = new Date();
    const todayYear = today.getFullYear();
    const dayOfDead = {
    day : Math.floor(Math.random() * 28) + 1,
    month : Math.floor(Math.random() * 12) +1,   
    }
    let dayOfDeath = dayOfDead.day +'-'+ dayOfDead.month +'-'+ (todayYear - (Math.floor(Math.random() * 5) +1));
    return {dayOfDeath}

}

export function DatumVanMorgen(){
  const today = new Date();
    
    const tomorrowDate = {
    day : (today.getDate()) + 1,    
    month : (today.getMonth()) +1,   
    time: today.getTime(),
    year: today.getFullYear(),
    }
    let datumVanMorgen = tomorrowDate.day +'-'+ tomorrowDate.month +'-'+ tomorrowDate.year
  return {datumVanMorgen}
}