import user from '@/api/user'
//state设置默认的初始状态
const state = {
  token:'',
  userInfo:'',
};

const actions = {
  //获取列表
  getUserInfo({ commit,state},params) {
    user.getInfo().then((res) => {
      
    }).catch((err) => {
      console.log(err)
    });    
  },
  //上拉加载
  getUpRefesh({commit},upRef){
    commit(types.GET_REFRESH_UP,upRef);  //提交上拉加载状态
  },
  //获取详情
  getDetails({commit}, detailParams){
    commit(types.GET_LIST_DETAIL,detailParams);  //提交上拉加载状态
    
  }
};


//过滤我们拿到的数据
const getters = {
  listData: state => state.listData,
};


//调用mutations是唯一允许更新应用状态的地方
const mutations = {

};
export default {
  state,
  actions,
  getters,
  mutations
}
