import React from 'react';
import './post-list.css'
import PostListItem from '../post-list-item/post-list-item';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    
    const elements = posts.map((item) => {
        const {id,...itemProps} = item; //выносим отдельно id
        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)} 
                    onToggleImportant={() => onToggleImportant(id, 'important')} 
                    onToggleLiked={() => onToggleLiked(id, 'like')} 
                /> 
                {/* label={item.label} */}   
            </li>
        ) 
    })

    return(
        <ul className='app-list list-group-item'>
            {elements}
        </ul>
    )
}

export default PostList;

