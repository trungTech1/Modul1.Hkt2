let studentBase = [
  {
    id: "Student_JV231130" + Math.ceil(date.now() * Math.random()),
    Name: "trung",
    phoneNumber: "0981897149",
    sex: true,
  },
  {
    id: "Student_JV231130" + Math.ceil(date.now() * Math.random()),
    Name: "thien",
    phoneNumber: "0981897159",
    sex: false,
  },
];
if (!localStorage.getItem(student))
  localStorage.getItem("student", JSON.stringify(studentBase));
function prinDatadom(student) {
  let studentManagerTableBodyEL = document.querySelector(
    ".studentManagerTableBody"
  );
}
