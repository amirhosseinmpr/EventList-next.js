import classes from './comment-list.module.css';

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>hossein.mpr</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>mr.mpr</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
