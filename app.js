const supabaseURL = 'https://awymejxeeylofpcjuuug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3eW1lanhlZXlsb2ZwY2p1dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDYxMzcsImV4cCI6MjA3ODYyMjEzN30.BpaYEB1T9CWb44anT0m3J5JbX4VpvsYC4juI4-b_1ic';
const client = supabase.createClient(supabaseURL , supabaseKey)
console.log(client);


let userName = document.getElementById('userName');
let fatherName = document.getElementById('fatherName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let dob = document.getElementById('dob');
let qualification = document.getElementById('qualification');
let course = document.getElementById('course');
let address = document.getElementById('address');
let submit = document.getElementById('submit');


submit.addEventListener('click', async (e)=> {
    e.preventDefault()

    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "Not Selected";
    console.log(gender);
    
    const { data, error } = await client
    .from('Form')
    .insert({
        user_name : userName.value,
        father_name : fatherName.value,
        email : email.value,
        number : number.value,
        d_o_b : dob.value,
        gender : gender,
        course : course.value,
        qualification : qualification.value,
        address : address.value
    })
    .select()

    if (error) {
        alert('error' + error.message)
    }
})