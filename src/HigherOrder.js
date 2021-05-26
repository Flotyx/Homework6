import React from "react";

export const  UpdateComp = OriginalComp =>{
    class NewComp extends React.Component{
        render(){
        return(
            <div>
             <OriginalComp year="民國"/>;
             <OriginalComp month="月"/>;
             <OriginalComp day="號"/>;
            </div>
        );
        }
    }
    return NewComp;
}
export default UpdateComp;