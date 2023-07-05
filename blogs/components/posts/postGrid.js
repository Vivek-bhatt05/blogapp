import PostItem from "./postItem"
import styles from '/styles/postGrid.module.css';


function PostGrid (props) {

    const {posts}=props
  return (
    <ul className={styles.grid}>
        {posts.map((post)=> <PostItem />)}
    </ul>
  )
}

export default PostGrid
