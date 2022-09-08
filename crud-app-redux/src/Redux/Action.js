

export const testAction = (valueGetFomAction)=>({
    type:'saifMomin/test',
    payload:valueGetFomAction
})
export const incrementCount = (valueGetFomAction)=>(
    console.log("valueGetFomAction",valueGetFomAction),
    {
    type:'count/increment',
    payload:valueGetFomAction
})