var data = {
    'name': 'Yogendra Singh',
    Contact: '9549896402',
    Address: 'nagaur',
    friends:['Yuvraj Singh','Bhanu Pratap','Gopal Singh','Fath Singh'],
    family: [
        father = {

            'name': 'Megh Singh',
            Contact: ': 9879879879',
            'ocupation': 'showroom',
            friends:["Uttam Singh","Govind Kadwa"]

        },
        Mother = {

            'name': 'Suman Kanwar',
            Contact: ': 6549876549',
            'ocupation': 'houseWife'

        },
        sister = {

            name: 'Salani',
            Contact: ': 6549876542',
            ocupation: 'Student'

        },

        grandFather = {
            'name': 'let captain Balwant Singh Rathore',
            Contact: ': 9828979835',
            'hobby': 'smajsevak'
        },

        grandmother = {
            'name': 'Anop Kanwar',
            Contact: ': 9828979835'
        },

        uncle = {
            'name': 'Karan Singh',
            'ocupation': 'EX-ARMY',
            Contact: ': 9828979835'
        },
        uncle = {
            'name': 'Suresh Kanwar',
            'ocupation': 'House-Wife',
            Contact: ': 9828979835'
        },

        siblins_brother = {
            'name': 'Raghuveer Singh',
            Contact: ': 9828979835',
            'ocupation': 'Student'
        },
        siblins_sister = {
            'name': 'Anushika Rathore',
            Contact: ': 9828979835',
            'ocupation': 'Student'
        },


    ]

    //   Contact = [
    //     grandFather = {
    //         'name': 'let captain Balwant Singh',
    //         'surname': 'Rathore',
    //         Contact: '9828979835',
    //         'hobby': 'smajsevak'
    //     },

    //     grandmother = {
    //         'name': 'Anop',
    //         'surname': 'Kanwar'
    //     },

    //     uncle = {
    //         'name': 'Karan',
    //         'surName': 'Singh',
    //         'ocupation': 'EX-ARMY',
    //     },

    //     siblins = {
    //         'name': 'Raghuveer',
    //         'surName': 'Singh',
    //         'ocupation': 'Student'
    //     }
    // ]

}

console.log("Name is "+data.name);
console.log(data.name+" has "+data.friends.length+" friends.");
// console.log(data.family[0]);
// console.log(data.family[1]);
// console.log(data.family[2]);
console.log(data.name + '`s Father name is ' + data.family[0].name+".");
console.log(data.family[0].name+" has "+data.family[0].friends.length+" friends.");
console.log(data.name + '`s Mother name is ' + data.family[1].name+".");
console.log(data.name + '`s Sister name is ' + data.family[2].name+".");
console.log("There are totle "+(data.family.length + 1 )+" members in Yogendra`s famaly.");
console.log("Information about family member`s :");
for (var i = 0; i < data.family.length; i++) {
    console.log(data.family[i].name + ' and thair Contect Numbar is ' + data.family[i].Contact);
}
console.log(data.name+" and their Contect number is : "+data.Contact);
data.friends.forEach(element => {
    console.log(element);
});