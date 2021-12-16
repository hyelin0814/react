import { useState } from "react";
import CompBtncontainer from "./comp/CompBtncontainer";
import CompOutput from "./comp/CompOutput";
import Compsorry from "./comp/Compsorry";
import CompErr from "./CompErr";

const App = () => {
 const [_result,_setResult] = useState('')
 const [_sorry,_setSorry] = useState(false)
 const [_err,_setErr] = useState(false)
  return (
    <>
      <main>
        <h1><img src="./img/title.png" alt="" /></h1>
        <CompOutput _result={_result}/>
        <CompBtncontainer _setResult={_setResult}  _setSorry={_setSorry} _setErr={_setErr}/>
      </main>
      {( _sorry === true ) && <Compsorry  _setSorry={_setSorry}/>}
      { ( _err === true ) && <CompErr _setErr={_setErr}/> }
    </>
  );
};

export default App;