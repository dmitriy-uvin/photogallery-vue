export default {
    methods: {
        showDefaultMessage(message) {
            // eslint-disable-next-line no-undef
            M.toast({html: message, classes: "rounded"});
        },
        showDangerMessage(message) {
            // eslint-disable-next-line no-undef
            M.toast({html: message, classes: "red rounded"});
        },
        showSuccessMessage(message) {
            // eslint-disable-next-line no-undef
            M.toast({html: message, classes: "green rounded"});
        },
    }
}