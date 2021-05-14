import React from "react";
import Accordion from "../../components/Accordion";
import Jobs from "./Jobs";

const Work = (): React.ReactElement => {
    const getAccordion = (job: string): React.ReactElement => {
        const Component = Jobs[job];
        return (
            <Component />
        );
    };

    return (
        <section id="workSection" className="u-color-light u-background-dark u-border-angled-primary">
            <div className="u-container">
                <h2>My work</h2>
                {Object.keys(Jobs).map((job, idx) => (
                    <Accordion id={job} key={idx} title={job}>
                        {getAccordion(job)}
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default Work;
