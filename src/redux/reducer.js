//state

//Defining constant 
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const ADDUSER='ADDUSER';
const initialCounterState={
    count:0,
    users:'',

}

const initialUserState={
    users:[{
        name:"anisul Islam",
    }]
};

//action ---object -->type and payload->data transfer

//increment counter
const incrementcounterAction=()=>{
    return {
        type: INCREMENT,

    };
}


const decrementcounterAction=()=>{
    return {
        type: DECREMENT,

    };
}

const addUser=()=>{

    return{
        type:ADDUSER,
        payload:{name:'shakil'}
    }
}

//create reducer for counter 


/*!SECTION
1.state
2. dispatch action 
3.reducer
4.store---->getState(),dispatch(),subscribe()


*/

const counterReducer=(state=initialCounterState,action)=>{
   switch(action.type){
    case INCREMENT:
        return{
            ...state,
            count:state.count+1,

        }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1,
                
            }   
    default :
        return state;         
   }
}

const {createStore}=require('redux' );


const store = createStore(counterReducer);


store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch;

store.dispatch(incrementcounterAction())

store.dispatch(incrementcounterAction())
store.dispatch(incrementcounterAction())

store.dispatch(decrementcounterAction())