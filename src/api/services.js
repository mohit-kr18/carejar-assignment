
const services = [
    {
        id:1,
        image:"https://cdn.openviowebsites.com/source/sites/43f21731-8407-4dad-a368-390fa9089665/images/dental-clinic.png",
        serviceType:"Dentistry",
        type: "dentist",
        description:"Teething troubles? schedule a dental checkup ",
        doctors:[
            {
              
                name:"Dr. Ujjiwal Mehrotra",
                img:"https://images1-fabric.practo.com/doctor/894428/dr-anirudh-kadiyala-5fccbd49dbc4e.jpg",
                specialist:"Dentist",
                experience:"10 years experience overall",
                location:"Dalanwala, Dehradun . Face Mile Dentofacial Clinic",
                fee:"₹ 200 Consultation at clinic",
                
            },
            {
                
                name:"Dr. Mehak Aggarwal",
                img:"https://www.kauveryhospital.com/doctorimage/recent/Dr-C-Kasthuri2020-07-30%2006:32:41am.jpg",
                specialist:"Dentist",
                experience:"15 years experience overall",
                location:"Cannaught Place,Dehradun  . Dr. Mehak's Dental Clinic",
                fee:"₹ 300 Consultation at clinic",
            },
            
        ]
    },
    {
        id:2,
        image:"https://vatsalyawomenshospital.in/wp-content/uploads/2022/06/Blog-3.jpeg",
        serviceType:"Gynecologist/Obstetrician",
        type:"gynecologist",
        description:"Explore for women's health, pregnancy, and infertility treatments",
        doctors:[
            {
               
                name:"Dr. Sarita Gulati",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy62U6nBavVW-7K0jx-V6W-AejCVbra2PHJA&usqp=CAU",
                specialist:"Gynecologist",
                experience:"12 years experience overall",
                location:"Thane,Mumbai . Face Mile Gynecologist Clinic",
                fee:"₹ 500 Consultation at clinic",
                
            },
            {
                
                name:"Dr. Manjri Arora",
                img:"https://www.ameyaclinic.in/images/displayimage/44e6e08ba18b7194f170341b2f8dcb4bb72665375d8dacb498c50.jpeg?type=d",
                specialist:"Gynecologist",
                experience:"20 years experience overall",
                location:"Cannaught Place, Delhi  . Dr. Manjri's  Clinic",
                fee:"₹ 400 Consultation at clinic",
            },
            
        ]
    },
    {
        id:3,
        image:"https://youaligned.com/wp-content/uploads/2022/07/nutritionist-dietitian.jpg",
        serviceType:"Dietitian/Nutrition",
        type: "dietitian",
        description:"Get guidance on eating right, weight management and sports nutrition",
        doctors:[
            {
                
                name:"Dr. Priyanka Mehta",
                img:"https://cdn.askapollo.com/live/images/doctors/nutrition-and-dietetics/dr-kiranmayi-addu-nutrition-and-dietetics-in-hyderabad.png",
                specialist:"Dietitian",
                experience:"14 years experience overall",
                location:"Patna, Bihar . Dr. Priyanka's Nutrition Clinic ",
                fee:"₹ 300 Consultation at clinic",
                
            },
            {
               
                name:"Dr. Meyank Singh",
                img:"https://images.onlymyhealth.com/imported/images/2021/July/08_Jul_2021/dr%20nitin.jpg",
                specialist:"Dietitian",
                experience:"10 years experience overall",
                location:"Ranchi,Jharkhand  . Dr. Mayank's Nutrition Clinic",
                fee:"₹ 700 Consultation at clinic",
            },
            
        ]
    },
    {
        id:4,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--3ztCtDmjGznRo8aocFDs7k9MtKdjmz7NQ&usqp=CAU",
        serviceType:"Cardiologist",
        type : "cardiologist",
        description:"A cardiologist is a medical specialist who deals with heart and circulatory system disorders. ",
        doctors:[
            {
               
                name:"Dr. Anuj Kadiyala",
                img:"https://www.kauveryhospital.com/doctorimage/recent/Dr.-Maniram2022-01-06-01:06:24pm.jpg",
                specialist:"Cardiologist",
                experience:"10 years experience overall",
                location:"Dalanwala, Dehradun . Face Mile  Clinic",
                fee:"₹ 500 Consultation at clinic",
                
            },
            {
                
                name:"Dr. Piyush Chaudhary",
                img:"https://www.kauveryhospital.com/doctorimage/recent/Dr-suraj2020-02-03%2008:42:36am.jpg",
                specialist:"Cardiologist",
                experience:"15 years experience overall",
                location:"Ghaziabad,Uttar Pradesh . Dr. Piyush's Cardiologist Clinic",
                fee:"₹ 800 Consultation at clinic",
            },
            
        ]
    },
    {
        id:5,
        image:"https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1579950895.jpg",
        serviceType:"Diagnostic",
        type:"diagnostic",
        description: "Get accurate and reliable diagnostic tests for various health conditions.",
        doctors:[
            {
               
                name:"Dr. Vanshika Bhatia",
                img:"https://www.tesladiagnostics.com/assets/images/new/tesla-home-1.png",
                specialist:"Diagnostic",
                experience:"8 years experience overall",
                location:"Gurugram, Haryana . Face Mile Diagnostic  Clinic",
                fee:"₹ 200 Consultation at clinic",
                
            },
            {
                
                name:"Dr. Ankush Lallohtra",
                img:"https://images1-fabric.practo.com/doctor/607744/dr-i-r-ravish-601af47ae9b4e.png?i_type=t_70x70",
                specialist:"Diagnostic",
                experience:"15 years experience overall",
                location:"Ludhiana,Punjab . Dr. Ankush's Diagnostic Clinic",
                fee:"₹ 500 Consultation at clinic",
            },
            
        ]
    },
    {
        id:6,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-Uqp_9HjK6Y4o_veJeuMMAK7Xgoa0IqPMg&usqp=CAU",
        serviceType:"Dermatologist/Cosmetologist",
        type:"dermatologist",
        description:" Get treatment for skin and hair problems, and cosmetic procedures.",
        doctors:[
            {
               
                name:"Dr. Anshika Tyagi",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShN2ODyH2WFmJ9r0x_IqDtUGQ1IU15KjctOkBgslT-DlMbR_2fhvwZY17hKN3S4gXyyoA&usqp=CAU",
                specialist:"Dermatologist",
                experience:"6 years experience overall",
                location:"Jalandhar, Punjab . Face Mile Dermatologist Clinic",
                fee:"₹ 300 Consultation at clinic",
                
            },
            {
                
                name:"Dr. Tanisha Gupta",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo9e08V9DmVmLyzOgSxmaDi1k3IcObaj9ioaqEIxpRDzZmRWUkqhkRUw0a4hvQAcSW8I&usqp=CAU",
                specialist:"Dermatologist",
                experience:"10 years experience overall",
                location:"Cannaught Place,Dehradun  . Dr. Tanisha's Clinic",
                fee:"₹ 500 Consultation at clinic",
            },
            
        ]
    }
]

export const getServices = async() =>{
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve(services)
        },1000)
    });
}