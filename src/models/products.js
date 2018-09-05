export default {
	namespace:'products',
	state:[],
	//函数式编程-纯函数
	reducers:{
		'delete'(state,{payload:id}){
            return state.filter(item => item.id !==id);
		},
		'add'(state,{payload:obj}){
            return [...obj,...state];
		}
	},
	//基于 Redux-saga 实现的Generator 函数
	effects:{

	}
}