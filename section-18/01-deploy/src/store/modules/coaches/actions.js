export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    const token = context.rootGetters.token;
    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });
    if(!response.ok) {
      // error
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if(!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/coaches.json`);
    const responseData = await response.json();
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = Object.entries(responseData)
      .map(([id, data]) => ({
        ...data,
        id
      }));
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
