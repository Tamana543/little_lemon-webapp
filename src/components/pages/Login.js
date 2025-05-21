import Login from "../sections/loginPages/Login"
export default function Order(){
 return(
     <>
       <Login/>
        
      <form method="post" class="flex form_login">
        <div class="name flex">
          <label for="name" className=" label_login">Name</label>
          <input type="text" name="name" id="Name" />
        </div>
        <div class="last_name flex">
          <label for="last-name" className="last_name-label label_login">Last Name</label>
          <input type="text" name="last-name" id="lastName" />
        </div>

        <button type="submit" class="submit">Submit</button>
      </form>
   
     </>
 )    
}