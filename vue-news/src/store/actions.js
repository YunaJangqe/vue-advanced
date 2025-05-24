import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(respnose => {
    //         console.log(respnose);
    //         context.commit('SET_NEWS', respnose.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASK(context) {
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS(context) {
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response;
    },
    async FETCH_USER({ commit }, username) {
        const response = await fetchJobsList(username);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}