const Box = props => {
     const {className,boxText} = props;
     return(
       <div className= {`r ${className}`} ><p >{boxText}</p></div>
     )
}

const element = (
  <div className="container">
       <h1 className="heading">Boxes</h1>
       <div className="content">
          <Box className="box1" boxText="Small"/>
          <Box className="box2" boxText="Medium"/>
          <Box className="box3" boxText="Large"/>
       </div>
  </div>
  
)

ReactDOM.render(element, document.getElementById("root"));
