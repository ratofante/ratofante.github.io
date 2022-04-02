// BUTTONS CONST
const marginBtn = document.getElementById('margin-btn');
const borderBtn = document.getElementById('border-btn');
const paddingBtn = document.getElementById('padding-btn');
const boxContentBtn = document.getElementById('boxContent-btn');

//TARGETS CONST
const container = document.getElementById('container');
const box = document.getElementById('box');
const content = document.getElementById('content');

//EVENTLISTENERS
marginBtn.addEventListener('click', focusMargin);
borderBtn.addEventListener('click', focusBorder);
paddingBtn.addEventListener('click', focusPadding);
boxContentBtn.addEventListener('click', focusBoxContent);

// FUNCTIONS
function toogleOnOff(elem) {
   if (elem.classList.contains('growLetterSize')) {
      elem.textContent = "Off";
      elem.classList.add('shrinkLetterSize');
      elem.classList.remove('growLetterSize');

   } else {
      elem.textContent = "On";
      elem.classList.add('growLetterSize');
      elem.classList.remove('shrinkLetterSize');
   }
}
function focusMargin() {
   container.classList.toggle('glowMargin');
   toogleOnOff(marginBtn);
}
function focusBorder() {
   box.classList.toggle('glowBorder');
   toogleOnOff(borderBtn);
}
function focusPadding() {
   box.classList.toggle('glowPadding');
   toogleOnOff(paddingBtn);
}
function focusBoxContent() {
   content.classList.toggle('glowContent');
   toogleOnOff(boxContentBtn);
}
