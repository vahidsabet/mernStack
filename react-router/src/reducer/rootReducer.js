const initialState ={
    cards:[
        {id:1, title: 'vahid', body: 'Software engineer'},
        {id:2, title: 'reza', body: 'Civil engineer'},
        {id:3, title: 'ali', body: 'Electric engineer'},
    ]
}
const rootReducer = (state = initialState, action) =>{
    return state;
}

export default rootReducer;