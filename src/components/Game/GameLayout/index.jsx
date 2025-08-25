import Information from "./Information";
import Field from "./Field";

export default function GameLayout({currentPlayer, field, isDraw, isGameEnded, setField, setRestart}){
    const propsInformation = {currentPlayer,isDraw,isGameEnded,setRestart}
    return (<>
        <Information {...propsInformation} />
        <Field field={field} setField={setField} currentPlayer={currentPlayer} />
    </>)
}