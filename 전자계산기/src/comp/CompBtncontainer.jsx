import { btnArr } from "../modules/data";
import CompBut from "./CompBut";

const CompBtncontainer = ({_setResult,_setSorry,_setErr}) => {
  return (
    <>
        <form className='btnContainer'>
          {
            btnArr.map((btnData)=>{
              return (
                <CompBut
                 key={btnData.id}  
                 btnData={btnData}
                 _setResult={_setResult}
                 _setSorry={_setSorry}
                 _setErr={_setErr}
                 />
              )
            })
          }
        </form>
    </>
  );
};

export default CompBtncontainer;