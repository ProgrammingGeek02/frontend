import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM
} from '../constants/cart';
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    error: '',
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return { ...state, error: '', cartItems: [...state.cartItems, item] };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };

        default:
            return state;
    }
}