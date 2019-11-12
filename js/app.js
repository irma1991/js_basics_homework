"use strict"

let knyguSarasas =
[
    {
        'Istorija':[
            {
                ISBN: '9786098120462',
                Metai: '2013',
                Pavadinimas: 'Karalienės Bonos virtuvė',
                Puslapiai: '220'
            }
            ,
            {
                ISBN: '9771392155005',
                Metai: '2018',
                Pavadinimas: 'Kultūros paminklai 23',
                Puslapiai: '208'
            }
            ,
            {
                ISBN: '9786094674044',
                Metai: '2019',
                Pavadinimas: 'Lietuvos kultūros istorija',
                Puslapiai: '356'
            }

        ]
    },
    {
        'Fantastika': [
            {
                ISBN: '9786094273902',
                Metai: '2019',
                Pavadinimas: 'Amžinybės fjordo pranašai',
                Puslapiai: '496'
            }
            ,
            {
                ISBN: '9786094273872',
                Metai: '2019',
                Pavadinimas: 'Fondas ir imperija',
                Puslapiai: '328'
            }
            ,
            {
                ISBN: '9789955138303',
                Metai: '2018',
                Pavadinimas: 'Sulaikyti žvaigždes',
                Puslapiai: '336'
            }
            ,
            {
                ISBN: '9786090135631',
                Metai: '2009',
                Pavadinimas: 'Smėlis',
                Puslapiai: '336'
            }
            ,
            {
                ISBN: '9786090135630',
                Metai: '2019',
                Pavadinimas: 'Žiema',
                Puslapiai: '336'
            }
        ]

    },
    {   
        'Detektyvai': [
            {
                ISBN: '9786090138823',
                Metai:'2013' ,
                Pavadinimas: 'Avarinis nusileidimas',
                Puslapiai: '464'
            }
            ,
            {
                ISBN: '9789955138556',
                Metai: '2017',
                Pavadinimas: 'Gimę nusikalsti',
                Puslapiai: '480'
            }
            ,
            {
                ISBN: '9789955267065',
                Metai: '2018',
                Pavadinimas: 'Gęstanti šviesa',
                Puslapiai: '408'
            }
            ,
            {
                ISBN: '9786094443046',
                Metai: '2012',
                Pavadinimas: 'Diena, kai įvyko nelaimė',
                Puslapiai: '320'
            }
            ,            {
                ISBN: '9786094443096',
                Metai: '2019',
                Pavadinimas: 'Mano laimė',
                Puslapiai: '320'
            }
            ,
                        {
                ISBN: '9786094443088',
                Metai: '2012',
                Pavadinimas: 'Pavasaris',
                Puslapiai: '320'
            }
        ]
    }
]

for (let knyguKategorija of knyguSarasas) // prieinam prie knygu kategorijos
{
        for (let knygos in knyguKategorija)
        {
            console.log( "Knygu kategorija: " + knygos + " (" + knyguKategorija[knygos].length + " knygos)")// prieinam prie atskiros knygos

                for (let knyga in knygos)
                {   console.log(" ")
                    for (let knygosInfo in knyguKategorija[knygos][knyga])
                    {
                        if(knygosInfo != 'Metai')
                        {
                            console.log(knygosInfo+ ' : ' + knyguKategorija[knygos][knyga][knygosInfo])
                        }
                        if(knygosInfo == 'Metai')
                        {
                            let condition = knyguKategorija[knygos][knyga][knygosInfo] == '2019' ? ' (nauja knyga)' : ''
                            console.log(knygosInfo + ' : ' + knyguKategorija[knygos][knyga][knygosInfo]+condition)
                        }

                    }
                }
        }
}

                        // for (let kategorija in knyguSarasas)
                        // {
                        //     for (let i=0; i<knyguSarasas[kategorija].length; i++)
                        //     {
                        //         if(knyguSarasas[kategorija][i]['Metai']==2018)
                        //         {
                        //             console.log("Kategorija: " + kategorija + " (" + knygos[kategorija].length + ") ");
                        //             for(let savybe in knygos[kategorija][i])
                        //             {
                        //                 console.log(vertimai[savybe] + ": " + knygos[kategorija][i][savybe]);
                        //             }
                        //             console.log("/n");
                        //         }
                        //     }
                        // }

                        // for (let kategorija in knygos)
                        // {
                        //     for (let i=0; i<knygos[kategorija].length; i++)
                        //     {
                        //         if(knygos[kategorija][i]['year']==2018)
                        //         {
                        //             console.log("Kategorija: " + kategorija + " (" + knygos[kategorija].length + ") ");
                        //             for(let savybe in knygos[kategorija][i])
                        //             {
                        //                 console.log(vertimai[savybe] + ": " + knygos[kategorija][i][savybe]);
                        //             }
                        //             console.log("/n");
                        //         }
                        //     }
                        // }
