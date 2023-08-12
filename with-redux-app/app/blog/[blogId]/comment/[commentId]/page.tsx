/* Components */
import 'bootstrap/dist/css/bootstrap.css';

export default function BlogWithCommentIdPage({params}:{
  params:{
    blogId:string,
    commentId: string
  }
}) {
  return (<div>
    Blog Id {params.blogId} With Comment Id {params.commentId} page
  </div>)
}
