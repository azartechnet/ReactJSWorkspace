const Login = () => {
    return (

        <form action="" method="POST" role="form">
            <legend>Login</legend>

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

    )
}

export default Login;