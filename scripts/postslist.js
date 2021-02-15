const showPostOne = () => {
  const username = document.getElementById('post_1_username').innerHTML;
  const title = document.getElementById('post_1_title').innerHTML;
  const summary = document.getElementById('post_1_summary').innerHTML;

  redirectToPostPage(username.trim(), title.trim(), summary.trim());
};

const showPostTwo = () => {
  const username = document.getElementById('post_2_username').innerHTML;
  const title = document.getElementById('post_2_title').innerHTML;
  const summary = document.getElementById('post_2_summary').innerHTML;

  redirectToPostPage(username.trim(), title.trim(), summary.trim());
};

const showPostThree = () => {
  const username = document.getElementById('post_3_username').innerHTML;
  const title = document.getElementById('post_3_title').innerHTML;
  const summary = document.getElementById('post_3_summary').innerHTML;

  redirectToPostPage(username.trim(), title.trim(), summary.trim());
};

const showPostFour = () => {
  const username = document.getElementById('post_4_username').innerHTML;
  const title = document.getElementById('post_4_title').innerHTML;
  const summary = document.getElementById('post_4_summary').innerHTML;

  redirectToPostPage(username.trim(), title.trim(), summary.trim());
};

const showPostFive = () => {
  const username = document.getElementById('post_5_username').innerHTML;
  const title = document.getElementById('post_5_title').innerHTML;
  const summary = document.getElementById('post_5_summary').innerHTML;

  redirectToPostPage(username.trim(), title.trim(), summary.trim());
};

const redirectToPostPage = (username, title, summary) => {
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('title', title);
  sessionStorage.setItem('summary', summary);
  window.location.href = '../html/post.html';
};
