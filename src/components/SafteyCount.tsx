import React from "react";
//import SafetyDisplay from "./SafetyDisplay.tsx";


function SafetyCount(){
    let NumSafeties;
    return(
        <div className = "safetycount">
            {NumSafeties === 0 ? <p>No.</p> : <p>Yes! There have been {NumSafeties} safeties!</p>}
            <div>{/*
                <SafetyDisplay></SafetyDisplay>
    */}
            </div>
        </div>
    )
}

export default SafetyCount;