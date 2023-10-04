// const countries={
//     "india":{
//         "code1":"0091",
//         "code2":"+91"
//     },
//     "nepal":{
//         "code1":"00977",
//         "code2":"+977"
//     },
//     "bangladesh":{
//         "code1":"0090",
//         "code2":"+910"
//     },
// }

const countries={
    "india":"+91",
    "nepal":"+977",
    "bangladesh":"+90",
}

// console.log(countries)

const countrydropdown=document.getElementById("countrydropdown")

for(const countryName in countries)
{
    if(countries.hasOwnProperty(countryName))
    {
        const countryCode=countries[countryName];
        const option=document.createElement("option");
        option.value=countryCode;
        option.text=countryCode;
        countrydropdown.appendChild(option);
    }
}

for(const countryName in countries)
{
    if(countries.hasOwnProperty(countryName))
    {
        // const countryCode=countries[countryName];
        const option=document.createElement("option");
        option.value=countryName;
        option.text=countryName;
        countrydropdown.appendChild(option);
    }
}