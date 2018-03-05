function Person (id,name,surname){
    this.id = id;
    this.name = name;
    this.surname = surname;
}
Person.prototype.getData = function (){
    return this.name + " " + this.surname
}



var person = new Person (123,"Tamara","Milosavljevic")
console.log(person.getData());

function Employee (id,name,surname,salary,workid){
    Person.call(this,id,name,surname);
    this.salary = salary;
    this.workid = workid;
}
var employee = new Employee (12345,"ana","ilic",1000,213);
console.log(employee);


function Professor (name,surname,salary,id,officeNum,workid){
    Employee.call(this,name,surname,salary,id,workid);
    this.officeNum = officeNum;
}
Professor.prototype.getData = function(){
    
}

var prof = new Professor(12345,"luka","akic",100,123,3,321);
console.log(prof);

function Student(id,name,surname,indexNum,status){
    Person(this,id,name,surname);
    this.indexNum = indexNum;
    this.status = status;
    this.listOfPassedExams = [];
}

function Exam (subject,professor,date,grade){
    this.subject = subject;
    this.professor = Professor;
    this.date = Date();
    this.grade = grade;
}

function Faculty (name,numberOfGrades){
    this.name = name;
    this.listOfStudents = [];
    this.numberOfGrades = numberOfGrades;
}



 document.querySelector(".btn").addEventListener("click",function(event){
    addFaculty();
});


function addFaculty (){
    var parag = document.createElement("p");
    var facultyName = document.querySelector(".faculty").value;
    var parent = document.querySelector(".second");
    parent.appendChild(parag);
    parag.innerHTML = facultyName;
   
    var faculty = new Faculty(name,4);
}
 
document.querySelector(".profBtn").addEventListener("click",function(event){

    addProffesor();
 })
 function addProffesor(){
  var profName =     document.querySelector(".Name").value;
  var profSurname = document.querySelector(".surname").value;
  var officeNumber = document.querySelector(".oficenum").value;
  var print = document.createElement("ul");
  var lists1 = document.createElement("li");
  lists1.innerHTML = profName;
  print.appendChild(lists1);
  var list2 = document.createElement("li");
  list2.innerHTML = profSurname;
  print.appendChild(list2);
  var list3 = document.createElement("li");
  list3.innerHTML = officeNumber;
  print.appendChild(list3);

  var parent = document.querySelector(".second")
  parent.appendChild(print);




 }
 document.querySelector(".studentBtn").addEventListener("click",function(event){
     studentInfo ();
 })
 function studentInfo(){
  var studentName = document.querySelector(".studName").value;
  var studentSur = document.querySelector(".studSurName").value;
  var index = document.querySelector(".indexNum").value;
  var print = document.createElement("ul");
  var list1 = document.createElement("li");
  var list2 = document.createElement("li");
  var list3 = document.createElement("li");
  print.appendChild(list1);
  print.appendChild(list2);
  print.appendChild(list3);
  list1.innerHTML = studentName;
  list2.innerHTML = studentSur;
  list3.innerHTML = index;
 
  
  var parent = document.querySelector(".second");
  parent.appendChild(print);
  


 }
 var stu = new Student (name,surname,123,"bla");
 console.log(stu);
 

