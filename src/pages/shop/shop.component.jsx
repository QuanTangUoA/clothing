import React from 'react';
import shopData from './shop.data.jsx';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
class shopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: shopData
        }
    }

    render(){
        const collections = this.state.collections;
        return (
            <div className = 'shope-page'>
                {
                    collections.filter((item, index) => index < 4).map((item) => (
                        <PreviewCollection key = {item.id} title = {item.title} routeName = {item.routeName} items = {item.items} />
                    ))
                }
            </div>
        )
    }
}

export default shopPage;