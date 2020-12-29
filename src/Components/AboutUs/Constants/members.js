export const leadership = [
    {
        name: 'Roshan Kumaraswamy',
        img:  null,
        role: 'President',
    },
    {
        name: 'Matt Hashimoto',
        img:  null,
        role: 'Vice President',
    },
    {
        name: 'Shaylan Dias',
        img:  null,
        role: 'Technology Director',
    },
    {
        name: 'Vaibhav Gattani',
        img:  null,
        role: 'Technology Director',
    },
    {
        name: 'Susan Chen',
        img:  null,
        role: 'Education Director',
        // repeat: '2',
    },
    {
        name: 'Ali Matsumoto',
        img:  null,
        role: 'Education Director',
    },
    {
        name: 'Amy Huang',
        img:  null,
        role: 'Web Director',
    },
    {
        name: 'Jennifer Xiao',
        img:  null,
        role: 'Media Director',
        repeat: '2',

    },
    {
        name: 'Anthony Zhou',
        img:  null,
        role: 'Social Director',
    },
]

export const projectLeaders = [
    {
        name: 'Andrew Wang',
        img:  null,
        role: 'Project Manager',
    },
    {
        name: 'Anna Young',
        img:  null,
        role: 'Project Manager',
    },
    {
        name: 'Kaavya Shah',
        img:  null,
        role: 'Project Manager',
    },
    {
        name: 'Aarushi Karandikar',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Ali Matsumoto',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Daniel Tseng',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Ethan Chen',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Grace Altree',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Jasper Chen',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Jennifer Buja',
        img:  null,
        role: 'Project Leader',
        repeat: '1',
    },
    {
        name: 'John Um',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Krishna Ravi',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Shaylan Dias',
        img:  null,
        role: 'Project Leader',
    },
    {
        name: 'Vidhi Chander',
        img:  null,
        role: 'Project Leader',
    },

]

const a = [
    {
        name: 'Anthony Zhou',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Nitzan Orr',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Saketh Kollu',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Emily Wang',
        img:  null,
        role: 'Active Member',
        repeat: '2',
    },
    {
        name: 'Stella Lu',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'CJ Manna',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Ashley Chu',
        img:  null,
        role: 'Active Member',
        repeat: '2',
    },
    {
        name: 'Ahmed Baqai',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Kamille Fernando',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Roger Zhang',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Charlize Dang',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Kyra Wong',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Pranav Pomalapally',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Taylor Yoo',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Mantej Panesar',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Varun Murthy',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Adithya Seshan',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Dustin Luong',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Clark Wang',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Jun Hee Han',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Angela Jiang',
        img:  null,
        role: 'Active Member',
        repeat: '1',
    },
    {
        name: 'Satiya Kem',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Cindy Zhang',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Ada Hu',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Kristie Lin',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Amy Huang',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Michelle Lin',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Bridget Cheng',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'David Paner',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Eric Peng',
        img:  null,
        role: 'Active Member',
    },
    {
        name: 'Emily Wang',
        img:  null,
        role: 'Active Member',
        repeat: '1',
    } ];

function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

const insertImg = (persons) => {
    for(let i = 0; i < persons.length; i++) {
        var obj = persons[i];
        const first = obj.name.split(" ")[0].toLowerCase() + (obj.hasOwnProperty('repeat') ? obj.repeat : '')
        console.log(first);
        try {
            obj.img = require('./images/' + 'people/' + first + '.jpg');
        } catch {
            obj.img = require('./images/people/default.jpg');
        }
    }
}

a.sort(compare);
insertImg(leadership);
insertImg(projectLeaders);
insertImg(a);
export const actives = a;
