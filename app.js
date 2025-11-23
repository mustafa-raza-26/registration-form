const supabaseURL = 'https://awymejxeeylofpcjuuug.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3eW1lanhlZXlsb2ZwY2p1dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDYxMzcsImV4cCI6MjA3ODYyMjEzN30.BpaYEB1T9CWb44anT0m3J5JbX4VpvsYC4juI4-b_1ic';
const client = supabase.createClient(supabaseURL , supabaseKey);

let userName = document.getElementById('userName');
let fatherName = document.getElementById('fatherName');
let email = document.getElementById('email');
let number = document.getElementById('number');
let cnic = document.getElementById('cnic');
let dob = document.getElementById('dob');
let qualification = document.getElementById('qualification');
let course = document.getElementById('course');
let address = document.getElementById('address');
let submit = document.getElementById('submit');

if (submit) {
submit.addEventListener('click', async ()=> {
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "Not Selected";

    if (
        userName.value.trim() === "" ||
        fatherName.value.trim() === "" ||
        email.value.trim() === "" ||
        number.value.trim() === "" ||
        cnic.value.trim() === "" ||
        dob.value.trim() === "" ||
        qualification.value.trim() === "" ||
        course.value.trim() === "" ||
        address.value.trim() === "" ||
        gender === ""
    ){
        alert("Please fill all fields before submitting!");
        return
    }

    const { data, error } = await client
    .from('Form')
    .insert({
        user_name : userName.value,
        father_name : fatherName.value,
        email : email.value,
        number : number.value,
        cnic : cnic.value,
        d_o_b : dob.value,
        gender : gender,
        course : course.value,
        qualification : qualification.value,
        address : address.value
    })
    .select()

    if (error) {
        alert('error' + error.message)
        return
    }

     alert("Form Submitted Successfully!");

    document.querySelectorAll("input").forEach(inp => inp.value = "");
    document.querySelectorAll("select").forEach(sel => sel.value = "");
    address.value = "";
})
}