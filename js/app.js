"use strict"

let knyguSarasas =
[
    {
        'istorija':[
            {
                ISBN: '9786098120462',
                leidimoMetai: '2013',
                pavadinimas: 'Karalienės Bonos virtuvė',
                puslapiuSkaicius: '220'
            }
            ,
            {
                ISBN: '9771392155005',
                leidimoMetai: '2010',
                pavadinimas: 'Kultūros paminklai 23',
                puslapiuSkaicius: '208'
            }
            ,
            {
                ISBN: '9786094674044',
                leidimoMetai: '2019',
                pavadinimas: 'Lietuvos kultūros istorija',
                puslapiuSkaicius: '356'
            }
            ,
            {
                ISBN: '9786094664373',
                leidimoMetai: '2015',
                pavadinimas: 'Kai Kaunas buvo Kaunas',
                puslapiuSkaicius: '200'
            }
        ]
    },
    {
        'fantastika': [
            {
                ISBN: '9786094273902',
                leidimoMetai: '2019',
                pavadinimas: 'Amžinybės fjordo pranašai',
                puslapiuSkaicius: '496'
            }
            ,
            {
                ISBN: '9786094273872',
                leidimoMetai: '2019',
                pavadinimas: 'Fondas ir imperija',
                puslapiuSkaicius: '328'
            }
            ,
            {
                ISBN: '9789955138303',
                leidimoMetai: '2014',
                pavadinimas: 'Sulaikyti žvaigždes',
                puslapiuSkaicius: '336'
            }
            ,
            {
                ISBN: '9786090135631',
                leidimoMetai: '2009',
                pavadinimas: 'Smėlis',
                puslapiuSkaicius: '336'
            }
        ]

    },
    {   
        'detektyvai': [
            {
                ISBN: '9786090138823',
                leidimoMetai:'2013' ,
                pavadinimas: 'Avarinis nusileidimas',
                puslapiuSkaicius: '464'
            }
            ,
            {
                ISBN: '9789955138556',
                leidimoMetai: '2017',
                pavadinimas: 'Gimę nusikalsti',
                puslapiuSkaicius: '480'
            }
            ,
            {
                ISBN: '9789955267065',
                leidimoMetai: '2019',
                pavadinimas: 'Gęstanti šviesa',
                puslapiuSkaicius: '408'
            }
            ,
            {
                ISBN: '9786094443046',
                leidimoMetai: '2012',
                pavadinimas: 'Diena, kai įvyko nelaimė',
                puslapiuSkaicius: '320'
            }
        ]
    }
]


for (let knyguKategorija of knyguSarasas)
{
  console.log( knyguKategorija ); // prieinam prie knygu kategorijos
        for (let knyga in knyguKategorija)
        {
            console.log( knyga ); // prieinam prie atskiros knygos
        }
}
