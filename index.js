
/*----------------Email form validation-------------------*/
window.onload = () => {

    document.getElementById('signin').addEventListener('click', (e) => {
        e.preventDefault();
        let name = document.getElementById('userName').value;
        let email = document.getElementById('email').value;
        re_name = /[a-zA-Z_\s\-]{3,32}/
        re_email = /([a-zA-Z_\.\-\d]+)@([a-zA-Z_\.\-\d]+)\.([a-zA-Z]{2,10})/

        if ((!re_name.test(name)) || (!re_email.test(email))) {
            alert('wrong data try again')
            location.onload();
        }
        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist";

        const data = {
            "userName": name,
            "email": email
        };

        console.table(data);

        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 400) {
                    throw ' The data sent to the server is not correct';
                } else {
                    throw "The input is wrong";
                }
            })
            .then(obj => {
                document.getElementById("pp").innerHTML = obj.data.name + ' data  added to the server'
            })
            .catch(err => {
                document.getElementById("pp").innerHTML = err
            })
    })
}

/*The below code is for the top navbar */
const buttonTG= document.getElementsByClassName('buttonTG')[0]
const TopNavBar= document.getElementsByClassName('TopNavBar')[0]

buttonTG.addEventListener('click', ()=> {
 TopNavBar.classList.toggle('active')
} )

