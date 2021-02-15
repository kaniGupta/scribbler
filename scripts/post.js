let likeCount = 0;
const comments = [];

const loadData = () => {
  const username = sessionStorage.getItem('username');
  const title = sessionStorage.getItem('title');
  const summary = sessionStorage.getItem('summary');

  document.getElementById('single_post_username').innerHTML = username;
  document.getElementById('single_post_heading').innerHTML = title;
  document.getElementById('single_post_summary').innerHTML = summary;
  document.getElementById('like_status').innerHTML =
    'Be the first one to like this!';
};

const onLikeBtnClicked = () => {
  likeCount++;
  document.getElementById(
    'like_status'
  ).innerHTML = `${likeCount} person likes this!`;
};

const onCommentBtnClicked = () => {
  comments.push(document.getElementById('comment_box').value);

  if (comments && comments.length > 0) {
    let userComments = [];

    comments.forEach((el) => {
      userComments.push(
        `<div class="card mb-2"><div class="card-body">${el}</div></div>`
      );
    });

    document.getElementById('user_comments').innerHTML = userComments.join(' ');
  }
};

loadData();
