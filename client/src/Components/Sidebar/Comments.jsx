import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCommentsSafePlaces } from "../../actions/actions";
import "./Comments.css"

export default function ShowCommentsPlaces({id}) {

  console.log(id)
    const comments = useSelector((state) => state.comments_safeP)
    console.log("cmSP",comments)
    const filterId = comments.filter((c) => c.safePlaceId === id)
    console.log(filterId)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showCommentsSafePlaces(id))
      }, 
      // eslint-disable-next-line
      [showCommentsSafePlaces])

    return (
        <div>
            {
            
                filterId?.map((c) => {
                    return (
                      <div key={c.id} value={c.id} className="commentsCont">
                        <p key={c.id} value={c.id} className="conte">{c.comment_text}</p>
                      </div>
                    )
                  })
            }
        </div>
    )

}
