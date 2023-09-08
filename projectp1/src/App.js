function App()
{
    function handleNameChange()
    {
        const names=["azar","mohamed","sheik"]
        const int=Math.floor(Math.random()*3)
        return names[int]
    }
    return(
        <div>
            MohamedAzar
            <p>Lets {handleNameChange()}</p>
        </div>
    );
}
export default App;