const selectLang = document.getElementById("select-lang")
const text = document.getElementById("text")
const btnRead = document.getElementById("btn-read")

document.addEventListener("DOMContentLoaded",function(){
  text.value = '7월까지 달려오신 엘지니 여러분과 멘토님들, 매니저님들 모두 수고하셨습니다!\n월간공유회 끝나고 야구 보면서 맥주 한 잔 해요\n해단식까지 화이팅!';

  btn_click();

  btnRead.click();
})

function call() {
  text.value = '7월까지 달려오신 엘지니 여러분과 멘토님들, 매니저님들 모두 수고하셨습니다!\n월간공유회 끝나고 야구 보면서 맥주 한 잔 해요\n해단식까지 화이팅!';

  speak(text.value, {
      rate: 1,
      pitch: 1.2,
      lang: selectLang.options[selectLang.selectedIndex].value
  })
}

function speak(text, opt_prop) {

    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
        return
    }

    window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

    const prop = opt_prop || {}

    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = prop.rate || 1 // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1 // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR"
    speechMsg.text = text

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);

}


// 이벤트 영역
//const selectLang = "ko-KR" //document.getElementById("select-lang")
function btn_click(){
  btnRead.addEventListener("click", e => {
      speak(text.value, {
          rate: 1,
          pitch: 1.2,
          lang: selectLang.options[selectLang.selectedIndex].value
      })
  })
}
