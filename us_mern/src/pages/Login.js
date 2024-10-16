const Login=()=>{
    return(
        <div>
            <h1>Login Page</h1>
            
            <form action="" method="POST" role="form">
              
            
                <div class="form-group">
                    <label for="">UserName</label>
                    <input type="text" class="form-control" id="" placeholder="Input field"/>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="text" class="form-control" id="" placeholder="Input field"/>
                </div>
                
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}
export default Login;