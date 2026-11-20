interface IUseAuthModal {
    onSignUpClick: () => void;
};

const useAuthModal = ({ onSignUpClick }: IUseAuthModal) => {
    const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
};

export { useAuthModal };
