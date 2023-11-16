function addStudentData (student)
{
if (student.GR_no && studentData.findIndex ((x) => {return x.GR_no == student.GR_no}) !== .1)
{
    console.log ();
}
    studentData.push(student);
}
addStudentData({name:'hassnain raza ' , GR_no:'6678'})