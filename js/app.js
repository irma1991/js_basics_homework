"use strict"

let knyguSarasas =
[
    {
        'Istorija':[
            {
                ISBN: '9786098120462',
                Metai: '2013',
                Pavadinimas: 'Karalienės Bonos virtuvė',
                Puslapiai: '220',
                Kaina: '10.235'
            }
            ,
            {
                ISBN: '9771392155005',
                Metai: '2018',
                Pavadinimas: 'Kultūros paminklai 23',
                Puslapiai: '208',
                Kaina: '5.745'
            }
            ,
            {
                ISBN: '9786094674044',
                Metai: '2019',
                Pavadinimas: 'Lietuvos kultūros istorija',
                Puslapiai: '356',
                Kaina: '8.254'
            }

        ]
    },
    {
        'Fantastika': [
            {
                ISBN: '9786094273902',
                Metai: '2019',
                Pavadinimas: 'Amžinybės fjordo pranašai',
                Puslapiai: '496',
                Kaina: '18.347'
            }
            ,
            {
                ISBN: '9786094273872',
                Metai: '2019',
                Pavadinimas: 'Fondas ir imperija',
                Puslapiai: '328',
                Kaina: '7.247'
            }
            ,
            {
                ISBN: '9789955138303',
                Metai: '2018',
                Pavadinimas: 'Sulaikyti žvaigždes',
                Puslapiai: '336',
                Kaina: '9.254'
            }
            ,
            {
                ISBN: '9786090135631',
                Metai: '2009',
                Pavadinimas: 'Smėlis',
                Puslapiai: '336',
                Kaina: '18.417'
            }
            ,
            {
                ISBN: '9786090135630',
                Metai: '2019',
                Pavadinimas: 'Žiema',
                Puslapiai: '336',
                Kaina: '7.548'
            }
        ]

    },
    {   
        'Detektyvai': [
            {
                ISBN: '9786090138823',
                Metai:'2013' ,
                Pavadinimas: 'Avarinis nusileidimas',
                Puslapiai: '464',
                Kaina: '17.254'
            }
            ,
            {
                ISBN: '9789955138556',
                Metai: '2017',
                Pavadinimas: 'Gimę nusikalsti',
                Puslapiai: '480',
                Kaina: '9.254'
            }
            ,
            {
                ISBN: '9789955267065',
                Metai: '2018',
                Pavadinimas: 'Gęstanti šviesa',
                Puslapiai: '408',
                Kaina: '16.247'
            }
            ,
            {
                ISBN: '9786094443046',
                Metai: '2012',
                Pavadinimas: 'Diena, kai įvyko nelaimė',
                Puslapiai: '320',
                Kaina: '14.457'
            }
            ,
            {
                ISBN: '9786094443096',
                Metai: '2019',
                Pavadinimas: 'Mano laimė',
                Puslapiai: '320',
                Kaina: '5.247'
            }
            ,
            {
                ISBN: '9786094443088',
                Metai: '2012',
                Pavadinimas: 'Pavasaris',
                Puslapiai: '320',
                Kaina: '8.254'
            }
        ]
    }
]

for (let knyguKategorija of knyguSarasas) // prieinam prie knygu kategorijos
{
        for (let knygos in knyguKategorija)
        {
            for (let i = 0; i<knyguKategorija[knygos].length; i++)
            {
                if(knyguKategorija[knygos][i]['Kaina'])
                {
                    console.log("Kategorija: "+ knygos);
                    for (let savybe in knyguKategorija[knygos][i])
                    {
                        console.log(Math.max(savybe + ": " + knyguKategorija[knygos][i][savybe]));
                    }
                } 
            }
        }

// for (let knyguKategorija of knyguSarasas) // prieinam prie knygu kategorijos
// {
//         for (let knygos in knyguKategorija)
//         {
//             for (let i = 0; i<knyguKategorija[knygos].length; i++)
//             {
//                 if(knyguKategorija[knygos][i]['Metai']==2018)
//                 {
//                     console.log(" ")
//                     console.log("Kategorija: "+ knygos);
//                     for (let savybe in knyguKategorija[knygos][i])
//                     {
//                         console.log(savybe + ": " + knyguKategorija[knygos][i][savybe]);
//                     }
//                 } 
//             }
//         }

            // console.log( "Knygu kategorija: " + knygos + " (" + knyguKategorija[knygos].length + " knygos)")// prieinam prie atskiros knygos

            //     for (let knyga in knygos)
            //     { console.log(" ")
            //         for (let knygosInfo in knyguKategorija[knygos][knyga])
            //         {


            //             if(knygosInfo != 'Metai')
            //             {
            //                 console.log(knygosInfo+ ' : ' + knyguKategorija[knygos][knyga][knygosInfo])
            //             }
            //             if(knygosInfo == 'Metai')
            //             {
            //                 let condition = knyguKategorija[knygos][knyga][knygosInfo] == '2019'
            //                 console.log(knygosInfo + ' : ' + knyguKategorija[knygos][knyga][knygosInfo]+condition)
            //             }

            //         }
            //     }
        }