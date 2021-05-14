const USP = (): React.ReactElement => {
    const getYears = (): string => {
        const toDate = new Date();
        let yearsDiff = toDate.getFullYear() - 2014;
        if (toDate.getMonth() <= 9) {
            yearsDiff -= 1;
        }
        return String(yearsDiff);
    }

    return (
        <div className="u-mb+ c-usp__wrapper">
            <div className="u-pb+ c-usp__block">
                <span className="u-grid__col4 c-usp__title">XP</span>
                <span className="u-grid__col8 c-usp__description">Over {getYears()} years commercial experience</span>
            </div>
            <div className="u-pb+ c-usp__block">
                <span className="u-grid__col4 c-usp__title">UX</span>
                <span className="u-grid__col8 c-usp__description">Creating beautiful user experiences</span>
            </div>
            <div className="u-pb+ c-usp__block">
                <span className="u-grid__col4 c-usp__title">AA</span>
                <span className="u-grid__col8 c-usp__description">Making inclusive &amp; accessible web content</span>
            </div>
        </div>
    );
}

export default USP;
