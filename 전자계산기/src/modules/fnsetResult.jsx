export let str = ''
export let sorry = false
export let err = false

export const fnsetResult = (e) => {
 let fn = e.currentTarget.getAttribute('data-fn')
 err = false
 sorry = false
 // let str = document.querySelector('.output').innerText
    switch(fn){
      case 'change' : 
      let char = e.currentTarget.getAttribute('data-char')
      if(str.length<35){
        str=str+char
      }else{
        sorry = true
      }
  
      break

      case 'delete':
      str = str.slice(0,-1)
      break

      case 'clear':
      str = ''
      break
    case 'calc':
    //제어흐름 예외처리
    try{//에러가 없을때 실행
      if(str !== ''){
        let fnCalc =  new Function( 'return '+ str)
        str = String(fnCalc())
      }

    }catch{//err
      err=true
      
    }
    break
  }
}