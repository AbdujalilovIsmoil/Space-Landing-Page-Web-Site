// Search-form baza start
let input = document.querySelector(".main__section_search_form_content");
let btn = document.querySelector(".main__section_search_form_btn");
let text1 = "You cannot send a message to the database unless you need to fill in the input.";
let text2 = "Congratulations, your message has been entered into the database";
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == "") {
    alert(text1);
  } else {
    alert(input.value);
    setTimeout(()=>{
      alert(text2);
    },2000);
  }
  input.value = null;
});
// Search-form baza end 