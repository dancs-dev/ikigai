// Credit: https://aaronluna.dev/blog/add-copy-button-to-code-blocks-hugo-chroma/

function addCopyButtonToCodeBlocks() {
  // Function to determine if the background color is light or dark

  function isColorDark(color) {
    const rgb = color.match(/\d+/g);

    const r = parseInt(rgb[0], 10);

    const g = parseInt(rgb[1], 10);

    const b = parseInt(rgb[2], 10);

    // Calculate luminance

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance < 0.5;
  }

  // Function to adjust color brightness significantly

  function adjustColorBrightness(color, amount) {
    const rgb = color.match(/\d+/g);

    const r = Math.min(255, Math.max(0, parseInt(rgb[0], 10) + amount));

    const g = Math.min(255, Math.max(0, parseInt(rgb[1], 10) + amount));

    const b = Math.min(255, Math.max(0, parseInt(rgb[2], 10) + amount));

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Get all code blocks with a class of "language-*"

  const codeBlocks = document.querySelectorAll(
    'pre > code[class^="language-"]'
  );

  //   const copyIcon = '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M288 64C252.7 64 224 92.7 224 128L224 384C224 419.3 252.7 448 288 448L480 448C515.3 448 544 419.3 544 384L544 183.4C544 166 536.9 149.3 524.3 137.2L466.6 81.8C454.7 70.4 438.8 64 422.3 64L288 64zM160 192C124.7 192 96 220.7 96 256L96 512C96 547.3 124.7 576 160 576L352 576C387.3 576 416 547.3 416 512L416 496L352 496L352 512L160 512L160 256L176 256L176 192L160 192z"/></svg></span> copy code';
  const copyIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg> copy';
  const copiedIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg> copied!';

  // For each code block, add a copy button inside a header

  codeBlocks.forEach((codeBlock) => {
    // Get the background color of the code block

    const computedStyle = window.getComputedStyle(codeBlock);

    const backgroundColor = computedStyle.backgroundColor;

    // Adjust the header color to be significantly lighter or darker than the background color

    const headerColor = isColorDark(backgroundColor)
      ? adjustColorBrightness(backgroundColor, 65)
      : adjustColorBrightness(backgroundColor, -65);

    const textColor = isColorDark(backgroundColor) ? "#d1d1d1" : "#606060";

    // Create the header div

    const header = document.createElement("div");

    header.style.backgroundColor = headerColor;

    header.style.display = "flex";

    header.style.justifyContent = "space-between";

    header.style.alignItems = "center";

    header.style.paddingRight = "0.5rem";

    header.style.paddingLeft = "0.5rem";

    header.style.borderTopLeftRadius = "5px";

    header.style.borderTopRightRadius = "5px";

    header.style.color = textColor;

    header.style.borderBottom = `1px solid ${headerColor}`;

    header.classList.add("small");

    // Create the copy button

    const copyButton = document.createElement("button");

    copyButton.classList.add("btn", "copy-code-button");

    copyButton.style.background = "none";

    copyButton.style.border = "none";

    copyButton.style.color = textColor;

    copyButton.style.fontSize = "100%"; // Override the font size

    copyButton.style.cursor = "pointer";

    copyButton.innerHTML = copyIcon;

    copyButton.style.marginLeft = "auto";

    // Add a click event listener to the copy button

    copyButton.addEventListener("click", () => {
      // Copy the code inside the code block to the clipboard

      const codeToCopy = codeBlock.innerText;

      navigator.clipboard.writeText(codeToCopy);

      // Update the copy button text to indicate that the code has been copied

      copyButton.innerHTML = copiedIcon;

      setTimeout(() => {
        copyButton.innerHTML = copyIcon;
      }, 1500);
    });

    // Get the language from the class

    const classList = Array.from(codeBlock.classList);

    const languageClass = classList.find((cls) => cls.startsWith("language-"));

    const language = languageClass
      ? languageClass.replace("language-", "")
      : "";

    // Create the language label

    const languageLabel = document.createElement("span");

    languageLabel.textContent = language ? language.toLowerCase() : "";

    languageLabel.style.marginRight = "10px";

    // Append the language label and copy button to the header

    header.appendChild(languageLabel);

    header.appendChild(copyButton);

    // Find the parent element with the "highlight" class and insert the header before it

    const highlightParent = codeBlock.closest(".highlight");

    if (highlightParent) {
      highlightParent.parentNode.insertBefore(header, highlightParent);
    }
  });
}

// Call the function to add copy buttons to code blocks

document.addEventListener("DOMContentLoaded", addCopyButtonToCodeBlocks);
