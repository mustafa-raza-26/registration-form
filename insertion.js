let courseAdd = document.getElementById('courseAdd')
let showCourse = document.getElementById('course')
let courseBtn = document.getElementById('cBtn')

if (courseBtn) {
courseBtn.addEventListener('click', async () => {
  console.log(courseAdd.value);
  const { error } = await client
  .from('course')
  .insert({ courseName : courseAdd.value })
  if (error) {
    console.log(error);
  }
})
}

render();
async function render() {
  const { data, error } = await client
  .from('course')
  .select("*")

  if (data) {
    data.forEach(element => {
      showCourse.innerHTML += `
        <option value="${element.courseName}">${element.courseName}</option>
      `
    });
  }
}