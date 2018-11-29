export const customStyles = {
    control: () => ({
        width: 100,
    }),
    singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { opacity, transition };
    },
};
