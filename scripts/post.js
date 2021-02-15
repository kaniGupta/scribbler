const loadData = () => {
  const username = sessionStorage.getItem('username');
  const title = sessionStorage.getItem('title');
  const summary = sessionStorage.getItem('summary');
  document.getElementById('single_post_username').innerHTML = username;
  document.getElementById('single_post_heading').innerHTML = title;
  document.getElementById('single_post_summary').innerHTML = summary;
};

loadData();
