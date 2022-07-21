// Code EyesOnMe Component Here
function EyesOnMe (){
    return(
        <div>
            <h1>Just so the page works</h1>
        <button 
      onFocus={(e) => {
        console.log("Good!");
      }}
      onBlur={(e)=>{
        console.log('Hey! Eyes on me!')
      }}
    >Eyes on me</button>
        </div>
    )
}


export default EyesOnMe;