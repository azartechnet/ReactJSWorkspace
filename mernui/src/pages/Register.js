const Register = () => {
    return (

        <form action="" method="POST" role="form">
            <legend>RegisterForm</legend>

            <div class="form-group">
                <label for="">UserName</label>
                <input type="text" class="form-control" id="" placeholder="Input field"/>
            </div>

            <div class="form-group">
                <label for="">Password</label>
                <input type="text" class="form-control" id="" placeholder="Input field"/>
            </div>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" id="" placeholder="Input field"/>
            </div>

            <div class="form-group">
                <label for="">Mobile</label>
                <input type="text" class="form-control" id="" placeholder="Input field"/>
            </div>

            <button type="submit" class="btn btn-primary">Register</button>
        </form>

    )
}

export default Register;