import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.onToggleImportant = this.onToggleImportant.bind(this);
        // this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleSelector = this.onToggleSelector.bind(this);
        // this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index+1);
            const newArr = [...before,...after];

            return {
                data: newArr
            }

        })
    }

    addItem(body) {
        const newItem ={
            label: body,
            important:false,
            like:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }
    
    
    onToggleSelector(id, selector) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old};
            newItem[selector] = !old[selector];
            //раскрываем все свойства old и меняем его своство important
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            console.log(selector);
            return {
                data: newArr
            }
        })
    }

    // onToggleLiked(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = {...old, like: !old.like};
    //         //раскрываем все свойства old и меняем его своство like
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            
    //         return {
    //             data: newArr
    //         }
    //     })

    // }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
            // если не нашло, то выдаст -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter}) 
    }

    render() {
        const {data, term, filter} = this.state;
        //чтобы не записывать ниже  this.state.data, а просто data

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const filteredData = this.state.data.filter(item => {
            return typeof(item) == 'object' && Object.entries(item).length > 0;
        })

        const visiblePosts = this.filterPost(this.searchPost(filteredData, term), filter);
        return (
            <div className='app'>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleSelector}
                    onToggleLiked={this.onToggleSelector}
                />
                <PostAddForm
                    onAdd={this.addItem}   
                />
            </div>
        )
    }
}

