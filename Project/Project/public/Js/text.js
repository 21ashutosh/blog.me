const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const underlineBtn = document.getElementById('underline-btn');
const strikeBtn = document.getElementById('strike-btn');
const codeBtn = document.getElementById('code-btn');
const linkBtn = document.getElementById('link-btn');
const imageBtn = document.getElementById('image-btn');
const fontFamilySelect = document.getElementById('font-family');
const fontSizeSelect = document.getElementById('font-size');

boldBtn.addEventListener('click', () => {
  document.execCommand('bold', false, null);
  updatePreview();
});

italicBtn.addEventListener('click', () => {
  document.execCommand('italic', false, null);
  updatePreview();
});

underlineBtn.addEventListener('click', () => {
  document.execCommand('underline', false, null);
  updatePreview();
});

strikeBtn.addEventListener('click', () => {
  document.execCommand('strikeThrough', false, null);
  updatePreview();
});

codeBtn.addEventListener('click', () => {
  document.execCommand('code', false, null);
  updatePreview();
});

linkBtn.addEventListener('click', () => {
  const url = prompt('Enter the URL:');
  if (url) {
    document.execCommand('createLink', false, url);
    updatePreview();
  }
});

imageBtn.addEventListener('click', () => {
  const url = prompt('Enter the image URL:');
  if (url) {
    document.execCommand('insertImage', false, url);
    updatePreview();
  }
});

fontFamilySelect.addEventListener('change', () => {
  document.execCommand('fontName', false, fontFamilySelect.value);
  updatePreview();
});

fontSizeSelect.addEventListener('change', () => {
  const fontSize = fontSizeSelect.options[fontSizeSelect.selectedIndex].value;
  document.execCommand('fontSize', false, fontSize);
  updatePreview();
});

editor.addEventListener('input', () => {
  updatePreview();
});

function updatePreview() {
  preview.innerHTML = editor.innerHTML;
}