let likeCount = 0;

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

loadData();
