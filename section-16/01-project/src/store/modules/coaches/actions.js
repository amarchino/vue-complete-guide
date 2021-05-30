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
    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
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
  async loadCoaches(context) {
    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/coaches.json`);
    if(!response.ok) {
      // error
    }
    const responseData = await response.json();
    const coaches = Object.entries(responseData)
      .map(([id, data]) => ({
        ...data,
        id
      }));
    context.commit('setCoaches', coaches);
  }
};
