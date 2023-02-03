  // cleanInput() {
  //   console.log("diallo");
  //   document.querySelector(".post").value = "";
  //   document.querySelector(".message").innerHTML = " ";
  // }


  
  /**
   * @Description function de création du bouton calculant le nombre de "e" dans chaque titre de post(s) récupéré(s).
   */

  async getNumberPost(n) {
    let conntentPost = await this.getPost();
    let newConntentPost = [];
    for (let i = 0; i < n; i++) {
      newConntentPost.push(conntentPost[i]);
    }
    return newConntentPost;
  }

  async submitForm(e) {
    console.log(await this.getPost());
    e.preventDefault();
    // let el = getNumberPost();
    // console.log(await this.getNumberPost());
    let elInput = document.querySelector(".post");
    let message = document.querySelector(".message");
    let output = "Vous devez saisir un nombre";
    if (!isNaN(elInput.value)) {
      console.log(elInput.value);
      message.innerHTML = " ";

      // let content = this.getNumberPost(elInput.value);
      // console.log(content);
    } else {
      message.innerHTML = output;
      // this.cleanInput;
    }
    // console.log(elInput.value);
  }
