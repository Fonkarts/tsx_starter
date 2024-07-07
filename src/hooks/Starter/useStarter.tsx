const useStarter = () => {
    const starterCallback = () => {
        return "Some starter callback";
    };

    return {
        starterCallback,
    };
};

export default useStarter;
