

var office =[{
    name :"suresh",
    age: 20 ,
    depart : "Junior QA anlayst"

},
{
    name11 :"Ashwin",
    age22 : 22,
    depart33 : " senior QA anlayst"
    
    },
    {
        name1 :"suresh",
        age2 : 20,
        depart3 : "Manager QA"
        
        }]

        //full database
        console.log("Office full data");
        
        console.log(office)

// 2nd data replace nd update
        console.log("replace the 2nd data");
        //console.log(office[2].name="anitha")
        office[2].name="anitha",
        office[2].age=26

        console.log(office);
        
        // separate the keys nd value from the database

        let def = Object.keys(office[1])
        let def2 =Object.values(office[1])
        console.log(def);
        console.log(def2);
        