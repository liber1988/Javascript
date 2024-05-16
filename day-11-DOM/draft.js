  // <!-- <script>


      // 4. Adding a New Sub Title (Assignment 2)
      const myLiNextSibling = myLi.nextElementSibling;
      const myUl = myLiNextSibling.firstElementChild;
      const newSubTitle = document.createElement("li");
      const subTitleText = document.createTextNode("sub title 4");
      newSubTitle.appendChild(subTitleText);
      myUl.appendChild(newSubTitle);

      // 5. Removing the Last Title (Assignment 3)
      const myLiParent = myLi.parentElement;
      myLiParent.lastElementChild.remove();

      // 6. Updating the Document's Title (Assignment 4)
      const head = document.head;
      const title = head.querySelector("title"); // Alternatively: head.lastElementChild
      // title.textContent = 'DOM Master'; // Uncomment to modify the title text

      // 7. Updating Paragraph Content (Assignment 5)
      const div = myLiParent.nextElementSibling;
      const p = div.firstElementChild;
      p.textContent = "Now I know how to traverse the DOM :D";
    </script> -->


function printElementTree(element) {
        console.log("Element:", element.tagName, element.classList);

        if (element.children.length > 0) {
          for (let child of element.children) {
            printElementTree(child);
          }
        }
      }
    
