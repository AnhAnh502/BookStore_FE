import { ADD_PRODUCT, UPDATE_PRODUCT, UPDATE_TOTALPRICES, DELETE_PRODUCT, CLEAR_CART } from "../constants/cart";

const initialState = {
    selectedProducts: [
        {
            id: 1,
            name: 'Tuổi trẻ đáng giá bao nhiêu',
            price: 30000,
            quantities: 1
        },
        {
            id: 2,
            name: 'Người thành công làm gì vào buổi tối',
            price: 24000,
            quantities: 4
        },
        {
            id: 3,
            name: 'Tuổi trẻ đáng giá bao nhiêu',
            price: 17000,
            quantities: 4
        },
        {
            id: 4,
            name: 'Tuổi trẻ đáng giá bao nhiêu',
            price: 20000,
            quantities: 4
        },
        {
            id: 5,
            name: 'Tuổi trẻ đáng giá bao nhiêu',
            price: 50000,
            quantities: 4
        },
        {
            id: 6,
            name: 'Tuổi trẻ đáng giá bao nhiêu',
            price: 10000,
            quantities: 4
        }
    ],
    totalPrices: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case UPDATE_PRODUCT:
            const index = state.selectedProducts.findIndex(product => product.id === action.payload.id)
            const newProductList = [...state.selectedProducts]
            newProductList[index] = action.payload
            const newTotalPrices = newProductList.reduce((accumulator, item) => accumulator + item.price * item.quantities, 0)
            return {
                ...state,
                selectedProducts: newProductList,
                totalPrices: newTotalPrices
            }
        case UPDATE_TOTALPRICES:
            return {
                ...state,
                totalPrices: action.payload
            }
        case DELETE_PRODUCT:
            const newProducts = state.selectedProducts.filter(product => product.id !== action.payload.id)
            return {
                ...state,
                selectedProducts: newProducts
            }
        case CLEAR_CART:
            return {
                ...state,
                selectedProducts: [],
                totalPrices: 0
            }
        default:
            return state
    }
}

export default cartReducer;
