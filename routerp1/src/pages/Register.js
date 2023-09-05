const Register = () => {
    return (
    <>
    <h1>Register</h1>
    
    <form action="" method="POST" role="form">
    
      <div class="form-group">
        <label for="">Username:</label>
        <input type="text" class="form-control" id="" placeholder="Input field"/>
        <label for="">Email:</label>
        <input type="email" class="form-control" id="" placeholder="Input field"/>
        <label for="">Password:</label>
        <input type="password" class="form-control" id="" placeholder="Input field"/>
        <label for="">ConfirmPsw:</label>
        <input type="password" class="form-control" id="" placeholder="Input field"/>
        
     
        
      </div>
    
      
    
      <button type="submit" class="btn btn-danger">RegisterNow</button>
    </form>
    
    </>
    )
  };
  
  export default Register;