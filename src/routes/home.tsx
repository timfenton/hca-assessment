import SearchBox from "../features/search/search-box";
import LinkOrAnchor from "../components/shared/link-or-anchor";
import PageContentSection from "../layouts/page-content";
import PageTitleSection from "../layouts/page-title";
import FilterableOfferings from "../features/treatment-services-specialties-filter/filterable-offerings";

const HomePage: React.FC = ():React.ReactNode => {
    return (
      <div className="flex flex-col w-full">
        <PageTitleSection>
          <div className="flex flex-col">
            <h1>Find Care</h1>
            <SearchBox className="w-64 "/>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center">
            <LinkOrAnchor routeOrLink="#">Need help? We're here.</LinkOrAnchor>
          </div>
        </PageTitleSection>
        <PageContentSection>
          <h2 className="text-center left-auto right-auto w-full">Treatments, Services and Specialties</h2>
          <FilterableOfferings />
        </PageContentSection>
      </div>
    );
}

export default HomePage;