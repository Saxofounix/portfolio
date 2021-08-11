const jobs = [
    {
        id: 'metro',
        company: 'Metro Cash & Carry',
        title: 'Delivery Coordinator',
        location: 'Bratislava, Slovakia',
        description: `In  this  role  I  was  responsible  for  coordinating  deliveries  of  goods  within  the  borders  of  Slovak 
        Republic  and  communicating  with  other  departments  and  clients.  Clear,  precise  but  short  and 
        detailed  communication  was  essential  in  this  role.  Apart  from  gaining  valuable  experience  in 
        communication, I also learned how to efficiently work with time, deal with complex situations and 
        prioritize. `
    },
    {
        id: 'shoebox',
        company: 'ShoeBox',
        title: 'Shop Assistant',
        location: 'Brno, Czech Republic',
        description: `As an online sales trainee I was introduced to various sales techniques which I used when dealing 
        with  clients either  online or  in  person. My  main  responsibilities  were  providing each  client with 
        offerings that would match their expectations, conducting property viewings on request, 
        marketing company’s services using social media, and meeting sales goals. Other than gaining 
        valuable  experience  in  interacting  with  clients,  I  have  gained  proficiency  in  tools  like  MS  Excel, 
        Google analytics, and Facebook ads manager.  `
    },
    {
        id: 'ell',
        company: 'Erasmus Life Lisboa',
        title: 'Online sales trainee',
        location: 'Lisbon, Portugal',
        description: `As a shop assistant working for Shoebox, I experienced a lot of contact with costumers on a daily 
        basis. Apart from keeping the outlet organized and aiding the costumers, I was also responsible for 
        processing payments and warranty claims. I do believe that the most valuable lessons I took from 
        this  job was  dealing with  costumers  of  all tempers,  gaining  sense  of  responsibility,  and  learning 
        how to manage multiple situations simultaneously.`
    },
    {
        id: 'emm',
        company: 'Elite Model Management',
        title: 'Fashion model',
        location: 'Bratislava, Slovakia',
        description: `In  this  role  I  was  contracted  to  take  part  in  photoshoots  for  various  brands  and  attend  fashion 
        shows. Even though I realized this is not a career for me, I have still benefited from this work in 
        terms of experience and skills. Focus and concentration on the task throughout extended periods 
        of time as well as mastering the art of presentation were essential to this job. `
    },
]

const education = [
    {
        id: 'ib',
        name: 'Porto Accounting and Business School',
        degree: 'Master of Science',
        location: 'Porto, Portugal',
        description: 'Undergoing an Erasmus+ program in A Coruna, Spain, in Economics and actively working on research regarding corruption'
    },
    {
        id: 'em',
        name: 'Newton University',
        degree: 'Bachelor of Arts',
        location: 'Brno, Czech Republic',
        description: 'Undergone an Erasmus+ program in Business administration in Limassol, Cyprus and did an internship as a digital sales trainee in Lisbon, Portugal.'
    },
    {
        id: 'ba',
        name: 'CDA College',
        degree: 'Bachelor of Arts (Student Exchange)',
        location: 'Limassol, Cyprus',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sapiente. Autem eligendi, obcaecati expedita, possimus beatae amet necessitatibus quidem maiores aperiam deleniti adipisci nulla dignissimos!'
    }]

const leftExperience = document.querySelector('.experience-left');
const leftEducation = document.querySelector('.education-left');
const rightExperience = document.querySelector('.experience-right');
const btn = document.querySelectorAll('.experience-btn')
const btnEd = document.querySelectorAll('.education-btn')


window.addEventListener('DOMContentLoaded', function () {
    chooseExperience();
    chooseEducation();

    window.addEventListener('scroll', function(){
        if (window.scrollY > 100){
            
        }
    })
})

function displayExperience(experienceItem) {
    let display = experienceItem.map(function (item) {
        return `<h2>${item.company}</h2>
        <h4>${item.title}</h4>
        <h6> ${item.location}</h6>
        <p>${item.description}</p>`
    })
    display = display.join('');
    leftExperience.innerHTML = display;
}
function displayEducation(experienceItem) {
    let display = experienceItem.map(function (item) {
        return `<h2>${item.name}</h2>
        <h4>${item.degree}</h4>
        <h6> ${item.location}</h6>
        <p>${item.description}</p>`
    })
    display = display.join('');
    leftEducation.innerHTML = display;
}

function chooseExperience() {
    btn.forEach(function (e) {
        e.addEventListener('click', function (item) {
            let currentItem = item.currentTarget.dataset.id;
            let experience = jobs.filter(function (item) {
                if (item.id === currentItem) {
                    return item;
                }
            })
            displayExperience(experience);
        })
    })
}
function chooseEducation() {
    btnEd.forEach(function (e) {
        e.addEventListener('click', function (item) {
            let currentItem = item.currentTarget.dataset.id;
            let educationItems = education.filter(function (item) {
                if (item.id === currentItem) {
                    return item;
                }
            })
            displayEducation(educationItems)
        })
    })
} chooseEducation();