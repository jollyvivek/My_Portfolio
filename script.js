let tablinks= document.getElementsByClassName('tab-links');
let tabcontents= document.getElementsByClassName('tab-contents');

function opentab (tabname){

  for( item of tablinks){
    item.classList.remove("active-link");
  }
  for( item of tabcontents){
    item.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")

}

// menu logic

let navMenu = document.getElementById("nav-menu");


function openMenu() {
  navMenu.style.right="0";
}

function closeMenu(){
  navMenu.style.right="-20rem";
}

// FormSubmitHandler()

const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
      // console.log(result)
    if (result.success) {
      responseMessage.textContent = "Message sent successfully!";
      contactForm.reset(); // Clear the form fields
    } else {
      responseMessage.textContent = "Error: Message not sent.";
    }
  } catch (error) {
    responseMessage.textContent = "An error occurred. Please try again later.";
  }
});