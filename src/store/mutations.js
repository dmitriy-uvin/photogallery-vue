import {
    SET_LOADING
} from "@/store/mutationTypes";

export default {
    [SET_LOADING]: (state, isLoading = true) => {
        state.isLoading = isLoading;
    }
}