import React, {Component} from "react";

import "./TestJig.css"


class TestJig extends Component {
    render() {
        let progress_style = {
            "background": "#5BD167",
            "width": this.props.progress + "%",
            "status": this.props.progress
        };

        let status = this.props.progress + "%";

        if (this.props.pass_fail == "fail") {
            progress_style.background = "#ee3939";
            status = "Fail";
        }
        return (
           <div className={"jig"}>
               <div className={"icon"}/>
               <div className={"progress"} style={progress_style}/>
               <div className={"tj_id"}>TJ-1234</div>
               <div className={"product_info"}>eZVP</div>
               <div className={"status"}>{status}</div>
           </div>
        ) ;
    }
}

export default TestJig;