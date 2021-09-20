import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCommentsSafePlaces } from "../../actions/actions";
import "./Comments.css"

export default function ShowCommentsPlaces(id) {

  console.log(id)
    const comments = useSelector((state) => state.comments_safeP)
    console.log(comments)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showCommentsSafePlaces())
      }, 
      // eslint-disable-next-line
      [showCommentsSafePlaces])

    return (
        <div>
            {
            
                comments?.map((c) => {
                    return (
                      <div key={c.id} className="commentsCont">
                        <p key={c.id} className="conte">{c.comment_text}</p>
                      </div>
                    )
                  })
            }
        </div>
    )

}
