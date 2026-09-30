import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert('684245001', 'A', 3.75);
studentDAO.insert('684245002', 'B', 3.70);
studentDAO.insert('684245003', 'C', 3.65);
studentDAO.insert('684245004', 'D', 3.60);
studentDAO.insert('684245005', 'E', 3.55);

const students = studentDAO.findAll();
students.forEach(student => {
    if (student.isHonors()) {
        console.log(`${student.getId()} ${student.getStudentCode()} ${student.getFullName()} ${student.getGpa()} (Honors)`);
    } else {
        console.log(`${student.getId()} ${student.getFullName()} ${student.getGpa()}`);
    }
});