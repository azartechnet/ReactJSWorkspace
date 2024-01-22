const Home=()=>{
    return(
        <>
          <div>
           <img src={`${process.env.PUBLIC_URL}/assets/images/c1.jpeg`} alt=""/>
        </div>

        <center><h1>BankOfferes</h1></center>
        <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img src={`${process.env.PUBLIC_URL}/assets/images/b1.jpeg`} alt=""/>
            </a>
        </div>
        <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img src={`${process.env.PUBLIC_URL}/assets/images/b2.jpeg`} alt=""/>
            </a>
        </div>
        <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img src={`${process.env.PUBLIC_URL}/assets/images/b3.jpeg`} alt=""/>
            </a>
        </div>
        <div class="col-md-3">
            <a href="#" class="thumbnail">
                <img src={`${process.env.PUBLIC_URL}/assets/images/b4.jpeg`} alt=""/>
            </a>
        </div>
        
        </>
      
        
       
        
    )
}
export default Home;