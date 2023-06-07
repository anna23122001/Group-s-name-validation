'use strict'
const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'FU2022-333',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
    ];

function checkArr(arr){
    let reg = /^(FD|FM|FE)|(fd|fm|fe)20\d{2}(-\d+)?$/g;
   
    for(let i = 0; i < arr.length; i++){
        const groupName = arrGroups[i];

        if(reg.test(groupName)){
            console.log(arrGroups[i], 'Success');
        }else{
            console.log(arrGroups[i], 'Error')
        }
    }
}

checkArr(arrGroups)