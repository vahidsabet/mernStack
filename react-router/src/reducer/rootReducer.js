const initialState ={
    cards:[
        {id:1, title: 'vahid', body: 'Software engineer'},
        {id:2, title: 'reza', body: 'Civil engineer'},
        {id:3, title: 'ali', body: 'Electric engineer'},
    ],
    users:[]
}
const rootReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card)=>{
                return action.id !== card.id
            })
            return{
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return{
                ...state,
                users: action.payload
            }
            default:
                return state;
    }
//     console.log(action);
//     return state;
}

export default rootReducer;