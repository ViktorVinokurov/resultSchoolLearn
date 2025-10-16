import Information from "./Information";
import Field from "./Field";

export default function GameLayout({setRestart, setField}){
    return (<>
        <Information setRestart={setRestart} />
        <Field setField={setField} />
    </>)
}