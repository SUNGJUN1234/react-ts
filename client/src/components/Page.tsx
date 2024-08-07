import PageHeader from "./page/PageHeader.tsx";
import PageContent from "./page/PageContent.tsx";
import PageFooter from "./page/PageFooter.tsx";

const Page = () => {

    return (
        <div className={"page"}>
            <PageHeader />
            <PageContent />
            <PageFooter />
        </div>
    );
};

export default Page;