import Login from "../sections/loginPages/Login"
export default function Order(){
 return(
     <>
       <Login/>
         <div class="window log_in-window hide">
      <div class="closeBtn">X</div>
      <form method="post" class="flex">
        <h3 class="head">Log In</h3>
        <div class="name flex">
          <label for="name">Name</label>
          <input type="text" name="name" id="Name" />
        </div>
        <div class="last_name flex">
          <label for="last-name" class="last_name-label">Last Name</label>
          <input type="text" name="last-name" id="lastName" />
        </div>

        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
     </>
 )    
}