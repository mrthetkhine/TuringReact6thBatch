/* Components */
"use client";
import 'bootstrap/dist/css/bootstrap.css';

export default function PhotoModel({ params: { id: photoId } }: { params: { id: string } }) {
    console.log('Photo model ',params);
  return (<div>
        <h3>Photo Model</h3>
  </div>)
}
