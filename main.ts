import {UserDAO} from "./UserDAO.ts";

const userDAO = new UserDAO();
userDAO.insert('อัมพำ','lfjdjg987@gmail.com');
userDAO.insert('ไทย','afhjrrgg02@gmail.com');
userDAO.insert('วิชัย','ssdhhf0@gmail.com');




const users = userDAO.findAll();
users.forEach(u=>{
    console.log(u.getInfo());
    
});