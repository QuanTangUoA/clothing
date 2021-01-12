import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className = 'preview-collection'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items.filter(item => item.id < 4).map(item => (
                <CollectionItem key = {item.id} name = {item.name} imageUrl = {item.imageUrl} price = {item.price} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;