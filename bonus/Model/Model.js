export default class Model {
  constructor(result) {
    this.elSubmit = document.querySelector(".submitPost");
    this.elInput = document.querySelector(".post");
    this.message = document.querySelector("#message");
    this.result = result;
    this.ch1 = "e";
    this.url = "https://jsonplaceholder.typicode.com/posts?limit=10";
  }

  // get post data
  async getPost() {
    this.result = await fetch(this.url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
    return this.result;
  }

  async getNumberPost(n) {
    let conntentPost = await this.getPost();
    let newConntentPost = [];
    for (let i = 0; i < n; i++) {
      newConntentPost.push(conntentPost[i]);
    }
    return newConntentPost;
  }

  checkInput() {
    let smg = "";
    if (this.elInput.value == "" || this.elInput.value == 0) {
      smg = "le champ ne doit pas être vide ou egal à 0";
      this.message.innerHTML = smg;
    } else if (isNaN(this.elInput.value)) {
      smg = "Vous devez saisir un nombre";
      this.message.innerHTML = smg;
    }
    return smg;
  }

  async getWordCount(tabWord) {
    let newTab = tabWord.map(
      ({ title }) => [...title].filter((x) => x === this.ch1).length
    );
    return newTab.reduce((acc, n) => acc + n, 0);
  }

  async average(average) {
    let moyenne;
    let tabAverage = average.map(
      ({ title }) => [...title].filter((x) => x === this.ch1).length
    );
    if (tabAverage.length !== 0) {
      let sum = tabAverage.reduce((acc, x) => acc + x, 0);
      moyenne = sum / tabAverage.length;
      return moyenne;
    }
  }

  async showPost() {
    let html = "";
    // let formPost = document.querySelector(".form-post");
    let contentPost = await this.getNumberPost(parseInt(this.elInput.value));
    contentPost.map((post) => {
      console.log(post);
      html += `
       <div class="form-post--content">
          <div class="userId">
              <div> <span>userId:</span> ${post.userId}</div>
          </div>
          <div class="post-title">
            <div> <span>Title:</span> ${post.title}</div>
          </div>
          <div class="post-description">
              <div><span>Description:</span> ${post.body}</div>
          </div>
      </div>
      `;
      document.querySelector(".form-post").innerHTML = html;
    });
  }

  async getElement() {
    if (this.checkInput() == "") {
      this.message.style = "color: black;";
      let contentPost = await this.getNumberPost(parseInt(this.elInput.value));
      this.message.classList.add("message");
      let wordCount = await this.getWordCount(contentPost);
      let average = await this.average(contentPost);
      this.message.innerHTML = `Il y a ${wordCount} ("e") dans les post(s) ${contentPost.length} avec une Moyenne de ${average} `;
    } else {
      this.message.style = "color: red;";
    }
  }

  // submits form
  calculButton() {
    this.elSubmit.addEventListener("click", async (e) => {
      e.preventDefault();
      await this.getElement();
      await this.showPost();
      this.elInput.value = "";
    });
  }
}
