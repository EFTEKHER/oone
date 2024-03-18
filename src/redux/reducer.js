//state
//Defining constant 
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const ADDUSER='ADDUSER';
const initialCounterState={
    count:0
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