export default {
  cart(state) {
    return {
      items: state.items,
      total: state.total,
      qty: state.qty
    }
  }
}
