export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });
    const responseData = await response.json();
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }

    context.commit('addRequest', {
      ...newRequest,
      coachId: payload.coachId,
      id: responseData.name
    });
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(`https://vue-http-demo-f008d-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`);
    const responseData = await response.json();
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
    }
    const requests = Object.entries(responseData || [])
    .map(([id, data]) => ({
      ...data,
      id,
      coachId
    }));
    context.commit('setRequests', requests);
  }
};
