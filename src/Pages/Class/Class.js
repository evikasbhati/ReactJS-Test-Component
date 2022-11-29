import { Component } from "react"

class Class extends Component {
    constructor(a){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("didmouent")
    }
    handleInc(){
        this.setState({count:this.state.count+1})
    }
    render(){

        return(
            <><h1>{this.state.count}</h1>
            <button onClick={()=>{this.handleInc()}}>Click</button>
            </>
        )
    }
}
export  default Class